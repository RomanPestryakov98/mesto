export default class FormValidator {
  constructor(settingsObject, formElement) {
    this._settingsObject = settingsObject;
    this._formElement = formElement;
  }

  _setEventListeners() {
    this._inputList = this._getArrInputList();
    this._buttonElement = this._formElement.querySelector(this._settingsObject.submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })
  }

  _checkInputValidity(inputElement) {
    this._error = this._getErrorSelector(inputElement);
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
      this.enableSubmitButton(this._buttonElement, this._settingsObject.inactiveButtonClass)
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

  enableSubmitButton(submit, inactiveButtonClass) {
    submit.classList.remove(inactiveButtonClass);
    submit.removeAttribute('disabled');
  }

  _getArrInputList() {
    return Array.from(this._formElement.querySelectorAll(this._settingsObject.inputSelector));
  }

  _getErrorSelector(inputElement) {
    return this._formElement.querySelector(`.${inputElement.id}-error`);
  }

  resetError() {
    this._getArrInputList().forEach((inputElement) => {
      this._error = this._getErrorSelector(inputElement);
      this._hideErrorInput(inputElement);
    })
  }

  enableValidation() {
    this._setEventListeners();
  }

}
