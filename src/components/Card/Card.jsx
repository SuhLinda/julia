function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return(
    <img
      className="photo__element_img"
      src={card.image}
      alt="showroom"
      onClick={handleClick}
    />
  )
}

export default Card;
