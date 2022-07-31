import React, { useEffect, useMemo, useState } from 'react'

import Http from 'services/Http'
import MediaPhotoForm from './MediaPhotoForm'
import MediaPhotoList from './MediaPhotoList'

const MediaPhoto = () => {
  const [images, setImages] = useState([])
  const [mediaPhotos, setMediaPhotos] = useState([])

  const imageUsedIds = useMemo(
    () => mediaPhotos.map((mp) => mp.image.id),
    [mediaPhotos]
  )

  const imagesNotUsed = useMemo(
    () =>
      images
        .filter((i) => !imageUsedIds.includes(i.id))
        .sort((a, b) => a.filename.localeCompare(b.filename)),
    [images, imageUsedIds]
  )

  const onDelete = (id) =>
    Http.delete(`media-photo/${id}`).then((mp) => setMediaPhotos(mp))

  const onSubmit = (data) => (e) => {
    e.preventDefault()
    return Http.post('media-photo', data).then((mp) => setMediaPhotos(mp))
  }

  useEffect(() => {
    Http.get('image').then((images) => setImages(images))
    Http.get('media-photo').then((mp) => setMediaPhotos(mp))
  }, [])

  return (
    <div>
      <h2>Page médias photos</h2>
      <MediaPhotoList mediaPhotos={mediaPhotos} onDelete={onDelete} />
      <MediaPhotoForm images={imagesNotUsed} submit={onSubmit} />
    </div>
  )
}

export default MediaPhoto
