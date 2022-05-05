export default class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  getDataProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(data => {
        return data
      })
      .catch(err => {
        console.log(err);
      })
  }

  getDataCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      })
  }

  updateDataProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.info
      })
    })
      .then((res) => {
        if (res.ok) {
          return
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        console.log(err);
      })
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        console.log(err);
      })

  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        console.log(err);
      })
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => res.likes.length)
      .catch(err => {
        console.log(err);
      })
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(res => res.likes.length)
      .catch(err => {
        console.log(err);
      })
  }

  updateAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    })
      .then((res) => {
        if (res.ok) {
          return
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        console.log(err);
      })
  }

}
