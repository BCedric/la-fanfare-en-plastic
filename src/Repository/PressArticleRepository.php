<?php

namespace App\Repository;

use App\Entity\PressArticle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PressArticle|null find($id, $lockMode = null, $lockVersion = null)
 * @method PressArticle|null findOneBy(array $criteria, array $orderBy = null)
 * @method PressArticle[]    findAll()
 * @method PressArticle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PressArticleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PressArticle::class);
    }

    public function findAll()
    {
        return $this->findBy(array(), array('date' => 'DESC'));

    }

    // /**
    //  * @return PressArticle[] Returns an array of PressArticle objects
    //  */
    /*
    public function findByExampleField($value)
    {
    return $this->createQueryBuilder('p')
    ->andWhere('p.exampleField = :val')
    ->setParameter('val', $value)
    ->orderBy('p.id', 'ASC')
    ->setMaxResults(10)
    ->getQuery()
    ->getResult()
    ;
    }
     */

    /*
public function findOneBySomeField($value): ?PressArticle
{
return $this->createQueryBuilder('p')
->andWhere('p.exampleField = :val')
->setParameter('val', $value)
->getQuery()
->getOneOrNullResult()
;
}
 */
}
