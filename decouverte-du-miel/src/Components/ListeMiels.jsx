import Miel from "./Miel";
import "./ListeMiels.css";

const ListeMiels = (props) => (
  <section className="ListeMiels">
    {props.miels.map((singleMiel) => (
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
