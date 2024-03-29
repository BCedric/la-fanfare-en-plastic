<?php

namespace App\Repository;

use App\Entity\Date;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Date|null find($id, $lockMode = null, $lockVersion = null)
 * @method Date|null findOneBy(array $criteria, array $orderBy = null)
 * @method Date[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DateRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Date::class);
    }

    public function findAll(): array
    {
        return $this->findBy(array(), array('date' => 'DESC'));
    }

    public function findUpcomingDates()
    {
        $now = new DateTime();
        return $this->createQueryBuilder('d')
            ->andWhere('d.date > :date')
            ->setParameter('date', $now->format('Y-m-d H:i:s'))
            ->orderBy('d.date', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findPassedDates()
    {
        $now = new DateTime();
        return $this->createQueryBuilder('d')
            ->andWhere('d.date < :date')
            ->setParameter('date', $now->format('Y-m-d H:i:s'))
            ->orderBy('d.date', 'DESC')
            ->getQuery()
            ->getResult();
    }

    // /**
    //  * @return Date[] Returns an array of Date objects
    //  */
    /*
    public function findByExampleField($value)
    {
    return $this->createQueryBuilder('d')
    ->andWhere('d.exampleField = :val')
    ->setParameter('val', $value)
    ->orderBy('d.id', 'ASC')
    ->setMaxResults(10)
    ->getQuery()
    ->getResult()
    ;
    }
     */

    /*
public function findOneBySomeField($value): ?Date
{
return $this->createQueryBuilder('d')
->andWhere('d.exampleField = :val')
->setParameter('val', $value)
->getQuery()
->getOneOrNullResult()
;
}
 */
}
