<?php

namespace App\Entity;

use App\Repository\PressArticleRepository;
use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PressArticleRepository::class)
 */
class PressArticle
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $filename;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $newspaper;

    /**
     * @ORM\Column(type="date", options={"default" : "1970-01-01"})
     */
    private $date;

    public function set($props)
    {
        $this->setFilename($props['filename']);
        $this->setNewspaper($props['newspaper']);
        $this->setDate(new DateTime($props['date']));
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFilename(): ?string
    {
        return $this->filename;
    }

    public function setFilename(string $filename): self
    {
        $this->filename = $filename;

        return $this;
    }

    public function getNewspaper(): ?string
    {
        return $this->newspaper;
    }

    public function setNewspaper(string $newspaper): self
    {
        $this->newspaper = $newspaper;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }
}
