import React from 'react'
import habitansDuDoute1 from 'images/spectacles/habitans-du-doute1-min.jpg'
import habitansDuDoute2 from 'images/spectacles/habitans-du-doute2-min.jpg'
import habitansDuDoute3 from 'images/spectacles/habitans-du-doute3-min.jpg'
import habitansDuDoute4 from 'images/spectacles/habitans-du-doute4-min.jpg'

const HabitantsDuDoute = () => {
  return (
    <div className="habitants-doute">
      <div className="img-container">
        <img
          src={habitansDuDoute4}
          title="Crédit : Ojunix"
          className="affiche-paysage"
        />
      </div>
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
      <div className="img-line">
        <img
          src={habitansDuDoute3}
          title="Crédit : Ojunix"
          className="affiche-paysage"
        />
        <img src={habitansDuDoute2} className="affiche-paysage" />
      </div>
      <div className="img-line">
        <img src={habitansDuDoute1} className="affiche-paysage" />
      </div>
    </div>
  )
}

export default HabitantsDuDoute
