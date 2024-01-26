import aSavoirImg from 'images/asavoir.png'
import histoireImg from 'images/histoire.png'
import React from 'react'

const Home = () => {
  return (
    <div>
      <p className="citation">
        « Bienvenue à Biard, vous serez séduits par ses ruelles pittoresques, sa
        place de l'église et son aéroport international » -{' '}
        <span>Guide de la randonnée en couple</span>, 1965
      </p>
      <h1>La fanfare</h1>
      <h2>Un peu d'histoire</h2>
      <p>
        Il était une fois en 2002, à Biard, près de Poitiers, une joyeuse bande
        de joyeux drilles qui, sous la houlette de Laurent Malouvet, s'est mise
        à pousser la chansonnette. Au départ, il n'était pas encore question de
        plastic et seulement cinq musiciens entouraient une chanteuse. Bien
        vite, ce groupe qui laissait toujours ses portes ouvertes fut étoffé,
        gonflé par de plus en plus d'arrivées. Aujourd'hui il peut atteindre un
        pic de Fanfarons allant jusqu'à 37 !
      </p>
      <img src={histoireImg} alt="histoire" />
      <p>
        Bien entendu pour retrouver le LA dans ce joyeux bazar, un sérieux coup
        de main et surtout d'oreille est apporté par un pro - un vrai - Éric. Il
        maîtrise à merveille le nombre incalculable de boutons de son accordéon,
        alors pensez-donc, 30 fanfarons... Vu que la fanfare donne à voir aussi
        bien qu'à entendre, il fallait bien organiser l'espace. C'est vers Mahé
        que la fanfare se tourne pour apprendre à tourner en rythme. Désormais,
        c'est avec Mylène Audoin et François Périssat que toute cette troupe
        travaille les mises en scène. Vous l'aurez sans doute remarqué, il y a
        des chanteuses et des chanteurs dans la fanfare en plastic. Les pauvres
        se sentaient perdus, sans guide, sans lumière, sans voie et sans voix.
        Mehdi est donc arrivé pour les faire chanter et tirer le meilleur de
        leurs cordes vocales. Mehdi est désormais remplacé par un ancien
        fanfaron, arrivé dans la troupe tout minot, il y a fort longtemps, puis
        a fait son chemin pour devenir enfin notre chef de chœur. Il s'agit de
        Paul Paitel. Le répertoire de la fanfare est assez hétéroclite tout en
        restant dans la chanson (style courant quand il y des chanteurs et
        chanteuses). On y retrouve Edith Piaf, Debout sur le Zinc, Charles
        Aznavour, Jean Yanne, Ridan, la Compagnie Jolie Môme, les Charlots,
        Sanseverino, Mano Solo ou encore Loïc Lantoine... Vous noterez
        l'ouverture assez large au niveau chronologique. Cela permet de
        contenter un maximum de gens, aussi bien chez les fanfaronronnes que
        dans le public. Bref, la Fanfare en Plastic c'est de 7 à 77 ans, c'est
        coloré, c'est panaché, c'est joyeux !
      </p>
      <p>
        Le répertoire de la fanfare est assez hétéroclite tout en restant dans
        la chanson (style courant quand il y des chanteurs et chanteuses). On y
        retrouve Edith Piaf, Charles Aznavour, Jean Yanne, la Compagnie Jolie
        Môme, les Charlots, Sanseverino ou encore Loïc Lantoine... Vous noterez
        l'ouverture assez large au niveau chronologique. Cela permet de
        contenter un maximum de gens, aussi bien chez les fanfarons que dans le
        public. Bref, la Fanfare en Plastic c'est de 7 à 77 ans, c'est coloré,
        c'est panaché, c'est joyeux !
      </p>
      <h2>Pourquoi la Fanfare en « Plastic » ?</h2>
      <p>
        Voici des hypothèses pour tenter de répondre à cette épineuse question :
      </p>
      <p>
        « Plastic » viendrait de « Plastique », orthographié alors à la «
        vas-y-comme-j'te-pousse ». Le plastique étant une matière pratique mais
        peu noble car peu onéreuse, la Fanfare aurait pris ce nom car elle n'est
        pas tout à fait constituée comme une fanfare classique où les cuivres
        remplacent bien souvent les chants... La Fanfare en Plastic serait une
        sorte « d'imitation » de fanfare.
      </p>
      <p>
        Seconde hypothèse : le Plastic est un explosif très courant dans les
        milieux de la démolition de bâtiment et du terrorisme. La Fanfare est
        donc explosive ! Couleurs, instruments, musique, chant, tout pète à la
        figure du public ravi !
      </p>
      <h2>Bon à savoir</h2>
      <div className="paragraphe-with-image">
        <p>
          La Fanfare en Plastic est rattachée aux Ateliers Musicaux de Biard.
          C'est une association qui organise des soirées « cabaret » , des
          concerts et participe à l'organisation du festival{' '}
          <a href="https://biard-dans-les-airs.alwaysdata.net">
            Biard dans les Airs !
          </a>
        </p>

        <img src={aSavoirImg} alt="bonhomme dans son fauteuil" />
      </div>
    </div>
  )
}

export default Home
