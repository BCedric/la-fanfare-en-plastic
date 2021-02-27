import React from 'react'

import fanfareBandeau from 'images/fanfare-bandeau.png'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <header>
      <Link to="/" className="header-img">
        <img src={fanfareBandeau} />
      </Link>
      <nav>
        <ul>
          <Link to="/">
            <li>Fanfare</li>
          </Link>
          <Link to="/fanfarons">
            <li>Fanfarons</li>
          </Link>
          <li>
            <span>Spectacle</span>
            <ul>
              <li className="category">Spectacles en cours</li>
              <Link to="/fanfaronnades">
                <li>Fanfaronnades</li>
              </Link>
              <Link to="/un-grain-dans-rouages">
                <li>Un grain dans les rouages</li>
              </Link>
              <li className="category">Anciens spectacles</li>
              <Link to="/fabuleuse-histoire">
                <li>Une fabuleuse histoire ordinaire</li>
              </Link>
              <Link to="/dans-la-rue">
                <li>Dans la rue</li>
              </Link>
            </ul>
          </li>
          <li>
            <span>Media</span>
            <ul>
              <Link to="/videos">
                <li>Vidéos</li>
              </Link>
              <Link to="/photos">
                <li>Photos</li>
              </Link>
            </ul>
          </li>
          <Link to="/agenda">
            <li>Agenda</li>
          </Link>
          <Link to="/presse">
            <li>Presse</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default MenuBar
