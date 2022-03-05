import React, { useEffect, useState } from 'react'

import Http from 'services/Http'
import ImageForm from './ImageForm'

const ImageList = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    Http.get('image').then((res) => setImages(res))
  }, [])

  const deleteImage = (id) =>
    window.confirm("Etes vous sur de vouloir supprimer l'image ?") &&
    Http.delete(`image/${id}`).then((images) => setImages(images))

  const imgSrc = (image) => `${window.BASE_URL}/image/${image.filename}`

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nom de fichier</th>
            <th>Adresse</th>
            <th>Aperçu</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {images.map((image, key) => (
            <tr key={key}>
              <td>{image.filename}</td>
              <td>
                <a href={imgSrc(image)} target="_blank">
                  {imgSrc(image)}
                </a>
              </td>
              <td>
                <img className="img-item-view" src={imgSrc(image)} />
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => deleteImage(image.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ImageForm
        onAdd={(val) => {
          setImages(val)
        }}
      />
    </>
  )
}

export default ImageList
