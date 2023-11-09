import { initialCardsWedding } from "../../../utils/constants";
import Card from "../../Card/Card";


function Wedding({onCardClick}) {

  return(
    <section className="wedding">
      <h2 className="photo__text">~~~WEDDING~~~</h2>
      <div className="photo__element">
        {initialCardsWedding.map((card) => {
          return <Card key={card.id} card={card} onCardClick={onCardClick}/>
        })}
      </div>
    </section>
  )
}

export default Wedding;
