import React, { useCallback, useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'

function importAll(r) {
  return r.keys().map(r)
}

const images = importAll(
  require.context('images/photos', false, /\.(png|jpe?g|svg)$/)
)

const Photos = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const photos = images.map((image) => ({
    src: image,
    width: 3,
    height: 2
  }))

  return (
    <div>
      <p className="citation">
        « Une photographie, un film, le cadre met des frontières à l'image.
        L'artiste, lui, s'approprie ces frontières pour en faire des chemins
        vers son point de fuite. » -{' '}
        <span>Sur la Photographie K. Plotchobotski</span>
      </p>
      <h1>Photos</h1>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default Photos
