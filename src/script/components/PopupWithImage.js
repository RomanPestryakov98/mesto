import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._imageElement = this._selectorPopup.querySelector('.popup__image');
  }

  open(title, image) {
    super.open();
    this._imageElement.src = image;
    this._imageElement.alt = title;
    this._selectorPopup.querySelector('.popup__label-text').textContent = title;
  }
}
