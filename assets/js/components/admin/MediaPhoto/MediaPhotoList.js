import React from 'react'

const MediaPhotoList = ({ mediaPhotos, onDelete }) => {
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
        {mediaPhotos.map((mp, i) => (
          <tr key={i}>
            <td>{mp.image.filename}</td>
            <td>
              <img
                src={`http://${window.location.hostname}/image/${mp.image.filename}`}
                alt={mp.image.filename}
              />
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(mp.id)}
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

export default MediaPhotoList
