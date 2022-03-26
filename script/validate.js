/*const obj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}


function enableValidation(obj) {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach(function (formElement) {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    })
    setEventListeners(formElement, obj.submitButtonSelector, obj.inputSelector, obj.inactiveButtonClass, obj.inputErrorClass, obj.errorClass);
  })
}


function setEventListeners(formElement, button, input, inactiveButton, inputError, errorClass) {
  const buttonElement = formElement.querySelector(button);
  const inputList = Array.from(formElement.querySelectorAll(input));
  inputList.forEach(function (inputElement) {
    const error = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement, error, inputError, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButton);
    });
  })
}


function checkInputValidity(inputElement, error, inputError, errorClass) {
  if (!inputElement.validity.valid) {
    showErrorInput(inputElement, error, inputElement.validationMessage, inputError, errorClass);
  }
  else {
    hideErrorInput(inputElement, error, inputError, errorClass);
  }
}


function showErrorInput(inputElement, error, errorMessage, inputError, errorClass) {
  inputElement.classList.add(inputError);
  error.textContent = errorMessage;
  error.classList.add(errorClass);
}


function hideErrorInput(inputElement, error, inputError, errorClass) {
  inputElement.classList.remove(inputError);
  error.classList.remove(errorClass);
}


function toggleButtonState(inputList, buttonElement, inactiveButton) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, inactiveButton)
  }
  else {
    enableSubmitButton(buttonElement, inactiveButton)
  }
}


function hasInvalidInput(inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  })
}


function disableSubmitButton(buttonElement, inactiveButton) {
  buttonElement.classList.add(inactiveButton);
  buttonElement.setAttribute('disabled', true);
}


function enableSubmitButton(buttonElement, inactiveButton) {
  buttonElement.classList.remove(inactiveButton);
  buttonElement.removeAttribute('disabled');
}


enableValidation(obj);
*/
