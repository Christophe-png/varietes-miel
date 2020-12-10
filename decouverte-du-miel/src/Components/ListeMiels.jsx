import Miel from "./Miel";

const miels = [
  {
    id: 1,
    nom: "acacia",
    couleur: "trés clair, blond",
    bienfaits: "régulateur intestinal, recommandé pour les jeunes enfants",
    image:
      "https://s2.semencesdupuy.com/12572-medium_default/acacia-dealbata.jpg",
  },
  {
    id: 2,
    nom: "arbousier",
    couleur: "ambre foncé",
    bienfaits: "diurétique, antiseptique urinaire, circulation sanguine",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-d-arbousier.jpg",
  },
  {
    id: 3,
    nom: "aubépine",
    couleur: "jaune pâle ou ivoire",
    bienfaits: "insomnies, antispasmodique, sédatif",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-d-aubepine.jpg",
  },
  {
    id: 4,
    nom: "bourdaine",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-de-bourdaine.jpg",
  },
  {
    id: 5,
    nom: "bruyère blanche",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-de-bruyere-blanche.jpg",
  },
];

const ListeMiels = () => (
  <section className="ListeMiels">
    {miels.map((singleMiel) => (
      <Miel
        key={singleMiel.id}
        nom={singleMiel.nom}
        image={singleMiel.image}
        couleur={singleMiel.couleur}
        bienfaits={singleMiel.bienfaits}
      />
    ))}
  </section>
);

export default ListeMiels;
