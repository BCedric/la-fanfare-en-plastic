<?php

namespace App\Entity;

use App\Repository\ImageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ImageRepository::class)
 */
class Image
{
    private $directory = "images";

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
     * @ORM\Column(type="integer")
     */
    private $width;

    /**
     * @ORM\Column(type="integer")
     */
    private $height;

    /**
     * @ORM\OneToMany(targetEntity=MediaPhoto::class, mappedBy="image")
     */
    private $mediaPhotos;

    public function __construct()
    {
        $this->mediaPhotos = new ArrayCollection();
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

    public function upload($uploadedFile)
    {
        $filename = $uploadedFile->getClientOriginalName();
        $this->setFilename($filename);
        $uploadedFile->move($this->directory . '/', $filename);
        $size = getimagesize($this->directory . '/' . $filename);

        $this->setWidth($size[0]);
        $this->setHeight($size[1]);
    }

    public function getWidth(): ?int
    {
        return $this->width;
    }

    public function setWidth(int $width): self
    {
        $this->width = $width;

        return $this;
    }

    public function getHeight(): ?int
    {
        return $this->height;
    }

    public function setHeight(int $height): self
    {
        $this->height = $height;

        return $this;
    }

    /**
     * @return Collection|MediaPhoto[]
     */
    public function getMediaPhotos(): Collection
    {
        return $this->mediaPhotos;
    }

    public function addMediaPhoto(MediaPhoto $mediaPhoto): self
    {
        if (!$this->mediaPhotos->contains($mediaPhoto)) {
            $this->mediaPhotos[] = $mediaPhoto;
            $mediaPhoto->setIm($this);
        }

        return $this;
    }

    public function removeMediaPhoto(MediaPhoto $mediaPhoto): self
    {
        if ($this->mediaPhotos->removeElement($mediaPhoto)) {
            // set the owning side to null (unless already changed)
            if ($mediaPhoto->getIm() === $this) {
                $mediaPhoto->setIm(null);
            }
        }

        return $this;
    }
}
