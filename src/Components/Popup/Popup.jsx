import React from 'react';
import usePopupClose from '../../hooks/useClosePopup.jsx';

function Popup({card, isOpenPopup, onClose, setIsOpenPopup}) {
  usePopupClose(card, onClose);

  console.log(isOpenPopup)

  return (
    <div
      className={`popup ${isOpenPopup ? 'popup_opened' : " "}`}
      id="popup-zoom">
      <div className="popup-zoom__container">
        <button
          className="popup-zoom__close popup__button-close"
          onClick={onClose}
          id="popup-zoom__close"
          type="button"
          aria-label="закрыть">
        </button>
        <img
          className="popup-zoom__image"
          id="popup-zoom__image"
          src={card.image ? card.image : " "}
          alt={card}/>
        <h2
          className="popup-zoom__subtitle"
          id="popup-zoom__subtitle">{card.id}
        </h2>
      </div>
    </div>
  )
}

export default Popup;
