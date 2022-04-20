import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(title, image, selectorPopup) {
    super(selectorPopup);
    this._title = title;
    this._image = image;
  }

  open() {
    super.open();
    this._selectorPopup.querySelector('.popup__image').src = this._image;
    this._selectorPopup.querySelector('.popup__image').alt = this._title;
    this._selectorPopup.querySelector('.popup__label-text').textContent = this._title;
  }
}
