import React, { useEffect, useState } from 'react'

import Http from 'services/Http'
import Gallery from '../../Gallery'

const Photos = () => {
  const [mediaPhotos, setMediaPhotos] = useState([])
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    setPhotos(
      mediaPhotos.map(({ image }) => {
        return {
          src: `http://${window.location.hostname}/image/${image.filename}`,
          width: image.width,
          height: image.height
        }
      })
    )
  }, [mediaPhotos])

  useEffect(() => {
    Http.get('media-photo').then((mp) => setMediaPhotos(mp))
  }, [])

  return (
    <div>
      <p className="citation">
        « Une photographie, un film, le cadre met des frontières à l'image.
        L'artiste, lui, s'approprie ces frontières pour en faire des chemins
        vers son point de fuite. » -{' '}
        <span>Sur la Photographie K. Plotchobotski</span>
      </p>
      <h1>Photos</h1>
      <Gallery images={photos} />
    </div>
  )
}

export default Photos
