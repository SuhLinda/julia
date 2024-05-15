function Card({ card }) {


  return(
    <img
      className="card_img"
      src={card.image}
      alt="image"
    />
  )
}

export default Card;
