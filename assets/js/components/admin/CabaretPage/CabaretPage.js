import React, { useEffect, useRef, useState } from 'react'

import Http from 'services/Http'

import Wysiwyg from '../Wysiwyg'
import ImageList from './ImageList'

const CabaretPage = () => {
  const [page, setPage] = useState(null)
  const [value, setValue] = useState('test')

  const help = useRef(null)
  const arrow = useRef(null)

  useEffect(() => {
    Http.get(`page/cabaret`).then((res) => {
      setPage(res)
    })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    Http.put(`page/${page.id}`, { content: value })
  }

  const toggleHelp = (e) => {
    const helpClassList = help.current.classList
    const arrowClassList = arrow.current.classList
    if (helpClassList.contains('hidden')) {
      helpClassList.remove('hidden')
      arrowClassList.add('open')
    } else {
      helpClassList.add('hidden')
      arrowClassList.remove('open')
    }
  }

  return (
    <div>
      <h2>Page soirées cabaret</h2>
      <form className="form-cabaret" onSubmit={onSubmit}>
        <Wysiwyg
          onChange={(val) => setValue(val)}
          value={value}
          parentProperty={page}
        />
        <button className="btn btn-primary">Modifier</button>
      </form>
      <div>
        <p className="toggle-help informations" onClick={toggleHelp}>
          Astuce : Insérer une image{' '}
          <span className="material-icons" ref={arrow}>
            navigate_next
          </span>
        </p>
        <p className="informations danger hidden" ref={help}>
          Pour insérer une image dans la page des soirées cabaret, veuillez
          l'ajouter à la liste de la banque d'images (ci-dessous), puis copier
          le lien pour l'insérer dans l'éditeur ci-dessus en utilisant l'outil{' '}
          <span className="jodit-toolbar-button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1792 1792"
              className="jodit-icon_image jodit-icon"
            >
              {' '}
              <path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"></path>{' '}
            </svg>
          </span>
          <span className="jodit-toolbar-button__text"></span> Ne pas faire de
          drag n'drop.
        </p>
      </div>
    </div>
  )
}

export default CabaretPage
