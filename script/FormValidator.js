export class FormValidator {
  constructor(settingsObject, formElement) {
    this._settingsObject = settingsObject;
    this._formElement = formElement;
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settingsObject.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._settingsObject.submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })
  }

  _checkInputValidity(inputElement) {
    this._error = this._formElement.querySelector(`.${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      this._showErrorInput(inputElement);
    }
    else {
      this._hideErrorInput(inputElement);
    }
  }

  _showErrorInput(inputElement) {
    inputElement.classList.add(this._settingsObject.inputErrorClass);
    this._error.textContent = inputElement.validationMessage;
    this._error.classList.add(this._settingsObject.errorClass);
  }

  _hideErrorInput(inputElement) {
    inputElement.classList.remove(this._settingsObject.inputErrorClass);
    this._error.classList.remove(this._settingsObject.errorClass);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton(this._buttonElement, this._settingsObject.inactiveButtonClass)
    }
    else {
      this._enableSubmitButton()
    }
  }

  _hasInvalidInput() {
    return this._inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    })
  }

  disableSubmitButton(submit, inactiveButtonClass) {
    submit.classList.add(inactiveButtonClass);
    submit.setAttribute('disabled', true);
  }

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._settingsObject.inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }

  enableValidation() {
    this._setEventListeners();
  }

}
