export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
  }

  open() {
    this._selectorPopup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  close() {
    this._selectorPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._selectorPopup.querySelector('.popup__close').addEventListener('click', () => this.close());
    this._selectorPopup.querySelector('.popup__overlay').addEventListener('click', () => this.close());
  }
}
