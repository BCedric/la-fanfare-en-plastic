import React, { useEffect, useState } from 'react'

import moment from 'moment'

import Http from 'services/Http'

const Presse = () => {
  const [articles, setArticles] = useState([])

  const displayDate = (dateTxt) => moment(dateTxt).format('DD/MM/YYYY')
  const articleSrc = (article) =>
    `http://${window.location.hostname}/press-article/${article.filename}`

  useEffect(() => {
    Http.get('press-article').then((articles) => setArticles(articles))
  }, [])

  return (
    <div>
      <h1>Articles de Presse</h1>
      <div className="press-articles">
        {articles.map((article, index) => (
          <div key={index}>
            <a href={articleSrc(article)} target="_blank">
              <img src={articleSrc(article)} alt={article.filename} />
            </a>
            <legend>
              {article.newspaper}, {displayDate(article.date)}
            </legend>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Presse
