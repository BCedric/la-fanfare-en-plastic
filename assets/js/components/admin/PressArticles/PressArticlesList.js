import React from 'react'

import moment from 'moment'

const PressArticlesList = ({ articles = [], onDelete = () => {} }) => {
  const displayDate = (dateTxt) => moment(dateTxt).format('DD/MM/YYYY')

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Fichier</th>
          <th>Date</th>
          <th>Journal</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, index) => (
          <tr key={index}>
            <td>{article.filename}</td>
            <td>{displayDate(article.date)}</td>
            <td>{article.newspaper}</td>
            <td>
              <img
                src={`http://${window.location.hostname}/press-article/${article.filename}`}
                alt={article.filename}
              />{' '}
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(article.id)}
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

export default PressArticlesList
