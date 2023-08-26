import React, { useCallback, useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import Http from 'services/Http'

const Fanfarons = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const [fanfarons, setFanfarons] = useState([])

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const photos = fanfarons.map((fanfaron) => {
    return {
      src: `http://${window.location.hostname}/fanfaron/${fanfaron.filename}`,
      width: fanfaron.size.width,
      height: fanfaron.size.height
    }
  })

  useEffect(() => {
    Http.get('fanfaron').then((fanfarons) => setFanfarons(fanfarons))
  }, [])

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
