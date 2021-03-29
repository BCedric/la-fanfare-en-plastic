import React from 'react'
import contactImg from 'images/contacts.png'

const Contact = () => {
  return (
    <div>
      <p className="citation">
        « L'humain a cette particularité de tisser des liens et chercher le
        contact. L'araignée aussi tisse, mais ce n'est pas pareil » -{' '}
        <span>Des hommes et des araignées </span>ed. Larousse
      </p>
      <h1>Coordonnées</h1>
      <img src={contactImg} alt="telephone" />
      <div className="contacts-content">
        <p>Antoine : 06 75 18 69 82</p>
        <p>
          Les Ateliers Musicaux de Biard La Fanfare en Plastic 10 bis rue
          Turquant 86580 Biard
        </p>
        <p>contact@la-fanfare-en-plastic.com</p>
      </div>
    </div>
  )
}

export default Contact
