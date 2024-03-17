<?php

namespace App\Controller;

use App\Entity\Date;
use App\Repository\DateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

#[Route(path: '/date')]
class DateController extends AbstractController
{
    private $serializer;

    public function __construct()
    {
        $this->serializer = new Serializer([new DateTimeNormalizer(), new ObjectNormalizer()], [new JsonEncoder()]);
    }

    #[Route(path: '', name: 'date_index', methods: ['GET'])]
    public function index(DateRepository $dateRepository): Response
    {
        return new JsonResponse($this->getDates($dateRepository));
    }

    private function getDates(DateRepository $dateRepository)
    {
        return ['upcoming' => $this->serializer->normalize($dateRepository->findUpcomingDates(), null, ['circular_reference_handler' => function ($object) {
            return $object->getId();
        }]), 'passed' => $this->serializer->normalize($dateRepository->findPassedDates(), null, ['circular_reference_handler' => function ($object) {
            return $object->getId();
        }])];
    }

    #[Route(path: '', name: 'date_new', methods: ['POST'])]
    function new(Request $request, DateRepository $dateRepository, EntityManagerInterface $em): Response
    {
        $body = json_decode($request->getContent(), true);
        $date = new Date();

        $date->set($body);

        $em->persist($date);
        $em->flush();

        return new JsonResponse($this->getDates($dateRepository));
    }

    #[Route(path: '/{id}', name: 'date_show', methods: ['GET'])]
    public function show(Date $date): Response
    {
        return new JsonResponse(['date' => $this->serializer->normalize($date, null, ['circular_reference_handler' => function ($object) {
            return $object->getId();
        }])]);
    }

    #[Route(path: '/{id}', name: 'date_edit', methods: ['PUT'])]
    public function edit(Request $request, Date $date, EntityManagerInterface $em): Response
    {
        $body = json_decode($request->getContent(), true);
        $date->set($body);

        $em->flush();

        return new JsonResponse([
            'date' => $this->serializer->normalize($date, null, ['circular_reference_handler' => function ($object) {
                return $object->getId();
            }]),
        ]);
    }

    #[Route(path: '/{id}', name: 'date_delete', methods: ['DELETE'])]
    public function delete(Date $date, DateRepository $dateRepository, EntityManagerInterface $em): Response
    {
        $em->remove($date);
        $em->flush();
        return new JsonResponse($this->getDates($dateRepository));
    }
}
