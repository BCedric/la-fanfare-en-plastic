import React from 'react'

import moment from 'moment'

const DatesList = ({ dates, onDelete }) => {
  const displayDate = (dateTxt) => moment(dateTxt).format('DD/MM/YYYY HH:mm')

  return (
    <div>
      <table className="table" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Info</th>
            <th>Lieu</th>
            <th>Spectacle</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr key={index}>
              <td>{displayDate(date.date)}</td>
              <td>{date.info}</td>
              <td>{date.place}</td>
              <td>{date.entertainment}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(date.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DatesList
