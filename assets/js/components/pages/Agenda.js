import React, { useEffect, useState } from 'react'

import moment from 'moment'

import Http from 'services/Http'

import datesImg from 'images/dates.png'

const Agenda = () => {
  const [dates, setDates] = useState([])

  useEffect(() => {
    Http.get('date').then((dates) => setDates(dates.upcoming))
  }, [])

  const getDate = (date) => {
    const dateMoment = moment(date.date).locale('fr')
    let res
    if (dateMoment.minutes() !== 0 && dateMoment.hours() !== 0) {
      res = dateMoment.format('dddd D MMMM YYYY à HH[h]mm')
    } else {
      res = dateMoment.format('dddd D MMMM YYYY')
    }
    return res.charAt(0).toUpperCase() + res.slice(1)
  }

  return (
    <div>
      <p className="citation">
        « Tel un arc-en-ciel qui fend le crépuscule, la Fanfare est en concert.
        » - <span>Poésie du terroir Magazine</span>
      </p>
      <h1>Prochains concerts</h1>
      {dates.map((date, index) => (
        <div key={index} className="agenda-date">
          <span className="bold">{getDate(date)}</span>
          <span>
            {date.place} - {date.entertainment}
          </span>
          {date.info !== '' && <span>{date.info}</span>}
        </div>
      ))}
      <img src={datesImg} alt="dates" />
      <h2>Elle y est passée</h2>
      <ul>
        <li>Festival au Village - Brioux sur Boutonne (79) en 2021</li>
        <li>Fête de la StJean - Lussac les Châteaux (86) en 2021</li>
        <li>Fête du Clos - Les Roches Prémaries (86) en 2021</li>
        <li>La foire aux melons - Vendeuvre du Poitou (86)</li>
        <li>St Martin Valmeroux (15)</li>
        <li>Curzay sur Vonne (86)</li>
        <li>Festival One Two Tripoux - Thiézac (15) en 2019</li>
        <li>soirée au Château - Chiré en Montreuil (86) en 2019</li>
        <li>les jeudis jeux de rue - Angoulême / Allègre (63) en 2019</li>
        <li>Festival en Bastides 2015, 2018</li>
        <li>
          Festival les DévéRouillé 2018 Salle R2B - Vouneuil sous Biard 2017
        </li>
        <li>
          Festival international de théâtre de rue d'Aurillac (15) en 2007,
          2008, 2010, 2013 et 2014
        </li>
        <li>
          Festival des Expressifs de Poitiers (86) en 2007, 2008, 2012 et 2014
        </li>
        <li>Festival « Biard Dans Les Airs », tous les ans depuis 2006</li>
        <li>« Le Monde en Fête » 2012 à Poitiers (86)</li>
        <li>Résidence à Cadillac (33) en août 2012</li>
        <li>Festival « Fest'Art » en 2011 à Libourne (33)</li>
        <li>La Fête du Parc 2010 (avec Bratsch) - Lezay (79)</li>
        <li>
          Festival « Musiques d'ici et d'ailleurs » en 2010 à Vivonne (86)
        </li>
        <li>
          Festival « La Belle Rouge » en 2009 à Saint-Amant-Roches-Savine (63)
        </li>
        <li>Festival « Fêtes Escales » en 2009 à Quincay (86)</li>
        <li>Festival des Charibaudes en 2007 à Celle l'Evescault (86)</li>
        <li>Fête de l'été en juin 2012 à Saint-Georges-du-Bois (17)</li>
      </ul>
      <p>
        <span className="bold">Et aussi : </span> Châtellerault, Ligugé,
        Romagne, Adriers, Lussac-les-Châteaux, Quincay, Bellejouanne,
        Mauprévoir, Lusignan, Bonneuil-Matours, Sèvres-Anxaumont, Gencay, Saint
        Maurice la Clouère, Saint Macoux, Champagné Saint-Hilaire,
        Celle-Levescaux, Montmorillon, Saint Pierre de Maillé, La Chapelle
        Montreuil
      </p>
    </div>
  )
}

export default Agenda
