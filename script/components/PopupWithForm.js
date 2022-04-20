import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, { handleSubmitForm }) {
    super(selectorPopup);
    this._handleSubmitForm = handleSubmitForm
  }

  _getInputValues() {
    this._inputList = this._selectorPopup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }

  close() {
    super.close();
    this._selectorPopup.querySelector('.popup__form').reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._handleSubmitForm(this._selectorPopup);
  }
}
