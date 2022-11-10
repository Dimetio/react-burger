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
      "Content-type": "application/json",
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      ingredients: ingredientsId
    })
  })
}