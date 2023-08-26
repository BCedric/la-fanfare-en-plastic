import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)

  const toggleMenu = (e) => setIsMenuToggled(!isMenuToggled)

  return (
    <nav className="mobile-menu">
      {isMenuToggled && (
        <div>
          <div className="menu">
            <ul onClick={toggleMenu}>
              <Link to="/">
                <li>Fanfare</li>
              </Link>
              <Link to="/fanfarons">
                <li>Fanfarons</li>
              </Link>
              <Link to="/fanfaronnades">
                <li>Fanfaronnades</li>
              </Link>
              <Link to="/un-grain-dans-rouages">
                <li>Un grain dans les rouages</li>
              </Link>
              <Link to="/fabuleuse-histoire">
                <li>Une fabuleuse histoire ordinaire</li>
              </Link>
              <Link to="/dans-la-rue">
                <li>Dans la rue</li>
              </Link>
              <Link to="/videos">
                <li>Vidéos</li>
              </Link>
              <Link to="/photos">
                <li>Photos</li>
              </Link>
              <Link to="/agenda">
                <li>Agenda</li>
              </Link>
              <Link to="/presse">
                <li>Presse</li>
              </Link>
              <Link to="/cabaret">
                <li>Les Soirées Cabarets</li>
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
        </div>
      )}
      <div
        className={`arrow-icon ${isMenuToggled ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <svg viewBox="0 0 284.929 284.929">
          <g>
            <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
    </nav>
  )
}

export default MobileMenu
