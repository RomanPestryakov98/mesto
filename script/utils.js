// Получаем функцию открытия попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// Функцияя закрытия попапа Esc
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpen = searchPopupOpen();
    closePopup(popupOpen);
  }
}

// Функцияя поиска открытого попапа
export function searchPopupOpen() {
  return document.querySelector('.popup_opened');
}

// Получаем функцию закрытия попапа
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}
