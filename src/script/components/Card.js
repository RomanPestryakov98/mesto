export default class Card {
  constructor({ item, handleCardClick }, selectorTemplate) {
    this._title = item.name;
    this._image = item.link;
    this._handleCardClick = handleCardClick;
    this._selectorTemplate = selectorTemplate;
  }

  _getTemplate() {
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

    this._imageElement.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    });

  };

  // Удаление карточки
  _deleteCard() {
    this._element.remove();
  }

  // Лайк
  _toggleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  generatedCard() {
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.element__image');
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._title;
    this._imageElement.alt = this._title;
    this._imageElement.src = this._image;
    return this._element;
  }
}
