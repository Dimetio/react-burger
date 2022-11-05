const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';

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
  return request(`${BASE_URL}`)
};