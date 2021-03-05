import React from 'react'

const FanfaronList = ({ fanfarons, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Fichier</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {fanfarons.map((fanfaron, index) => (
          <tr key={index}>
            <td>{fanfaron.filename}</td>
            <td>
              <img
                src={`http://${window.location.hostname}/fanfaron/${fanfaron.filename}`}
              />{' '}
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(fanfaron.id)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default FanfaronList
