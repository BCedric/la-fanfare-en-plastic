import React, { useState } from 'react'

import DatesList from './DatesList'

const PassedDates = ({ dates, onDelete }) => {
  const [displayPassedDate, setDisplayPassedDate] = useState(false)

  return (
    <React.Fragment>
      <div className="passed-dates-link text-primary">
        {!displayPassedDate ? (
          <span onClick={() => setDisplayPassedDate(true)}>
            Voir les dates passées
          </span>
        ) : (
          <span onClick={() => setDisplayPassedDate(false)}>
            Cacher les dates passées
          </span>
        )}
      </div>
      {displayPassedDate && (
        <React.Fragment>
          <h2>Dates passées</h2>
          <DatesList dates={dates} onDelete={onDelete} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default PassedDates
