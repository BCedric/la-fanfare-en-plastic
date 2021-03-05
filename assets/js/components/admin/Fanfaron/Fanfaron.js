import React, { useEffect, useState } from 'react'

import Http from 'services/Http'
import FanfaronForm from './FanfaronForm'
import FanfaronList from './FanfaronList'

const Fanfaron = () => {
  const [fanfarons, setFanfarons] = useState([])

  useEffect(() => {
    Http.get('fanfaron').then((res) => setFanfarons(res))
  }, [])

  const onAddDate = (fanfaron) => {
    const formData = new FormData()
    formData.append('file', fanfaron.file, fanfaron.file.name)
    return Http.postFormData('fanfaron', formData)
      .then((fanfarons) => setFanfarons(fanfarons))

      .catch(() => alert('Le fichier est trop volumineux'))
  }

  const onDelete = (id) =>
    Http.delete(`fanfaron/${id}`).then((fanfarons) => setFanfarons(fanfarons))

  return (
    <div>
      <h2>Fanfarons</h2>
      <FanfaronList fanfarons={fanfarons} onDelete={onDelete} />
      <FanfaronForm onAdd={onAddDate} />
    </div>
  )
}

export default Fanfaron
