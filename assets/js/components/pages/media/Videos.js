import React from 'react'
import videos from 'images/videos.png'

const Videos = () => {
  const links = [
    {
      link: 'https://www.youtube.com/embed/vIMZ_22S9TA',
      legend: "L'entrevue musicale de la Fanfare"
    },
    {
      link: 'https://youtube.com/embed/fcdmk_50kO0',
      legend: 'Un Grain dans les Rouages - Teaser n°1'
    },
    {
      link: 'https://youtube.com/embed/whWKUPhq9Ro',
      legend: 'Festival en Bastides, août 2015'
    },
    {
      link: 'https://youtube.com/embed/7xMNqJ96M2U',
      legend: 'Festival les Expressifs, Poitiers, octobre 2012'
    },
    {
      link: 'https://youtube.com/embed/SUW8wnEzRik',
      legend: 'Dabari Elbo, jumelage avec le Tchad - Denis Taher, août 2015'
    },
    {
      link: 'https://www.dailymotion.com/embed/video/xbn7zr',
      legend: 'la Grande Jaja, 2008'
    }
  ]
  return (
    <div>
      <img src={videos} />
      <h1>Vidéos</h1>
      <div className="videos-container">
        {links.map((obj, index) => (
          <div className="video" key={index}>
            <iframe
              width="556"
              height="311"
              src={obj.link}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <span className="video-legend">{obj.legend}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos
