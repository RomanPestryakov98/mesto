const sectionElements = document.querySelector('.elements'); // Контейнер с карточками
const cardTemplate = document.querySelector('#add-card').content; // template
const likes = document.querySelectorAll('.element__like'); // Получаем кнопки лайка
const deleteCards = document.querySelectorAll('.element__delete'); // Получаем кнопки удалить карточку

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
const buttonAddCard = document.querySelector('.profile__add-button'); // Кнопка по добавлению карточки
const inputTitle = document.querySelector('.popup__input_type_title'); // Получаем инпут с заголовком
const inputLink = document.querySelector('.popup__input_type_link'); // Получаем инпут с ссылкой
const formAddCard = document.querySelector('.popup__form_type_add-card'); // Получаем форму по добавлению карточки

// Попап Открытия картинки
const popupOpenImage = document.querySelector('.popup_type_image');

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


// Получаем функцию открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Получаем функцию закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


// Функцияя по заполнению полей профиля
function createValueInput() {
  const name = document.querySelector('.profile__name');
  const text = document.querySelector('.profile__text');
  inputName.value = name.textContent;
  inputAbout.value = text.textContent;
}

// Получаем открытие картинки
function openImage() {
  const contentImage = popupOpenImage.querySelector('.popup__image');
  const titleImage = popupOpenImage.querySelector('.popup__label');
  const title = this.parentElement.parentElement.querySelector('.element__title');
  contentImage.src = this.src;
  contentImage.alt = this.alt;
  titleImage.textContent = title.textContent;
  openPopup(popupOpenImage);
}

// Получаем функцию добавления лайка
function addLike() {
  this.classList.toggle('element__like_active');
}

// Получаем функцию удаления карточки
function deleteCard() {
  const parentCard = this.parentElement.parentElement;
  parentCard.remove();
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
  renderCard(createCard(inputTitle.value, inputLink.value), sectionElements);
  formAddCard.reset();
  closePopup(popupAddCard);
}

// Функцияя по заполнению контейнера карточками при входе на страницу
function pushCardsInContainer() {
  initialCards.forEach(function (elem) {
    renderCard(createCard(elem.name, elem.link), sectionElements);
  })
}

// Функцияя по созданию карточки
function createCard(name, link) {
  const card = cardTemplate.querySelector('.element').cloneNode(true); // Берем из глобальной переменной template копию карточки
  const imageTitle = card.querySelector('.element__title'); // Создаем переменную тайтла карточки
  const imageCard = card.querySelector('.element__image'); // Создаем переменную картинки карточки
  imageTitle.textContent = name;
  imageCard.src = link;
  imageCard.alt = name;
  const buttonLike = card.querySelector('.element__like');
  const buttonDelete = card.querySelector('.element__delete');
  buttonLike.addEventListener('click', addLike);
  buttonDelete.addEventListener('click', deleteCard);
  imageCard.addEventListener('click', openImage);
  return card;
}

// Функцияя по вставке готовой карточки в контейнер
function renderCard(card, container) {
  container.prepend(card);
}

// Функции поиска открытого попапа
function searchPopupOpen() {
  return document.querySelector('.popup_opened');
}

// Функции закрытия попапа по нажатию Esc
function closePopupEsc(popup) {
  popup.classList.remove('popup_opened');
}


// Обработчки клика по открытию попапа профиля
buttonOpen.addEventListener('click', () => openPopup(popupProfile));
buttonOpen.addEventListener('click', createValueInput);

// Обработчки клика по открытию попапа c добавлением карточки
buttonAddCard.addEventListener('click', () => openPopup(popupAddCard));

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

// Обработчик клика по Esc
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' && searchPopupOpen()) {
    closePopupEsc(searchPopupOpen())
  }
})

pushCardsInContainer(); //заполняем карточки контентом при входе на страницу
