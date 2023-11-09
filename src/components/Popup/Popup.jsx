import photoShowroom1 from '../../images/photo/__showroom/photo__showroom2.jpg';

function Popup() {

  return(
    <div
      className="popup"
      id="popup">
      <div className="popup__container">
        <button
          className="popup__button-close"
          id="popup__button-close"
          type="button"
          aria-label="закрыть"
        >
        </button>
        <img
          className="popup__image"
          id="popup__image"
          src={photoShowroom1}
          alt=""/>
      </div>
    </div>
  )

}

export default Popup;
