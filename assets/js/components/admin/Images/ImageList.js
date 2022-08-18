import React from 'react'

const ImageList = ({ deleteImage, images }) => {
  const imgSrc = (image) => `${window.BASE_URL}/image/${image.filename}`

  const isImgUsed = (img) => img.mediaPhotos.length > 0

  return (
    <>
      <table className="table">
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
                {!isImgUsed(image) && (
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteImage(image.id)}
                  >
                    Supprimer
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ImageList
