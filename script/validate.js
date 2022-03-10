const obj = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__submit',
	inactiveButtonClass: 'popup__submit_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible'
}

enableValidation(obj);


function enableValidation(obj) {
	const formList = Array.from(document.querySelectorAll(obj.formSelector));
	formList.forEach(function (formElement) {
		formElement.addEventListener('submit', function (evt) {
			evt.preventDefault();
		})
		const buttonElement = formElement.querySelector(obj.submitButtonSelector);
		setEventListeners(formElement, buttonElement);
	})
}


function setEventListeners(formElement, buttonElement) {
	const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
	toggleButtonState(inputList, buttonElement);
	inputList.forEach(function (inputElement) {
		const error = formElement.querySelector(`.${inputElement.id}-error`);
		inputElement.addEventListener('input', function () {
			checkInputValidity(inputElement, error);
			toggleButtonState(inputList, buttonElement);
		});

	})
}

function checkInputValidity(inputElement, error) {
	if (!inputElement.validity.valid) {
		showErrorInput(inputElement, error, inputElement.validationMessage);
	}
	else {
		hideErrorInput(inputElement, error);
	}
}

function showErrorInput(inputElement, error, errorMessage) {
	inputElement.classList.add(obj.inputErrorClass);
	error.textContent = errorMessage;
	error.classList.add(obj.errorClass);
}

function hideErrorInput(inputElement, error) {
	inputElement.classList.remove(obj.inputErrorClass);
	error.classList.remove(obj.errorClass);
}

function toggleButtonState(inputList, buttonElement) {
	if (hasInvalidInput(inputList)) {
		buttonElement.classList.add(obj.inactiveButtonClass);
		buttonElement.setAttribute('disabled', true);
	}
	else {
		buttonElement.classList.remove(obj.inactiveButtonClass);
		buttonElement.removeAttribute('disabled');
	}
}

function hasInvalidInput(inputList) {
	return inputList.some(function (inputElement) {
		return !inputElement.validity.valid;
	})
}


