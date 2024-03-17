<?php

namespace App\Controller;

use App\Entity\Image;
use App\Repository\ImageRepository;
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

#[Route(path: '/image')]
class ImageController extends AbstractController
{

    private $serializer;
    private $directory = "images";

    public function __construct()
    {
        $this->serializer = new Serializer([new DateTimeNormalizer(), new ObjectNormalizer()], [new JsonEncoder()]);
    }

    #[Route(path: '', name: 'image_index', methods: ['GET'])]
    public function index(ImageRepository $imageRepository): Response
    {
        $images = $imageRepository->findAll();
        return new JsonResponse($this->serializer->normalize($images, 'json', ['circular_reference_handler' => function ($object) {
            return $object->getId();
        }]));
    }

    #[Route(path: '/{filename}', name: 'image_get_one', methods: ['GET'])]
    public function get_one(string $filename, ImageRepository $imageRepository): Response
    {
        $filePath = $this->directory . '/' . $filename;
        $response = new BinaryFileResponse($filePath);

        $response->headers->set('Content-Type', mime_content_type($filePath));
        return $response;
    }

    #[Route(path: '', name: 'post_image', methods: ['POST'])]
    public function post(Request $request, ImageRepository $imageRepository, EntityManagerInterface $em)
    {
        $image = new Image();
        $uploadedFile = $request->files->get('file');

        $filename = $uploadedFile->getClientOriginalName();
        if ($imageRepository->findOneBy(['filename' => $filename])) {
            return new Response('Un média avec ce nom existe déjà', 500);
        }
        $image->upload($uploadedFile);

        $em->persist($image);
        $em->flush();

        return $this->index($imageRepository);
    }

    #[Route(path: '/{id}', name: 'delete_media', methods: ['DELETE'])]
    public function delete(string $id, ImageRepository $imageRepository, EntityManagerInterface $em)
    {
        $image = $imageRepository->findOneBy(['id' => $id]);
        $filesystem = new Filesystem();
        $filesystem->remove($this->directory . '/' . $image->getFilename());

        $em->remove($image);
        $em->flush();

        return $this->index($imageRepository);
    }
}
