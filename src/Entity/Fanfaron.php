<?php

namespace App\Entity;

use App\Repository\FanfaronRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FanfaronRepository::class)]
class Fanfaron
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $filename;

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

    public function getSize()
    {

        [$width, $height] = getimagesize('fanfarons/' . $this->getFilename());
        return [
            'width' => $width,
            'height' => $height,
        ];
    }
}