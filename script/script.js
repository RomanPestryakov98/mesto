const buttonOpen = document.querySelector('.profile__edit-button'); // Редактируем профиль
const popup = document.querySelector('.popup'); // Получаем попап
const crossClose = document.querySelector('.popup__close-cross');  // Получаем крестик закрытия попапа
const buttonSave = document.querySelector('.popup__submit'); // Получаем кнопку отправки формы
const inputName = document.querySelector('.popup__input_type_name'); // Получаем инпут с именем
const inputAbout = document.querySelector('.popup__input_type_about'); // Получаем инпут с информацией о себе
const profileName = document.querySelector('.profile__name'); // Получаем селектор с именем
const profileText = document.querySelector('.profile__text'); // Получаем селектор с информацией о себе
const form = document.querySelector('.popup__form'); // Получаем форму

const images = document.querySelectorAll('.element__image'); // Получаемя массив с картинками
const title = document.querySelectorAll('.element__title'); // Получаемя массив с заголовками к картинкам

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

for (let i = 0; i < images.length; i++) {
  images[i].src = initialCards[i].link;
  title[i].textContent = initialCards[i].name;
}

// Обработчки клика по открытию попапа
buttonOpen.addEventListener('click', openProfilePopup);

// Обработчки клика по закрытию попапа
crossClose.addEventListener('click', closeProfilePopup);

// Обработчки клика по закрытию попапа в любом месте экрана кроме попапа
popup.addEventListener('click', handleOverlay);

// Обработчик отправки формы
form.addEventListener('submit', sendForm);

// Получаем функцию по открытию попапа
function openProfilePopup() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileText.textContent;
  popup.classList.add('popup_opened');
}

// Получаем функцию по закрытию попапа
function closeProfilePopup() {
  popup.classList.remove('popup_opened');
}

// Получаем функцию по закрытию попапа по клику в любой области кроме самой формы
function handleOverlay(event) {
  if (event.target === popup) {
    closeProfilePopup();
  }
}

// Получаем функцию по отпрвке формы
function sendForm(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileText.textContent = inputAbout.value;
  closeProfilePopup();
}
