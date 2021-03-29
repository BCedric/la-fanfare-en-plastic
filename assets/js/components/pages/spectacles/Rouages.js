import React from 'react'

import affiche from 'images/spectacles/affiche_grain.jpg'

const Rouages = () => {
  return (
    <div>
      <img
        className="affiche"
        src={affiche}
        alt="affiche un grain dans les rouages"
      />
      <h1>Un grain dans les rouages</h1>
      <p>
        En une heure ces chansons de Camille, Jean Yanne, Eddy Mitchel, les
        Charlots, Loïc Lantoine , Pierre Perret ,HK et les saltimbanks ,
        Bourvil, Lavilliers... vous emmènent dans un univers festif à la
        recherche de liberté ...... tout en interpellant notre relation au
        travail . Laissez-vous emporter par les nombreux musiciens et chanteurs
        de la Fanfare en plastic: rires, émotions, révoltes avec toujours
        l'envie d'être ensemble et d'y croire...{' '}
      </p>
      <div className="centered-video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fcdmk_50kO0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IG1f1XjCkfo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Rouages
