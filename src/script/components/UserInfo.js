export default class UserInfo {
  constructor({ name, info, avatar }) {
    this._name = document.querySelector(name);
    this._info = document.querySelector(info);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      info: this._info.textContent,
      avatar: this._avatar
    }
  }

  setAvatar(src) {
    this._avatar.src = src;
  }

  setUserInfo({ name, info }) {
    this._name.textContent = name;
    this._info.textContent = info;
  }
}
