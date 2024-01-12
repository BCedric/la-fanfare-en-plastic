import habitansDuDoute3 from 'images/spectacles/La Fanfare en Plastic 2 @Lucas Moreau BD.jpg'
import habitansDuDoute2 from 'images/spectacles/La Fanfare en Plastic. @Lucas Moreau BD.jpg'
import habitansDuDoute1 from 'images/spectacles/Les Habitants du Doute - la Fanfare en Plastic.jpg'
import React from 'react'

const HabitantsDuDoute = () => {
  return (
    <div className="habitants-doute">
      <img src={habitansDuDoute1} className="affiche" />
      <h1>Les habitants du doute</h1>
      <p>
        La Fanfare en Plastic est toujours là. Ses nombreux musicien-nes et
        chanteur-euses ont toujours l’envie d’être ensemble et d’y croire. Un
        univers festif, des chansons, du théâtre, de la poésie autour d’un
        répertoire varié qui donne à réfléchir. En 1 heure, entre doutes et
        certitudes, les chansons de Moustaki, Mano Solo, Anne Sylvestre, Ridan,
        France Gall, Debout sur le Zinc... vous donneront rires, émotions,
        révoltes, et plus que jamais l’envie d’émancipation et de liberté.
      </p>
      <div className="hdd-video-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/9oTuPsLGcbw?si=NJs96Uko5JBZSvYj"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="imgs-container">
        <img src={habitansDuDoute3} />
        <img src={habitansDuDoute2} />
      </div>
    </div>
  )
}

export default HabitantsDuDoute
