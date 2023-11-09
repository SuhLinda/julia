import { initialCardsShowroom } from '../../../utils/constants.jsx';
import Card from '../../Card/Card.jsx';

function Showroom() {
  return(
    <section className="showroom">
      <h2 className="photo__text">~~~SHOWROOM~~~</h2>
      <div className="photo__element">
        {initialCardsShowroom.map((card) => {
          return <Card key={card.id} card={card}/>
        })}
      </div>
    </section>
  )
}

export default Showroom;
