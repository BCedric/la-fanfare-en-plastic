import React, { useEffect, useState } from 'react'

const PressArticlesForm = ({ addArticle }) => {
  const [date, setDate] = useState('')
  const [newspaper, setNewspaper] = useState('')

  const fileInput = React.createRef()

  const isFormValid = true

  const submit = (e) => {
    e.preventDefault()
    addArticle({ file: fileInput.current.files[0], date, newspaper }).then(
      () => (e.target.value = null)
    )
  }

  return (
    <form className="inline-form" onSubmit={submit}>
      <div>
        <label htmlFor="article-file-input" className="form-label">
          Image
        </label>
        <input
          className="form-control"
          id="article-file-input"
          type="file"
          ref={fileInput}
        ></input>
      </div>
      <div>
        <label htmlFor="article-date" className="form-label">
          Date
        </label>
        <input
          type="date"
          id="article-date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="article-newspaper" className="form-label">
          Journal
        </label>
        <input
          type="text"
          id="article-newspaper"
          className="form-control"
          value={newspaper}
          onChange={(e) => setNewspaper(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" disabled={!isFormValid}>
        Ajouter
      </button>
    </form>
  )
}

export default PressArticlesForm
