import React from 'react'

const FanfaronForm = ({ onAdd }) => {
  const fileInput = React.createRef()

  const isFormValid = true
  const submit = (e) => {
    e.preventDefault()
    onAdd({ file: fileInput.current.files[0] })
  }

  return (
    <form className="inline-form" onSubmit={submit}>
      <div>
        <label htmlFor="fanfaron-file-input" className="form-label">
          Image
        </label>
        <input
          className="form-control"
          id="fanfaron-file-input"
          type="file"
          ref={fileInput}
        ></input>
      </div>
      <button className="btn btn-primary" disabled={!isFormValid}>
        Ajouter
      </button>
    </form>
  )
}

export default FanfaronForm
