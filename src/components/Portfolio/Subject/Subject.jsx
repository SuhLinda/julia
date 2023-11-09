import { initialCardsSubject } from "../../../utils/constants";
import Card from "../../Card/Card";


function Subject() {
  return(
    <section className="subject">
      <h2 className="photo__text">~~~SUBJECT SHOOTING~~~</h2>
      <div className="photo__element">
        {initialCardsSubject.map((card) => {
          return <Card key={card.id} card={card}/>
        })}
      </div>
    </section>
  )
}

export default Subject;
