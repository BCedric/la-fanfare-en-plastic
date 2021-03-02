import React, { useEffect, useState } from 'react'

import Http from 'services/Http'

import DatesList from './DatesList'
import DateForm from './DateForm'

const Dates = () => {
  const [dates, setDates] = useState([])

  useEffect(() => {
    Http.get('date').then((res) => setDates(res))
  }, [])

  const onAddDate = (date) => {
    return Http.post('date', date).then((dates) => setDates(dates))
  }

  const onDeleteDate = (id) => {
    return Http.delete(`date/${id}`).then((dates) => setDates(dates))
  }

  return (
    <div>
      <h2>Concerts</h2>
      <DatesList dates={dates} onDelete={onDeleteDate} />
      <DateForm addDate={onAddDate} />
    </div>
  )
}

export default Dates
