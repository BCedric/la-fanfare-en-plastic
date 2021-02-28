import React, { useCallback, useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

function importAll(r) {
  return r.keys().map(r)
}

const images = importAll(
  require.context('images/fanfarons', false, /\.(png|jpe?g|svg)$/)
)

const Fanfarons = () => {
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
    width: 2,
    height: 3
  }))

  return (
    <div>
      <h1>Les fanfarons</h1>
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

export default Fanfarons
