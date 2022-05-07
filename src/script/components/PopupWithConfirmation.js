import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(selectorPopup, { handleDeleteCard }) {
    super(selectorPopup);
    this._handleDeleteCard = handleDeleteCard;
  }

  open(card, cardId) {
    super.open()
    this._card = card;
    this._cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._selectorPopup.querySelector('.popup__submit').addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleDeleteCard(this._cardId)
        .then(() => {
          this._card.remove();
          this.close();
        })
        .catch(err => {
          console.log(err);
        })
    })
  }
}
