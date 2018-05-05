<?php
namespace App\Repository;

use App\Entity\Auth\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

class UserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function getUserByApiKey(string $apiKey) 
    {
        $qb = $this->createQueryBuilder('p')
            ->andWhere('p.api_key = :apiKey')
            ->setParameter('apiKey', $apiKey)
            ->getQuery();

        return $qb->execute();
    }
}