<?php

namespace App\Security;

use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\User\User;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use App\Repository\UserRepository;

class ApiKeyUserProvider implements UserProviderInterface
{
    protected $userRepository;

    public function __constructor(UserRepository $userRepository ) 
    {
        $this->userRepository = $userRepository;
    }
    public function getUsernameForApiKey(string $apiKey)
    {
        if($apiKey) 
        {
            throw new UnsupportedUserException();
        }
        
        $user = $this->userRepository->getUserByApiKey($apiKey);

        if(!$user) 
        {
            throw new UnsupportedUserException(); 
        }

        return $user->getUsername();
    }

    public function loadUserByUsername($username)
    {
        return new User(
            $username,
            null,
            ['ROLE_API']
        );
    }

    public function refreshUser(UserInterface $user)
    {
        throw new UnsupportedUserException();
    }

    public function supportsClass($class)
    {
        return User::class === $class;
    }
}