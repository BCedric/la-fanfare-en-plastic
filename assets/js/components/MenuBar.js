import React from 'react'

import fanfareBandeau from 'images/fanfare-bandeau.png'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <header>
      <Link to="/#/" className="header-img">
        <img src={fanfareBandeau} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/#/">Fanfare</Link>
          </li>
          <li>
            <Link to="/#/fanfarons">Fanfarons</Link>
          </li>
          <li>
            <span>Spectacle</span>
            <ul>
              <li className="category">Spectacles en cours</li>
              <li>
                <Link to="/#/fanfaronnades">Fanfaronnades</Link>
              </li>
              <li>
                <Link to="/#/un-grain-dans-rouages">
                  Un grain dans les rouages
                </Link>
              </li>
              <li className="category">Anciens spectacles</li>
              <li>
                <Link to="/#/fabuleuse-histoire">
                  Une fabuleuse histoire ordinaire
                </Link>
              </li>
              <li>
                <Link to="/#/dans-la-rue">Dans la rue</Link>
              </li>
            </ul>
          </li>
          <li>
            <span>Media</span>
            <ul>
              <li>
                <Link to="/#/videos">Vidéos</Link>
              </li>
              <li>
                <Link to="/#/photos">Photos</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#/agenda">Agenda</Link>
          </li>
          <li>
            <Link to="/#/presse">Presse</Link>
          </li>
          <li>
            <Link to="/#/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MenuBar
