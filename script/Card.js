const popupOpenImage = document.querySelector('.popup_type_image');
const srcPopupImage = popupOpenImage.querySelector('.popup__image');
const textPopupImage = popupOpenImage.querySelector('.popup__label-text');

// Получаем функцию открытия попапа
function openPopup(popup) {
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

export default class Card {
  constructor(title, image, selectorTemplate) {
    this._title = title;
    this._image = image;
    this._selectorTemplate = selectorTemplate;
  }

  _getTemplate() {
    this._test = 'test';
    const card = document
      .querySelector(this._selectorTemplate)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return card;
  }

  // Обработчкики событий
  _setEventListeners() {
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCard();
    });

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._toggleLike();
    });

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openCard();
    });

  };

  // Удаление карточки
  _deleteCard() {
    this._element.closest('.element').remove();
  }

  // Лайк
  _toggleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  // Открытие попапа
  _openCard() {
    srcPopupImage.src = this._image;
    srcPopupImage.alt = this._title;
    textPopupImage.textContent = this._title;
    openPopup(popupOpenImage);
  }

  generatedCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._title;
    this._element.querySelector('.element__image').src = this._image;
    document.querySelector('.elements').append(this._element);
  }
}
