import './index.css';
// Импорт классов
import Card from '../script/components/Card.js';
import Section from "../script/components/Section.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';
import FormValidator from '../script/components/FormValidator.js';

// Импорт переменных
import { containerWithCards, formProfile, popupImage, popupProfile, popupAddCard, buttonOpen, buttonAddCard, formAddCard } from "../script/utils/constants.js";
import { initialCards } from "../script/utils/initialCards.js";

// Импорт функций
import { addValuesInInputs } from "../script/utils/utils.js";


function handleCardClick(title, link) {
  const popup = new PopupWithImage(title, link, popupImage);
  popup.open();
  popup.setEventListeners();
}

const filterList = new Section({
  items: initialCards, renderer: (item) => {
    const card = new Card({ item, handleCardClick }, '#add-card');
    const res = card.generatedCard();
    filterList.addItem(res);
  }
}, containerWithCards)
filterList.rendererItems();

const popup1 = new PopupWithForm(popupProfile, {
  handleSubmitForm: (popup) => {
    popup.querySelector('.popup__form').addEventListener('submit', (event) => {
      event.preventDefault();
      const userInfo = new UserInfo({ name: '.profile__name', info: '.profile__text' });
      userInfo.setUserInfo(popup1._getInputValues());
      popup1.close();
    })
  }
});
popup1.setEventListeners();


const popup2 = new PopupWithForm(popupAddCard, {
  handleSubmitForm: (popup) => {
    popup.querySelector('.popup__form').addEventListener('submit', (event) => {
      event.preventDefault();
      const item = popup2._getInputValues();
      const newCard = new Card({ item, handleCardClick }, '#add-card').generatedCard();
      filterList.addItem(newCard)
      popup2.close();
    })
  }
});
popup2.setEventListeners();


// Объект настроек с селекторами и классами формы;
const obj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const validatorFormProfile = new FormValidator(obj, formProfile);
const validatorFormAddCard = new FormValidator(obj, formAddCard);

// Функция включения валидации для всех форм
function enableValidationForms() {
  validatorFormProfile.enableValidation();
  validatorFormAddCard.enableValidation();
}

// Обработчки клика по открытию попапа профиля
buttonOpen.addEventListener('click', () => popup1.open());
buttonOpen.addEventListener('click', addValuesInInputs);

// Обработчки клика по открытию попапа c добавлением карточки
buttonAddCard.addEventListener('click', () => popup2.open());

enableValidationForms(); // Включаем валидацию всех форм



