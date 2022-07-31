import React, { useState } from 'react'

const MediaPhotoForm = ({ images, submit }) => {
  const [imageSelected, setImageSelected] = useState('')

  const onSubmit = (e) => {
    submit({ image: imageSelected })(e).then(() => setImageSelected(''))
  }

  return (
    <form className="inline-form" onSubmit={onSubmit}>
      <div>
        <label className="form-label">Image</label>
        <select
          className="form-control"
          onChange={(e) => (
            console.log(e.target.value), setImageSelected(e.target.value)
          )}
          value={imageSelected}
        >
          <option value=""></option>
          {images.map((i, key) => (
            <option key={key} value={i.id}>
              {i.filename}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Ajouter</button>
    </form>
  )
}

export default MediaPhotoForm
