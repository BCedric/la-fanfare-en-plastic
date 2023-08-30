import React, { useEffect, useMemo, useState } from 'react'

import Http from 'services/Http'
import Gallery from '../Gallery'

const Fanfarons = () => {
  const [fanfarons, setFanfarons] = useState([])

  const photos = useMemo(
    () =>
      fanfarons.map((fanfaron) => {
        return {
          src: `http://${window.location.hostname}/fanfaron/${fanfaron.filename}`,
          width: fanfaron.size.width,
          height: fanfaron.size.height
        }
      }),
    [fanfarons]
  )

  useEffect(() => {
    Http.get('fanfaron').then((fanfarons) => setFanfarons(fanfarons))
  }, [])

  return (
    <div>
      <h1>Les fanfarons</h1>
      <Gallery images={photos} />
    </div>
  )
}

export default Fanfarons
