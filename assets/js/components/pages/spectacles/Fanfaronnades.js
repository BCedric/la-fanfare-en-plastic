import React from 'react'

import affiche from 'images/spectacles/fanfaronnades.jpg'

const Fanfaronnades = () => {
  return (
    <div>
      <img className="affiche" src={affiche} />
      <h1>Fanfaronnades</h1>
      <p>
        L'ancienne formule est la formule originale, la base de la Fanfare en
        Plastic.
      </p>
      <p>
        C'est comme ça que la Fanfare se produit depuis le début. Le spectacle
        peut être joué n'importe où (rue, salle, supermarché, piscine
        privée...). Il peut être en un bloc ou bien découpé, les chansons sont
        aussi bien jouées sur nos « caisses » (avec la mise en scène) ou aux
        tables d'un banquet, dans les allées d'un festival.
      </p>
      <p>
        C'est un tour de chant coloré où tout le monde pioche de quoi ravir ses
        oreilles, ses yeux et ses pieds !
      </p>
      <div className="centered-video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TJQmRdvEcgQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <span className="bold">Le répértoire :</span> Bella Ciao (trad. Italien)
        - Emmenez moi (C. Aznavour) - Les amants de St Jean (L. Delyle) -
        Accordéon (S. Gainsbourg) - Ya Basta (Cie. Jolie Môme) - Padam (E. Piaf)
        - La grande Jaja (P. Font) - TGV (La Fanfare en Plastic) - J'aurais
        voulu (La Fanfare en Plastic) - J'veux du soleil (Au p'tit Bonheur) -
        Porque te vas ? (Jeanette) - Chanter dans la rue (Cie. Jolie Môme) -
        Marylou et Roger (La Fanfare en Plastic) - Esperanza (Traditionnel)
      </p>
    </div>
  )
}

export default Fanfaronnades
