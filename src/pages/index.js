import './index.css';
// Импорт классов
import Api from '../script/components/Api.js';
import PopupWithConfirmation from '../script/components/PopupWithConfirmation.js';
import Section from "../script/components/Section.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import PopupWithForm from '../script/components/PopupWithForm.js';
import FormValidator from '../script/components/FormValidator.js';

// Импорт переменных
import { submitProfile, submitAddCard, submitRedactionAvatar, avatarUrl, containerWithCards, formProfile, popupImage, popupProfile, popupAddCard, buttonOpen, buttonAddCard, formAvatar, formAddCard, obj, userInfo, popupDeleteCard, buttonRedAvatar, popupAvatar } from "../script/utils/constants.js";

// Импорт функций
import { renderLoading, createCard, addValuesInInputs, openCreateCardPopup, createArrCardsFromServer, initLoadDataProfile, handleDeleteCard, openRedactionAvatarPopup } from "../script/utils/utils.js";

// Создаем классы
export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40',
  headers: {
    authorization: '42addcd3-4dcf-4727-a945-f301b68d55fb',
    'Content-Type': 'application/json'
  }
})

export const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();


export const popupWithDeleteCard = new PopupWithConfirmation(popupDeleteCard, { handleDeleteCard });
popupWithDeleteCard.setEventListeners();


export const popupEditProfile = new PopupWithForm(popupProfile, {
  handleSubmitForm: (values) => {
    userInfo.setUserInfo(values);
    api.updateDataProfile(values)
      .finally(() => {
        renderLoading('Сохранение...', submitProfile)
      })
    popupEditProfile.close();
  }
});
popupEditProfile.setEventListeners();


export const popupCreateCard = new PopupWithForm(popupAddCard, {
  handleSubmitForm: (values) => {
    api.addNewCard(values)
      .then(res => {
        const arr = createArrCardsFromServer([res], res.owner._id)
        filterList.addItem(createCard(arr[0]));
      })
      .finally(() => {
        renderLoading('Сохранение...', submitAddCard)
      })

    popupCreateCard.close();
  }
});
popupCreateCard.setEventListeners();


export const popupRedAvatar = new PopupWithForm(popupAvatar, {
  handleSubmitForm: (values) => {
    api.updateAvatar({ link: values.link })
      .finally(() => {
        renderLoading('Сохранение...', submitRedactionAvatar)
      })
    avatarUrl.src = values.link;
    popupRedAvatar.close();
  }
})
popupRedAvatar.setEventListeners();


const filterList = new Section({
  items: [], renderer: (item) => {
    const card = createCard(item);
    filterList.addItem(card);
  }
}, containerWithCards)
filterList.rendererItems();


const validatorFormProfile = new FormValidator(obj, formProfile);
export const validatorFormAvatar = new FormValidator(obj, formAvatar);
export const validatorFormAddCard = new FormValidator(obj, formAddCard);

// Функция включения валидации для всех форм
function enableValidationForms() {
  validatorFormProfile.enableValidation();
  validatorFormAddCard.enableValidation();
  validatorFormAvatar.enableValidation();
}

// Обработчки клика по открытию попапа профиля
buttonOpen.addEventListener('click', addValuesInInputs);

// Обработчки клика по открытию попапа c добавлением карточки
buttonAddCard.addEventListener('click', openCreateCardPopup);

// Обработчки клика по открытию попапа с редактированием аватара
buttonRedAvatar.addEventListener('click', openRedactionAvatarPopup);

enableValidationForms(); // Включаем валидацию всех форм


Promise.all([api.getDataProfile(), api.getDataCards()])
  .then(args => {
    const arrWithDataProfile = args[0];
    const arrWithDataCards = createArrCardsFromServer(args[1], args[0]._id);

    initLoadDataProfile(arrWithDataProfile);
    arrWithDataCards.forEach(card => {
      filterList.addItem(createCard(card))
    })
  })


