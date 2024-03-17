<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/auth')]
class AuthController extends AbstractController
{

    #[Route(path: '', name: 'auth_user', methods: ['PUT'])]
    public function auth(Request $request, UserRepository $userRepository)
    {
        $body = json_decode($request->getContent(), true);
        $user = $userRepository->findOneBy(['login' => $body['login'], 'password' => md5($body['password'])]);
        if ($user != null) {
            return new Response("OK");
        }
        return new Response("Auth failed");
    }

    #[Route(path: '/password/{password}', name: 'auth_gen_password', methods: ['PUT'])]
    public function genPassword(string $password)
    {
        return new JsonResponse(md5($password));
    }
}
