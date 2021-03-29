import React from 'react'

import fanfareBandeau from 'images/fanfare-bandeau.png'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import MobileMenu from './MobileMenu'

const MenuBar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })
  return (
    <header>
      <Link to="/" className="header-img">
        <img src={fanfareBandeau} alt="fanfare bandeau" />
      </Link>
      {isDesktopOrLaptop ? (
        <nav>
          <div className="menu">
            <ul>
              <Link to="/">
                <li>Fanfare</li>
              </Link>
              <Link to="/fanfarons">
                <li>Fanfarons</li>
              </Link>
              <li>
                <span>Spectacles</span>
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
          </div>
          <div className="facebook">
            <a
              target="_blank"
              href="https://www.facebook.com/La-Fanfare-en-Plastic-260989124461/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 841.9 595.3"
                className="facebook-icon"
              >
                <g fill="#FFFFFF">
                  <circle cx="300" cy="300" r="300" />
                  <path
                    transform="translate(60 115)"
                    d="M360.7,284.1l12.5-81.4h-78.1v-52.8c0-22.3,10.9-44,45.9-44h35.5V36.5c0,0-32.2-5.5-63.1-5.5C249.1,31,207,70,207,140.6
		v62.1h-71.5v81.4H207V481h88V284.1H360.7z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </nav>
      ) : (
        <MobileMenu />
      )}
    </header>
  )
}

export default MenuBar
