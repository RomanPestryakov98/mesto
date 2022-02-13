const buttonOpen = document.querySelector('.profile__edit-button'); // Редактируем профиль
const popup = document.querySelector('.popup'); // Получаем попап
const crossClose = document.querySelector('.popup__close-cross');  // Получаем крестик закрытия попапа
const buttonSave = document.querySelector('.popup__submit'); // Получаем кнопку отправки формы
const inputName = document.querySelector('.popup__input_type_name'); // Получаем инпут с именем
const inputAbout = document.querySelector('.popup__input_type_about'); // Получаем инпут с информацией о себе
const profileName = document.querySelector('.profile__name'); // Получаем селектор с именем
const profileText = document.querySelector('.profile__text'); // Получаем селектор с информацией о себе
const form = document.querySelector('.popup__form'); // Получаем селектор с информацией о себе

// Обработчки клика по открытию попапа
buttonOpen.addEventListener('click', openProfilePopup);

// Обработчки клика по закрытию попапа
crossClose.addEventListener('click', closeProfilePopup);

// Обработчки клика по закрытию попапа в любом месте экрана кроме попапа
popup.addEventListener('click', closeProfilePopup);

// Получаем функцию по открытию попапа
function openProfilePopup(event) {
  event.preventDefault();
  inputName.value = profileName.textContent;
  inputAbout.value = profileText.textContent;
  popup.classList.add('popup_opened');
}

// Получаем функцию по закрытию попапа
function closeProfilePopup(event) {
  event.preventDefault();
  if (event.target === popup) {
    popup.classList.remove('popup_opened');
  }
  if (event.target === crossClose) {
    popup.classList.remove('popup_opened');
  }

}
// Обработчик отправки формы
form.addEventListener('submit', sendForm);


// Получаем функцию по отпрвке формы
function sendForm(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileText.textContent = inputAbout.value;
}
