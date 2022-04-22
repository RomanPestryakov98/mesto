import UserInfo from "../components/UserInfo.js";

export const containerWithCards = document.querySelector('.elements'); //контейнер с карточками
export const formProfile = document.querySelector('.popup__form'); // Получаем форму
export const popupImage = document.querySelector('.popup_type_image'); // Получаем попап картинки
export const popupProfile = document.querySelector('.popup_type_profile'); // Получаем попап профиля
export const popupAddCard = document.querySelector('.popup_type_add-card'); // Получаем попап добавления карточки
export const buttonOpen = document.querySelector('.profile__edit-button'); // Редактируем профиль
export const buttonAddCard = document.querySelector('.profile__add-button'); // Кнопка по добавлению карточки
export const formAddCard = document.querySelector('.popup__form_type_add-card'); // Получаем форму по добавлению карточки
export const popupInputName = document.querySelector('.popup__input_type_name'); // Получаем инпут имени профиля
export const popupInputAbout = document.querySelector('.popup__input_type_about'); // Получаем инпут имени профиля

// Объект настроек с селекторами и классами формы;
export const obj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export const userInfo = new UserInfo({ name: '.profile__name', info: '.profile__text' });
