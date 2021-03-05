import React, { useEffect, useState } from 'react'
import Http from 'services/Http'

import PressArticlesList from './PressArticlesList'
import PressArticlesForm from './PressArticlesForm'

const PressArticles = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    Http.get('press-article').then((articles) => setArticles(articles))
  }, [])

  const addArticle = (article) => {
    const formData = new FormData()
    formData.append('file', article.file, article.file.name)
    formData.append('newspaper', article.newspaper)
    formData.append('date', article.date)

    return Http.postFormData('press-article', formData)
      .then((articles) => setArticles(articles))

      .catch(() => alert('Le fichier est trop volumineux'))
  }

  const onDelete = (id) =>
    Http.delete(`press-article/${id}`).then((articles) => setArticles(articles))

  return (
    <div>
      <h2>Articles de presse</h2>
      <PressArticlesList articles={articles} onDelete={onDelete} />
      <PressArticlesForm addArticle={addArticle} />
    </div>
  )
}

export default PressArticles
