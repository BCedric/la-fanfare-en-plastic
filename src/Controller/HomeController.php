<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route(path: '/', name: 'home')]
    public function index(Request $request): Response
    {
        $host = $request->getSchemeAndHttpHost();

        return $this->render('default/index.html.twig', ['host' => $host]);
    }
}
