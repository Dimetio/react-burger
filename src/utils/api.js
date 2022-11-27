const BASE_URL = 'https://norma.nomoreparties.space/api';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return res.json()
    .then((data) => {
      throw new Error(data.message)
    });
};

const headers = {
  "Content-type": "application/json",
  "Accept": "application/json",
}

function request(url, options) {
  return fetch(url, options).then(checkResponse)
}

export const getBurgers = () => {
  return request(`${BASE_URL}/ingredients`)
};

export const getOrder = (ingredientsId) => {
  return request(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({
      ingredients: ingredientsId
    })
  })
}

export const forgotPassword = (email) => {
  return request(`${BASE_URL}/password-reset`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({
      email: email,
    })
  })
}

export const resetPassword = (password, code) => {
  return request(`${BASE_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({
      password: password,
      token: code,
    })
  })
}

export const signup = (name, email, password) => {
  return request(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    })
  })
}