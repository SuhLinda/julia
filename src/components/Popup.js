export default class Popup {
    //соберём нужные поля в конструктор
    constructor(popup) {
        this._popup = popup;
        this._escCloseClick = this._handleEscClose.bind(this);
    }

//открытие нужного popUp
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._escCloseClick);
    }

//закрытие окна popUp
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._escCloseClick);

    }

//закрытие popUp по клику на Esc
    _handleEscClose(evt) {
        //если нажат esc
        if (evt.code === "Escape") {
            //закроем popUp
            this.close();
        }
    }

    //слушаем кнопку close
    setEventListeners() {
        this._popup
            .querySelector('.popup__button-close')
            .addEventListener('click', () => {
                this.close();
            })
        this._popup.addEventListener('click', (evt) => {
            if (evt.currentTarget === evt.target) {
                this.close();
            }
        })
    }
}