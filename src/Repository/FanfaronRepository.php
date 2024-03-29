<?php

namespace App\Repository;

use App\Entity\Fanfaron;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Fanfaron|null find($id, $lockMode = null, $lockVersion = null)
 * @method Fanfaron|null findOneBy(array $criteria, array $orderBy = null)
 * @method Fanfaron[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FanfaronRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Fanfaron::class);
    }

    public function findAll(): array
    {
        return $this->findBy(array(), array('filename' => 'ASC'));
    }

    // /**
    //  * @return Fanfaron[] Returns an array of Fanfaron objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Fanfaron
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
