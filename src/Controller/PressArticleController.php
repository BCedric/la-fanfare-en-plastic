<?php

namespace App\Controller;

use App\Entity\PressArticle;
use App\Repository\PressArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

#[Route(path: '/press-article')]
class PressArticleController extends AbstractController
{
    private $serializer;

    private $directory = 'press-articles';

    public function __construct()
    {
        $this->serializer = new Serializer([new DateTimeNormalizer(), new ObjectNormalizer()], [new JsonEncoder()]);
    }

    #[Route(path: '', name: 'press_articles', methods: ['GET'])]
    public function index(PressArticleRepository $pressArticleRepository): Response
    {
        return new JsonResponse(
            $this->serializer->normalize($pressArticleRepository->findAll(), null, ['circular_reference_handler' => function ($object) {
                return $object->getId();
            }])
        );
    }

    #[Route(path: '', name: 'press_article_new', methods: ['POST'])]
    function new(Request $request, PressArticleRepository $pressArticleRepository, EntityManagerInterface $em): Response
    {
        $body = json_decode($request->getContent(), true);
        $article = new PressArticle();

        $uploadedFile = $request->files->get('file');
        $uploadedFile->move($this->directory . '/', $uploadedFile->getClientOriginalName());

        $article->set([
            'filename' => $uploadedFile->getClientOriginalName(),
            'newspaper' => $request->request->get('newspaper'),
            'date' => $request->request->get('date'),
        ]);

        $em->persist($article);
        $em->flush();

        return new JsonResponse(
            $this->serializer->normalize($pressArticleRepository->findAll(), null, ['circular_reference_handler' => function ($object) {
                return $object->getId();
            }])
        );
    }

    #[Route(path: '/{filename}', name: 'press_article', methods: ['GET'])]
    public function getArticle(string $filename, PressArticleRepository $pressArticleRepository): Response
    {
        $filePath = $this->directory . '/' . $filename;
        $response = new BinaryFileResponse($filePath);

        $response->headers->set('Content-Type', mime_content_type($filePath));

        return $response;
    }

    #[Route(path: '/{id}', name: 'pres_article_delete', methods: ['DELETE'])]
    public function delete(PressArticle $pressArticle, PressArticleRepository $pressArticleRepository, EntityManagerInterface $em)
    {
        $filesystem = new Filesystem();
        $filesystem->remove($this->directory . '/' . $pressArticle->getFilename());

        $em->remove($pressArticle);
        $em->flush();
        return new JsonResponse(
            $this->serializer->normalize($pressArticleRepository->findAll(), null, ['circular_reference_handler' => function ($object) {
                return $object->getId();
            }])
        );
    }
}
