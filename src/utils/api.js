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

export const getBurgers = () => {
  return fetch(`${BASE_URL}`)
    .then(checkResponse)
};