<?php

namespace App\Controller;

use App\Entity\MediaPhoto;
use App\Repository\ImageRepository;
use App\Repository\MediaPhotoRepository;
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
 * @Route("/media-photo")
 */
class MediaPhotoController extends AbstractController
{
    private $serializer;

    public function __construct()
    {
        $this->serializer = new Serializer([new DateTimeNormalizer(), new ObjectNormalizer()], [new JsonEncoder()]);
    }

    /**
     * @Route("", name="media-photo", methods={"GET"})
     */
    public function index(MediaPhotoRepository $mediaPhotoRepository): Response
    {
        return new JsonResponse($this->serializer->normalize($mediaPhotoRepository->findAll(), null, ['circular_reference_handler' => function ($object) {
            return $object->getId();
        }])
        );
    }

    /**
     * @Route("", name="media-photo_post", methods={"POST"})
     */
    public function create(Request $request, EntityManagerInterface $em, ImageRepository $imageRepository, MediaPhotoRepository $mediaPhotoRepository)
    {
        $body = json_decode($request->getContent(), true);
        foreach ($body['images'] as $image_id) {
            $mediaPhoto = new MediaPhoto();
            $image = $imageRepository->findOneBy(['id' => $image_id]);
            $mediaPhoto->setImage($image);

            $em->persist($mediaPhoto);
        }

        $em->flush();

        return $this->index($mediaPhotoRepository);
    }

    /**
     * @Route("/{id}", name="media-photo_delete", methods={"DELETE"})
     */
    public function delete(string $id, MediaPhotoRepository $mediaPhotoRepository, EntityManagerInterface $em)
    {
        $mediaPhoto = $mediaPhotoRepository->findOneBy(['id' => $id]);
        $em->remove($mediaPhoto);
        $em->flush();
        return $this->index($mediaPhotoRepository);
    }
}
