import React from 'react'

import affiche from 'images/spectacles/fabuleuse.png'

const FabuleuseHistoire = () => {
  return (
    <div>
      <img className="affiche" src={affiche} />
      <h1>Une fabuleuse histoire ordinaire (ancien spectacle 2008 - 2012)</h1>
      <p>
        En une heure, revivez 70 ans d'histoire ! Souvenez-vous : le bal
        musette, les colonies, les premiers amours, mai 68, le progrès, les
        fermetures d’usine. Certains l’on vu et on en a tous entendu parlé, ici
        on va se l'entendre chanter. Sans nostalgie, laissez-vous emporter par
        cette fabuleuse histoire ordinaire pour partager avec les nombreux
        musiciens et chanteurs de la Fanfare en Plastic rires, émotions,
        révoltes avec toujours l’envie d’être ensemble et d’y croire... On
        traverse les modes, les styles musicaux avec ce voyage musical qui prend
        des petits instants de notre Histoire.{' '}
      </p>
      <p>
        Deux années de préparation et de travail ont été nécessaires pour monter
        le spectacle « Une fabuleuse histoire ordinaire ».
      </p>
      <p>
        Auteur et interprétation: La Fanfare en Plastic
        <br />
        Mise en voix: Mehdj CHÉRIF
        <br />
        Mise en scène: Mahé FROT
        <br /> Mise en musique: Éric PROUD
      </p>
      <p>
        <span className="bold">Le répertoire :</span> Café du canal (P. Perret)
        - Interogation écrite (G. Lafaye) - Mon dernier bal (Renaud) - Mamadou
        m'a dit (F. Beranger) - Manifestation pacifique (Cie. Jolie Môme) - Sans
        la nommer (G. Moustaki) - Inventaire 66 (M. Delpech) - La complainte du
        progres (B. Vian) - Société Anonyme (E. Mitchel) - Les mains d'or (B.
        Lavillier) - Rue de Panam (Les Ogres de Barback){' '}
      </p>
    </div>
  )
}

export default FabuleuseHistoire
