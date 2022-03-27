// Получаем функцию открытия попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// Функцияя закрытия попапа Esc
function closePopupEsc(evt) {
  const popupOpen = searchPopupOpen();
  if (evt.key === 'Escape' && popupOpen) {
    closePopup(popupOpen);
  }
}

// Функцияя поиска открытого попапа
function searchPopupOpen() {
  return document.querySelector('.popup_opened');
}

// Получаем функцию закрытия попапа
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

export function disableSubmitButton(submit, inactiveButtonClass) {
  submit.classList.add(inactiveButtonClass);
  submit.setAttribute('disabled', true);
}
