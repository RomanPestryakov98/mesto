const buttonOpen = document.querySelector('.profile__edit-button'); // Редактируем профиль
const popup = document.querySelector('.popup'); // Получаем попап
const crossClose = document.querySelector('.popup__close-cross');  // Получаем крестик закрытия попапа
const buttonSave = document.querySelector('.popup__submit'); // Получаем кнопку отправки формы
const inputName = document.querySelector('.popup__input_type_name'); // Получаем инпут с именем
const inputAbout = document.querySelector('.popup__input_type_about'); // Получаем инпут с информацией о себе
const profileName = document.querySelector('.profile__name'); // Получаем селектор с именем
const profileText = document.querySelector('.profile__text'); // Получаем селектор с информацией о себе
const form = document.querySelector('.popup__form'); // Получаем форму


const buttonAddCard = document.querySelector('.profile__add-button'); // Кнопка по добавлению карточки
const popupAddCard = document.querySelector('.popup_type_add-card'); // Получаем попап по добавлению карточки
const inputTitle = document.querySelector('.popup__input_type_title'); // Получаем инпут с заголовком
const inputLink = document.querySelector('.popup__input_type_link'); // Получаем инпут с ссылкой
const closeAddCard = document.querySelector('.popup__close_type_add-card');  // Получаем крестик закрытия попапа по добавлению карточки
const formAddCard = document.querySelector('.popup__form_type_add-card'); // Получаем форму по добавлению карточки


const sectionElements = document.querySelector('.elements'); // Контейнер с карточками
const cardTemplate = document.querySelector('#add-card').content; // template

const likes = document.querySelectorAll('.element__like'); // Получаем кнопки лайка
const deleteCards = document.querySelectorAll('.element__delete'); // Получаем кнопки удалить карточку


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

pushCardsInContainer(); //заполняем карточки контентом при входе на страницу

// Функцияя по заполнению карточей контентом
function pushCardsInContainer() {
  let images = document.querySelectorAll('.element__image'); // Получаемя массив с картинками
  let title = document.querySelectorAll('.element__title'); // Получаемя массив с заголовками к картинкам

  for (let i = 0; i < images.length; i++) {
    images[i].src = initialCards[i].link;
    title[i].textContent = initialCards[i].name;
  }
}


// Обработчки клика по открытию попапа
buttonOpen.addEventListener('click', openProfilePopup);

// Обработчки клика по открытию попапа c добавлением карточки
buttonAddCard.addEventListener('click', openAddCardPopup);

// Обработчки клика по закрытию попапа
crossClose.addEventListener('click', closeProfilePopup);

// Обработчки клика по закрытию попапа по добавлению карточки
closeAddCard.addEventListener('click', closeAddCardPopup);

// Обработчки клика по закрытию попапа в любом месте экрана кроме попапа
popup.addEventListener('click', handleOverlay);

// Обработчки клика по закрытию попапа c добавлением карточки в любом месте экрана кроме попапа
popupAddCard.addEventListener('click', handleOverlayAddCard);

// Обработчик отправки формы
form.addEventListener('submit', sendForm);

// Обработчик отправки формы по добавлению карточки
formAddCard.addEventListener('submit', sendFormAddCard);

// Обработчик лайка
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener('click', addLike);
}

// Обработчик удаления карточки
for (let i = 0; i < deleteCards.length; i++) {
  let card = deleteCards[i];
  card.addEventListener('click', deleteCard);
}

// Получаем функцию добавления лайка
function addLike() {
  this.classList.toggle('element__like_disabled');
  this.classList.toggle('element__like_active');
}

// Получаем функцию удаления карточки
function deleteCard() {
  const parentCard = this.parentElement.parentElement;
  parentCard.remove();
}

// Получаем функцию по открытию попапа
function openProfilePopup() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileText.textContent;
  popup.classList.add('popup_opened');
}

// Получаем функцию по открытию попапа с добавлением карточки
function openAddCardPopup() {
  popupAddCard.classList.add('popup_opened');
}

// Получаем функцию по закрытию попапа
function closeProfilePopup() {
  popup.classList.remove('popup_opened');
}

// Получаем функцию по закрытию попапа с добавлением карточки
function closeAddCardPopup() {
  popupAddCard.classList.remove('popup_opened');
}

// Получаем функцию по закрытию попапа по клику в любой области кроме самой формы
function handleOverlay(event) {
  if (event.target === popup) {
    closeProfilePopup();
  }
}

// Получаем функцию по закрытию попапа с добавлением карточки по клику в любой области кроме самой формы
function handleOverlayAddCard(event) {
  if (event.target === popupAddCard) {
    closeAddCardPopup();
  }
}

// Получаем функцию по отпрвке формы
function sendForm(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileText.textContent = inputAbout.value;
  closeProfilePopup();
}

// Получаем функцию по отправке формы с добавлением карточки
function sendFormAddCard(event) {
  event.preventDefault();
  const card = {
    name: inputTitle.value,
    link: inputLink.value
  }
  initialCards.unshift(card);
  addCardInContainer();
  pushCardsInContainer();
  closeAddCardPopup();
}


// Получаем функцию по добавлению карточки в контейнер
function addCardInContainer() {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  sectionElements.prepend(card);

  const likes = document.querySelectorAll('.element__like'); // Получаем кнопку Лайка
  // Обработчик лайка
  for (let i = 0; i < likes.length; i++) {
    let like = likes[i];
    like.addEventListener('click', addLike);
  }

  const deleteCards = document.querySelectorAll('.element__delete'); // Получаем кнопки удалить карточку
  // Обработчик лайка
  for (let i = 0; i < deleteCards.length; i++) {
    let card = deleteCards[i];
    card.addEventListener('click', deleteCard);
  }
}
