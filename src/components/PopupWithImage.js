import Popup from "./Popup.js";

//создаём наследника от класса Popup
export default class PopupWithImage extends Popup {
    //конструктор который принимает popup от родителя
    constructor(popup) {
        super(popup);
        this._img = this._popup.querySelector('#popup-zoom__image');

    }

    //перезапишем метод open родителя
    open(link, name) {
        super.open()
        //присвоим данные
        this._img.src = link;
        this._img.alt = name;

    }
}