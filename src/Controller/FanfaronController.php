<?php

namespace App\Controller;

use App\Entity\Fanfaron;
use App\Repository\FanfaronRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 * @Route("/fanfaron")
 */
class FanfaronController extends AbstractController
{
    private $serializer;

    private $directory = 'fanfarons';

    public function __construct()
    {
        $this->serializer = new Serializer([new DateTimeNormalizer(), new ObjectNormalizer()], [new JsonEncoder()]);
    }

    /**
     * @Route("", name="fanfaron", methods={"GET"})
     */
    public function index(FanfaronRepository $fanfaronRepository): Response
    {
        return new JsonResponse($this->serializer->normalize($fanfaronRepository->findAll(), null, ['circular_reference_handler' => function ($object) {
            return $object->getId();
        }])
        );
    }

    /**
     * @Route("", name="fanfaron_new", methods={"POST"})
     */
    function new (Request $request, FanfaronRepository $fanfaronRepository, EntityManagerInterface $em): Response {

        $fanfaron = new Fanfaron();
        $uploadedFile = $request->files->get('file');
        $uploadedFile->move($this->directory . '/', $uploadedFile->getClientOriginalName());
        $fanfaron->setFilename($uploadedFile->getClientOriginalName());

        $em->persist($fanfaron);
        $em->flush();

        return new JsonResponse($this->serializer->normalize($fanfaronRepository->findAll(), null, ['circular_reference_handler' => function ($object) {
            return $object->getId();
        }])
        );
    }

    /**
     * @Route("/{filename}", name="fanfaron_get", methods={"GET"})
     */
    public function getFanfaron(string $filename, FanfaronRepository $fanfaronRepository): Response
    {
        $filePath = $this->directory . '/' . $filename;
        $response = new BinaryFileResponse($filePath);

        $response->headers->set('Content-Type', mime_content_type($filePath));

        return $response;
    }

    /**
     * @Route("/{id}", name="fanfaron_delete", methods={"DELETE"})
     */
    public function delete(Fanfaron $fanfaron, FanfaronRepository $fanfaronRepository, EntityManagerInterface $em)
    {
        $filesystem = new Filesystem();
        $filesystem->remove($this->directory . '/' . $fanfaron->getFilename());

        $em->remove($fanfaron);
        $em->flush();
        return new JsonResponse($this->serializer->normalize($fanfaronRepository->findAll(), null, ['circular_reference_handler' => function ($object) {
            return $object->getId();
        }])
        );
    }
}
