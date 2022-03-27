import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { openPopup, closePopup, disableSubmitButton } from "./utils.js";

// Объект настроек с селекторами и классами формы;
const obj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

// Массив с карточками
const initialCards = [
  {
    name: 'Цветные скалы Чжанъе Данксиа',
    link: 'https://ie.wampi.ru/2022/02/14/01.jpg'
  },
  {
    name: 'Река Ли, Китай',
    link: 'https://ie.wampi.ru/2022/02/14/025b233a58d12675ff.jpg'
  },
  {
    name: 'Долина Йосемити, США',
    link: 'https://ie.wampi.ru/2022/02/14/03.jpg'
  },
  {
    name: 'Древний город Петра',
    link: 'https://ie.wampi.ru/2022/02/14/04.jpg'
  },
  {
    name: 'Город инков Мачу-Пикчу',
    link: 'https://ie.wampi.ru/2022/02/14/05.jpg'
  },
  {
    name: 'Деревня Гасадалур',
    link: 'https://ie.wampi.ru/2022/02/14/06.jpg'
  }
];


const allForms = Array.from(document.querySelectorAll('.popup__form')); // Находим все формы
const nameProfile = document.querySelector('.profile__name'); // Получаем имя в профиле
const textProfile = document.querySelector('.profile__text'); // Получаем текст в профиле

// Получаем общие элементы для всех попапов
const overlaysPopup = document.querySelectorAll('.popup__overlay'); // Получаем оверлеи
const crossCloses = document.querySelectorAll('.popup__close');  // Получаем крестик закрытия попапа

// Попап Профиля
const popupProfile = document.querySelector('.popup_type_profile'); // Получаем попап профиля
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
    const card = new Card(elem.name, elem.link, '#add-card');
    card.generatedCard()
  })
}

// Функцияя по заполнению полей профиля
function createValueInput() {
  inputName.value = nameProfile.textContent;
  inputAbout.value = textProfile.textContent;
  openPopup(popupProfile);
}

// Функцияя по открытию попапа добавления карточки
function openAddCardPopup() {
  disableSubmitButton(submitAddCard, obj.inactiveButtonClass)
  openPopup(popupAddCard);
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
  const card = new Card(inputTitle.value, inputLink.value, '#add-card');
  card.generatedCard();
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



