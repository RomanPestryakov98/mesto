export default class Card {
  constructor({ item, handleCardClick, openPopupDeleteCard, serverAddLike, serverRemoveLike }, selectorTemplate) {
    this._title = item.name;
    this._image = item.link;
    this._likes = item.likes;
    this._cardId = item.cardId;
    this._isYourLike = item.isYourLike;
    this._isCreator = item.isCreator;
    this._handleCardClick = handleCardClick;
    this._selectorTemplate = selectorTemplate;
    this._openPopupDeleteCard = openPopupDeleteCard;
    this._serverAddLike = serverAddLike;
    this._serverRemoveLike = serverRemoveLike;
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
    this._likeElement = this._element.querySelector('.element__like');
    this._deleteElement = this._element.querySelector('.element__delete');
    this._quanitylikesElement = this._element.querySelector('.element__quanity-like');

    this._deleteElement.addEventListener('click', () => {
      this._openPopupDeleteCard(this._element, this._cardId)
    });

    this._likeElement.addEventListener('click', () => {
      this._toggleLike();
    });

    this._imageElement.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    });

  };

  _checkToggleLike() {
    if (this._isYourLike) {
      this._likeElement.classList.add('element__like_active');
    }
  }

  // Лайк
  _toggleLike() {
    if (this._likeElement.classList.contains('element__like_active')) {
      this._serverRemoveLike(this._cardId)
        .then((res) => {
          this._quanitylikesElement.textContent = res.likes.length;
          this._likeElement.classList.remove('element__like_active');
        })
        .catch(err => {
          console.log(err);
        })
    }
    else {
      this._serverAddLike(this._cardId)
        .then((res) => {
          this._quanitylikesElement.textContent = res.likes.length;
          this._likeElement.classList.add('element__like_active');
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  _isMyCard() {
    if (!this._isCreator) {
      this._deleteElement.remove();
    }
  }

  generatedCard() {
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.element__image');
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._title;
    this._quanitylikesElement.textContent = this._likes;
    this._imageElement.alt = this._title;
    this._imageElement.src = this._image;
    this._isMyCard();
    this._checkToggleLike();
    return this._element;
  }
}
