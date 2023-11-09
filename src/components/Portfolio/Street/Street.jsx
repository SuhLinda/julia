import { initialCardsStreet } from '../../../utils/constants.jsx';
import Card from '../../Card/Card.jsx';

function Street() {
  return(
    <section className="street">
      <h2 className="photo__text">~~~STREET~~~</h2>
      <div className="photo__element">
        {initialCardsStreet.map((card) => {
          return <Card key={card.id} card={card}/>
        })}
      </div>
    </section>
  )
}

export default Street;
