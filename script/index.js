import Card from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup, searchPopupOpen } from "./utils.js";
import { initialCards } from "./initialCards.js";

// Объект настроек с селекторами и классами формы;
const obj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}


const allForms = Array.from(document.querySelectorAll('.popup__form')); // Находим все формы
const nameProfile = document.querySelector('.profile__name'); // Получаем имя в профиле
const textProfile = document.querySelector('.profile__text'); // Получаем текст в профиле
const containerWithCards = document.querySelector('.elements');

// Получаем общие элементы для всех попапов
const overlaysPopup = document.querySelectorAll('.popup__overlay'); // Получаем оверлеи
const crossCloses = document.querySelectorAll('.popup__close');  // Получаем крестик закрытия попапа

// Попап Профиля
const popupProfile = document.querySelector('.popup_type_profile'); // Получаем попап профиля
const submitProfile = popupProfile.querySelector('.popup__submit');
const buttonOpen = document.querySelector('.profile__edit-button'); // Редактируем профиль
const inputName = document.querySelector('.popup__input_type_name'); // Получаем инпут с именем
const inputAbout = document.querySelector('.popup__input_type_about'); // Получаем инпут с информацией о себе
const profileName = document.querySelector('.profile__name'); // Получаем селектор с именем
const profileText = document.querySelector('.profile__text'); // Получаем селектор с информацией о себе
const formProfile = document.querySelector('.popup__form'); // Получаем форму

// Попап Добавления карточки
const popupAddCard = document.querySelector('.popup_type_add-card'); // Получаем попап добавления карточки
const submitAddCard = popupAddCard.querySelector('.popup__submit');
const buttonAddCard = document.querySelector('.profile__add-button'); // Кнопка по добавлению карточки
const inputTitle = document.querySelector('.popup__input_type_title'); // Получаем инпут с заголовком
const inputLink = document.querySelector('.popup__input_type_link'); // Получаем инпут с ссылкой
const formAddCard = document.querySelector('.popup__form_type_add-card'); // Получаем форму по добавлению карточки


// Функция включения валидации для всех форм
function enableValidationForms() {
  allForms.forEach(function (form) {
    const validationForm = new FormValidator(obj, form);
    validationForm.enableValidation();
  })
}

// Функцияя по заполнению контейнера карточками при входе на страницу
function pushCardsInContainer() {
  initialCards.forEach(function (elem) {
    prependCardInContainer(elem.name, elem.link, '#add-card')
  })
}

// Функция создания карточки
function createCard(title, link, selector) {
  return new Card(title, link, selector);
}

// Функция вставки карточки в контейнер
function prependCardInContainer(title, link, selector) {
  containerWithCards.prepend(createCard(title, link, selector).generatedCard())
}

// Функцияя по заполнению полей профиля
function createValueInput() {
  new FormValidator(obj, formProfile).resetError();
  new FormValidator(obj, formProfile).enableSubmitButton(submitProfile, obj.inactiveButtonClass)
  inputName.value = nameProfile.textContent;
  inputAbout.value = textProfile.textContent;
  openPopup(popupProfile);
}

// Функцияя по открытию попапа добавления карточки
function openAddCardPopup() {
  openPopup(popupAddCard);
  new FormValidator(obj, formAddCard).disableSubmitButton(submitAddCard, obj.inactiveButtonClass)
}

// Получаем функцию по отпрвке формы
function sendForm(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileText.textContent = inputAbout.value;
  closePopup(popupProfile);
}

// Получаем функцию по отправке формы с добавлением карточки
function sendFormAddCard(event) {
  event.preventDefault();
  prependCardInContainer(inputTitle.value, inputLink.value, '#add-card')
  formAddCard.reset();
  closePopup(popupAddCard);
}


// Обработчки клика по открытию попапа профиля
buttonOpen.addEventListener('click', createValueInput);

// Обработчки клика по открытию попапа c добавлением карточки
buttonAddCard.addEventListener('click', openAddCardPopup);

// Обработчик отправки формы
formProfile.addEventListener('submit', sendForm);

// Обработчик отправки формы по добавлению карточки
formAddCard.addEventListener('submit', sendFormAddCard);

// Обработчик клика по оверлеям для закрытия любого попапа по которому был клик
overlaysPopup.forEach(function (elem) {
  const overlayPopup = elem;
  overlayPopup.addEventListener('click', () => closePopup(overlayPopup.closest('.popup')));
})

// Обработчик клика по крестику для закрытия всех попапов
crossCloses.forEach(function (elem) {
  const crossClose = elem;
  crossClose.addEventListener('click', () => closePopup(crossClose.closest('.popup')));
})


pushCardsInContainer(); //заполняем карточки контентом при входе на страницу
enableValidationForms(); // Включаем валидацию всех форм



