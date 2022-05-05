import UserInfo from "../components/UserInfo.js";

export const avatarUrl = document.querySelector('.profile__avatar-image');
export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__text');
export const profileAvatar = document.querySelector('.profile__avatar img');
export const containerWithCards = document.querySelector('.elements'); //контейнер с карточками
export const formProfile = document.querySelector('.popup__form'); // Получаем форму
export const popupImage = document.querySelector('.popup_type_image'); // Получаем попап картинки
export const popupProfile = document.querySelector('.popup_type_profile'); // Получаем попап профиля
export const popupDeleteCard = document.querySelector('.popup_type_delete-card'); // Получаем попап удаления карточки
export const popupAvatar = document.querySelector('.popup_type_avatar'); // Получаем попап аватара
export const popupAddCard = document.querySelector('.popup_type_add-card'); // Получаем попап добавления карточки
export const buttonOpen = document.querySelector('.profile__edit-button'); // Редактируем профиль
export const buttonAddCard = document.querySelector('.profile__add-button'); // Кнопка по добавлению карточки
export const buttonRedAvatar = document.querySelector('.profile__redaction-icon'); // Кнопка по редактированию аватара
export const formAddCard = document.querySelector('.popup__form_type_add-card'); // Получаем форму по добавлению карточки
export const formAvatar = document.querySelector('.popup__form_type_avatar'); // Получаем форму по добавлению карточки
export const popupInputName = document.querySelector('.popup__input_type_name'); // Получаем инпут имени профиля
export const popupInputAbout = document.querySelector('.popup__input_type_about'); // Получаем инпут имени профиля
export const submitProfile = popupProfile.querySelector('.popup__submit'); // Получаем кнопку профиля
export const submitAddCard = popupAddCard.querySelector('.popup__submit'); // Получаем кнопку создания карточки
export const submitRedactionAvatar = popupAvatar.querySelector('.popup__submit'); // Получаем кнопку создания карточки

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
