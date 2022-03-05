import React, { useState } from 'react'

import Http from 'services/Http'

const ImageForm = ({ onAdd = () => {} }) => {
  const [file, setFile] = useState(null)

  const resetInput = () => {
    setFile(null)
    document.getElementById('admin-image-input').value = null
  }

  const submit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    Http.postFormData('image', formData).then((res) => {
      onAdd(res)
      resetInput()
    })
  }

  const onChange = (e) => {
    const file = e.target.files[0]
    if (file.size > 1000000) {
      alert(
        "L'image est supérieur à 1Mo. Veuillez réduire sa taille avec un compresseur d'image (https://imagecompressor.com/)"
      )
      resetInput()
    } else {
      setFile(file)
    }
  }

  return (
    <form className="form-image-cabaret" onSubmit={submit}>
      <input id="admin-image-input" type="file" onChange={onChange} />
      <button disabled={file == null} className="btn btn-primary">
        Ajouter une image
      </button>
    </form>
  )
}

export default ImageForm
