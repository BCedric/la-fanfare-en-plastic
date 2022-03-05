<?php

namespace App\Controller;

use App\Repository\PageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 * @Route("/page")
 */
class PageController extends AbstractController
{

    private $serializer;

    public function __construct()
    {
        $this->serializer = new Serializer([new DateTimeNormalizer(), new ObjectNormalizer()], [new JsonEncoder()]);
    }

    /**
     * @Route("/{label}", name="page_index", methods={"GET"})
     */
    public function index(string $label, PageRepository $pageRepository): Response
    {
        $page = $pageRepository->findOneBy(['label' => $label]);
        return new JsonResponse($this->serializer->normalize($page));
    }

    /**
     * @Route("/{id}", name="page_update", methods={"PUT"})
     */
    public function update(string $id, Request $request, PageRepository $pageRepository, EntityManagerInterface $em): Response
    {
        $body = json_decode($request->getContent(), true);
        $page = $pageRepository->findOneBy(['id' => $id]);
        $page->setContent($body['content']);
        $em->flush();
        return new JsonResponse($this->serializer->normalize($page));
    }

}
