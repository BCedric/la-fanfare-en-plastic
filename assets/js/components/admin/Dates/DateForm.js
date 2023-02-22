import React, { useState } from 'react'

const DateForm = ({ addDate }) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [info, setInfo] = useState('')
  const [place, setPlace] = useState('')
  const [entertainment, setEntertainment] = useState('Fanfaronnades')

  const submit = (e) => {
    e.preventDefault()
    addDate({ date: `${date} ${time}`, time, info, place, entertainment }).then(
      (_) => {
        setDate('')
        setTime('')
        setInfo('')
        setPlace('')
        setEntertainment('Fanfaronnades')
      }
    )
  }

  const isFormValid = date !== '' && place !== ''

  return (
    <form className="inline-form" onSubmit={submit}>
      <div>
        <label htmlFor="date-input" className="form-label">
          Date
        </label>
        <input
          type="date"
          id="date-input"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time-input" className="form-label">
          Heure
        </label>
        <input
          type="time"
          id="time-input"
          className="form-control"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="info-input" className="form-label">
          Infos
        </label>
        <input
          type="text"
          id="info-input"
          className="form-control"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="place-input" className="form-label">
          Lieu
        </label>
        <input
          type="text"
          id="place-input"
          className="form-control"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="entertainment-select" className="form-label">
          Spectacle
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="entertainment-select"
          value={entertainment}
          onChange={(e) => setEntertainment(e.target.value)}
        >
          <option value="Fanfaronnades">Fanfaronnades</option>
          <option value="Les habitants du doute">Les habitants du doute</option>
          <option value="Un grain dans les rouages">
            Un grain dans les rouages
          </option>
          <option value="Dans ma rue">Dans ma rue</option>
        </select>
      </div>
      <button className="btn btn-primary" disabled={!isFormValid}>
        Ajouter
      </button>
    </form>
  )
}

export default DateForm
