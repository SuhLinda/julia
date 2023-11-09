import { initialCardsStudio } from '../../../utils/constants.jsx';
import Card from '../../Card/Card.jsx';


function Studio() {
  return(
    <section className="studio">
      <h2 className="photo__text">~~~STUDIO SHOOTING~~~</h2>
      <div className="photo__element">
        {initialCardsStudio.map((card) => {
          return <Card key={card.id} card={card}/>
        })}
      </div>
    </section>
  )

}

export default Studio;
