import React, { useCallback, useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'

const Gallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback(({ event, photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <PhotoAlbum photos={images} layout="rows" onClick={openLightbox} />
      {viewerIsOpen && (
        <Lightbox
          mainSrc={images[currentImage].src}
          nextSrc={images[(currentImage + 1) % images.length].src}
          prevSrc={
            images[(currentImage + images.length - 1) % images.length].src
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setCurrentImage(currentImage - 1)}
          onMoveNextRequest={() => setCurrentImage(currentImage + 1)}
        />
      )}
    </div>
  )
}

export default Gallery
