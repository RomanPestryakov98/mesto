let buttonOpen = document.querySelector('.profile__edit-button'); // Редактируем профиль
let popup = document.querySelector('.popup'); // Получаем попап
let crossClose = document.querySelector('.popup__close-cross');  // Получаем крестик закрытия попапа
let buttonSave = document.querySelector('.popup__submit'); // Получаем кнопку отправки формы
let inputName = document.querySelector('.popup__input_name'); // Получаем инпут с именем
let inputAbout = document.querySelector('.popup__input_about'); // Получаем инпут с информацией о себе
let profileName = document.querySelector('.profile__name'); // Получаем селектор с именем
let profileText = document.querySelector('.profile__text'); // Получаем селектор с информацией о себе

// Получаем функциюю клика по открытию попапа
buttonOpen.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('popup_opened');
})

// Получаем функциюю клика по закрытию попапа
crossClose.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('popup_opened');
})

// Получаем функциюю клика по закрытию попапа в любом месте экрана кроме попапа
popup.addEventListener('click', function (event) {
  if (event.target === popup) {
    popup.classList.remove('popup_opened');
  }
})

// Получаем функциюю клика отпрвке формы
buttonSave.addEventListener('click', function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileText.textContent = inputAbout.value;
  inputName.value = '';
  inputAbout.value = '';
  popup.classList.remove('popup_opened');
})
