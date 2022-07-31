<?php

namespace App\Repository;

use App\Entity\MediaPhoto;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MediaPhoto|null find($id, $lockMode = null, $lockVersion = null)
 * @method MediaPhoto|null findOneBy(array $criteria, array $orderBy = null)
 * @method MediaPhoto[]    findAll()
 * @method MediaPhoto[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MediaPhotoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MediaPhoto::class);
    }

    // /**
    //  * @return MediaPhoto[] Returns an array of MediaPhoto objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MediaPhoto
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
