import Miel from "./Miel";
import "./ListeMiels.css";

const miels = [
  {
    id: 1,
    nom: "Acacia",
    couleur: "trés clair, blond",
    bienfaits: "régulateur intestinal, recommandé pour les jeunes enfants",
    image:
      "https://s2.semencesdupuy.com/12572-medium_default/acacia-dealbata.jpg",
  },
  {
    id: 2,
    nom: "Arbousier",
    couleur: "ambre foncé",
    bienfaits: "diurétique, antiseptique urinaire, circulation sanguine",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-d-arbousier.jpg",
  },
  {
    id: 3,
    nom: "Aubépine",
    couleur: "jaune pâle ou ivoire",
    bienfaits: "insomnies, antispasmodique, sédatif",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-d-aubepine.jpg",
  },
  {
    id: 4,
    nom: "Bourdaine",
    couleur: "brun ou cognac",
    bienfaits: "problèmes digestifs",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-de-bourdaine.jpg",
  },
  {
    id: 5,
    nom: "Bruyère blanche",
    couleur: "marron clair cristallisé",
    bienfaits: "problèmes rénaux ou fatigue chronique",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-de-bruyere-blanche.jpg",
  },
  {
    id: 6,
    nom: "Tilleul",
    couleur: "jaune clair ou foncé",
    bienfaits: "rhume/grippe, détoxifiant",
    image:
      "https://www.gaecdutournesol.fr/wp-content/uploads/2019/06/tilleul04.jpg",
  },
  {
    id: 7,
    nom: "Sarrasin",
    couleur: "frun foncé",
    bienfaits: "renforce les os, anémie",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-de-sarrasin.jpg",
  },
  {
    id: 8,
    nom: "Chataignier",
    couleur: "marron sombre",
    bienfaits: "ulcère, hépatite, circulation sanguine, troubles digestifs",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-de-chataignier.jpg",
  },
  {
    id: 9,
    nom: "Montagne",
    couleur: "jaune",
    bienfaits: "tonifiant, maux de gorge",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=405x10000:format=jpg/path/s8a3bad3eced55ef9/image/i074ec967d3cab8ad/version/1554989851/image.jpg",
  },
  {
    id: 10,
    nom: "Lavande",
    couleur: "jaune clair",
    bienfaits: "antiseptique, anti-inflammatoires, ostéoporose",
    image:
      "https://www.apiculture.net/img/cms/blog/2017/xlavander.jpg.pagespeed.ic.FMBg8xsGMk.jpg",
  },
  {
    id: 11,
    nom: "Tournesol",
    couleur: "jaune vif",
    bienfaits: "système immunitaire, maladies respiratoires",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-de-tournesol.jpg",
  },
  {
    id: 12,
    nom: "Amorpha",
    couleur: "jaune vif",
    bienfaits: "maladies cardiaques, personnes agées",
    image: "https://i.ebayimg.com/images/g/zMQAAOSwSPBaediE/s-l400.jpg",
  },
  {
    id: 13,
    nom: "Pissenlit",
    couleur: "jaune vif",
    bienfaits: "maladies du foie, constipation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKhwVE2zQDef3WaHkG_SP8ip9K2UTUarMMg&usqp=CAU",
  },
  {
    id: 14,
    nom: "Romarin",
    couleur: "blanc irisé",
    bienfaits: "rhumatisme, hypertension",
    image:
      "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-de-romarin.jpg",
  },
  {
    id: 15,
    nom: "Colza",
    couleur: "blanc paille",
    bienfaits: "rhumatisme, dynamisme",
    image: "https://www.guide-du-miel.com/Zpic/Illustrations/Miel-de-colza.jpg",
  },
  {
    id: 16,
    nom: "Forêt",
    couleur: "foncée",
    bienfaits: "anémie, pour les diabétiques et les sportifs",
    image:
      "https://www.desgoutsetdescouleurs.com/wp-content/uploads/2015/03/Miel-de-foret.jpg",
  },
  {
    id: 17,
    nom: "Manuka",
    couleur: "brun foncé",
    bienfaits: "antibactérien trés puissant",
    image:
      "https://www.mon-herboristerie.com/images/tinymce/Manuka%20Flowers.jpeg",
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
