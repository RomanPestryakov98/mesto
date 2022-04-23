import './index.css';
// Импорт классов
import Card from '../script/components/Card.js';
import Section from "../script/components/Section.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import PopupWithForm from '../script/components/PopupWithForm.js';
import FormValidator from '../script/components/FormValidator.js';

// Импорт переменных
import { containerWithCards, formProfile, popupImage, popupProfile, popupAddCard, buttonOpen, buttonAddCard, formAddCard, obj, userInfo } from "../script/utils/constants.js";
import { initialCards } from "../script/utils/initialCards.js";

// Импорт функций
import { addValuesInInputs, openCreateCardPopup } from "../script/utils/utils.js";


function handleCardClick(title, link) {
  popupWithImage.open(title, link);
}

function createCard(item) {
  return new Card({ item, handleCardClick }, '#add-card').generatedCard();
}

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

const filterList = new Section({
  items: initialCards, renderer: (item) => {
    const card = createCard(item);
    filterList.addItem(card);
  }
}, containerWithCards)
filterList.rendererItems();


export const popupEditProfile = new PopupWithForm(popupProfile, {
  handleSubmitForm: (values) => {
    userInfo.setUserInfo(values);
    popupEditProfile.close();
  }
});
popupEditProfile.setEventListeners();


export const popupCreateCard = new PopupWithForm(popupAddCard, {
  handleSubmitForm: (values) => {
    const newCard = createCard(values);
    filterList.addItem(newCard);
    popupCreateCard.close();
  }
});
popupCreateCard.setEventListeners();


const validatorFormProfile = new FormValidator(obj, formProfile);
export const validatorFormAddCard = new FormValidator(obj, formAddCard);

// Функция включения валидации для всех форм
function enableValidationForms() {
  validatorFormProfile.enableValidation();
  validatorFormAddCard.enableValidation();
}

// Обработчки клика по открытию попапа профиля
buttonOpen.addEventListener('click', addValuesInInputs);

// Обработчки клика по открытию попапа c добавлением карточки
buttonAddCard.addEventListener('click', openCreateCardPopup);

enableValidationForms(); // Включаем валидацию всех форм



