import React from 'react'

import photo from 'images/spectacles/rue.jpg'

const DansLaRue = () => {
  return (
    <div>
      <img className="affiche-paysage" src={photo} />
      <h1>Dans la rue (ancien spectacle 2013 - 2016)</h1>
      <p>
        En une heure, ces chansons de Brassens, Vian, Brigitte Fontaine, Piaf, R
        Wan, Zebda, Yves Jamait , Claude Nougaro... vous emmèneront dans
        l’univers de la Rue. C’est en effet dans la rue que ça se passe : les
        amours naissantes ou finissantes, les manifestations, les parties de
        pétanque, les passants ordinaires mais aussi les prostitués, les SDF,
        les zazous qui se croisent et se rencontrent au petit matin, que l’on se
        lève ou que l’on parte se coucher. Laissez- vous emporter par les
        nombreux musiciens et chanteurs de la Fanfare en plastic :rires,
        émotions, révoltes avec toujours l’envie d’être ensemble et d’y
        croire...{' '}
      </p>
      <p>
        Interprétation: La Fanfare en Plastic
        <br /> Mise en voix: Mehdj CHÉRIF et Paul PAITEL
        <br /> Mise en scène: Mahé FROT
        <br /> Mise en musique: Éric PROUD
      </p>
    </div>
  )
}

export default DansLaRue
