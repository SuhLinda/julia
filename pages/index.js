import '../pages/index.css'

import PopupWithImage from "../components/PopupWithImage.js";

const popUpZoom = document.querySelector('.popup-zoom');//окно popUp zoom

//zoom_________________________________________________________________________
const zoomWindow = new PopupWithImage(popUpZoom);
zoomWindow.setEventListeners();