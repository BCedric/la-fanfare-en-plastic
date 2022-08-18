import React, { useState } from 'react'

const MediaPhotoForm = ({ images, submit }) => {
  const [imagesSelected, setImagesSelected] = useState([])

  const onSubmit = (e) => {
    submit({ images: imagesSelected })(e).then(() => setImagesSelected(''))
  }

  return (
    <form className="inline-form" onSubmit={onSubmit}>
      <div>
        <label className="form-label">Image</label>
        <select
          className="form-control"
          onChange={(e) => {
            const options = e.target.options
            const value = options[options.selectedIndex].value
            const copy = [...imagesSelected]
            if (imagesSelected.includes(value)) {
              const index = copy.findIndex((item) => item === value)
              copy.splice(index, 1)
            } else {
              copy.push(value)
            }
            setImagesSelected(copy)
          }}
          value={imagesSelected}
          multiple
        >
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
