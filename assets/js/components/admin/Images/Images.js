import React, { useEffect, useState } from 'react'

import Http from 'services/Http'

import ImageForm from './ImageForm'
import ImageList from './ImageList'

const Images = () => {
  const [images, setImages] = useState([])

  const deleteImage = (id) =>
    window.confirm("Etes vous sur de vouloir supprimer l'image ?") &&
    Http.delete(`image/${id}`).then((images) => setImages(images))

  useEffect(() => {
    Http.get('image').then((res) => setImages(res))
  }, [])
  return (
    <div>
      <h2>Banque d'images</h2>
      <ImageList deleteImage={deleteImage} images={images} />
      <ImageForm
        onAdd={(val) => {
          setImages(val)
        }}
      />
    </div>
  )
}

export default Images
