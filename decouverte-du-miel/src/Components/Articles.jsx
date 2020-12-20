import React from "react";
import "./Articles.css";
import { Link } from "react-router-dom";

function Articles() {
  return (
    <div className="articles">
      <h1>Le miel c'est trés bon pour la santé !</h1>
      <h2>
        Le miel contient des nutriments aux propriétés antibactériennes,
        antioxydantes et anti-inflammatoires.
      </h2>
      <p>
        Même s’il provient d’une source naturelle, le miel reste un sucre. Mais
        un sucre pas comme les autres. Fabriqué à partir de nectar recueilli par
        les abeilles, ingéré, puis régurgité, cette substance est principalement
        composée d’eau, de fructose et de glucose. Il s’agit de sucres simples
        que l’organisme transforme facilement en énergie. Le miel contient
        également des traces de vitamines, de minéraux, d'électrolytes,
        d'enzymes, d'acides aminés et de flavonoïdes.
      </p>
      <img
        src="https://static5.depositphotos.com/1029404/412/i/600/depositphotos_4120045-stock-photo-fresh-honey.jpg"
        alt="bol de miel"
      />
      <h2>Conseil</h2>
      <p>
        Sa texture est censée être épaisse, et il ne devrait pas s’étaler comme
        un sirop. Le miel le plus foncé est le plus riche en antioxydants, mais
        son goût intense et amer ne plaît pas à tous. Dans la mesure du
        possible, essayez d'acheter du miel produit localement dans un endroit
        où vous pouvez voir les abeilles.
      </p>
      <h1>L'apithérapie: une médecine douce.</h1>
      <img
        src="https://i.skyrock.net/6420/85386420/pics/3267499612_1_3_7Jo3I5iJ.jpg"
        alt="photo apitherapie"
      />
      <p>
        L'apithérapie consiste à guérir de nombreux maux grâce aux bienfaits du
        miel et de ses produits dérivés. Le miel est un aliment énergétique
        recherché par les sportifs avec son sucre facilement utilisable et ses
        310 kcal pour 100 grammes. Les propriétés du miel sont multiples :
        antibactérien, anti-inflammatoire, antioxydants (qui réduisent la
        formation des radicaux libres responsables du vieillissement). Le miel
        améliore la rétention du calcium et du magnésium ainsi que le taux
        sanguin d'hémoglobine. En milieu hospitalier, un miel spécialement
        préparé et standardisé pour sa pureté bactérienne est utilisé pour la
        cicatrisation. Le pollen : riche en protéines, il améliore l'état
        général en stimulant les défenses immunitaires. C'est un fortifiant
        utilisé en cas de fatigue, d'attaque bactérienne ou virale. La gelée
        royale : C'est aussi un fortifiant très efficace dont les bienfaits
        agissent sur l'ensemble de l'organisme. Elle peut être utilisée en cure
        à l'automne ou au printemps. La propolis : Collectée par les abeilles
        sur les bourgeons des arbres, elle est utilisée par ces dernières pour
        ses vertus antibactériennes. En médecine douce humaine, la propolis est
        indiquée pour soigner la majorité des infections bactériennes.{" "}
      </p>
    </div>
  );
}

export default Articles;
