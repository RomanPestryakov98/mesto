export default class UserInfo {
  constructor({ name, info }) {
    this._name = name;
    this._info = info;
  }

  getUserInfo() {
    return {
      name: document.querySelector(this._name).textContent,
      info: document.querySelector(this._info).textContent
    }
  }

  setUserInfo({ name, info }) {
    document.querySelector(this._name).textContent = name;
    document.querySelector(this._info).textContent = info;
  }
}
