import React from 'react'
import Gallery from 'react-photo-gallery'

function importAll(r) {
  return r.keys().map(r)
}

const images = importAll(
  require.context('images/fanfarons', false, /\.(png|jpe?g|svg)$/)
)

const Fanfarons = () => {
  const photos = images.map((image) => ({ src: image, width: 2, height: 3 }))

  return (
    <div>
      <h1>Les fanfarons</h1>
      <Gallery photos={photos} />
    </div>
  )
}

export default Fanfarons
