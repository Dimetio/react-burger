import { getCookie, setCookie } from "./cookie";
import {
  TUser,
  TUserResponse,
  TRefreshTokenResponse,
  TResetPasswordRequest,
  TGetOrder,
  TGetBurgers,
  TUserUpdate,
  TUserLogout,
} from "../services/types/data";

const BASE_URL = "https://norma.nomoreparties.space/api";
export const wsUrl = "wss://norma.nomoreparties.space/orders/all";
export const wsAuthUrl = "wss://norma.nomoreparties.space/orders";

function checkResponse<T>(res: Response): Promise<T> {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((data) => {
    throw new Error(data.message);
  });
}

const headers = {
  "Content-type": "application/json",
  Accept: "application/json",
};

function request<T>(url: string, options?: RequestInit): Promise<T> {
  return fetch(url, options).then((res) => checkResponse(res));
}

function refreshToken(): Promise<TRefreshTokenResponse> {
  return request<TRefreshTokenResponse>(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      ...headers,
    },
    body: JSON.stringify({
      token: getCookie("refreshToken"),
    }),
  });
}

function fetchWithRefresh<T>(url: string, options: RequestInit): Promise<T> {
  return request<T>(url, options).catch((err) => {
    if (err.message === "jwt expired") {
      return refreshToken().then((data) => {
        setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
        setCookie("refreshToken", data.refreshToken);

        if (!options.headers) {
          options.headers = new Headers();
        }
        (options.headers as Headers).append("Authorization", data.accessToken);

        return request<T>(url, options);
      });
    } else {
      console.log(err.message);
      return Promise.reject(err.message);
    }
  });
}

export const getBurgers = (): Promise<TGetBurgers> => {
  return request(`${BASE_URL}/ingredients`);
};

export const getOrder = (ingredientsId: string[]): Promise<TGetOrder> => {
  return request(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      ...headers,
      Authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({
      ingredients: ingredientsId,
    }),
  });
};

export const forgotPassword = (
  email: string
): Promise<TResetPasswordRequest> => {
  return request(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      ...headers,
    },
    body: JSON.stringify({
      email: email,
    }),
  });
};

export const resetPassword = (
  password: string,
  code: string
): Promise<TResetPasswordRequest> => {
  return request(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      ...headers,
    },
    body: JSON.stringify({
      password: password,
      token: code,
    }),
  });
};

export const signup = (data: TUser): Promise<TUserResponse> => {
  return request<TUserResponse>(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      ...headers,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
    }),
  });
};

export const signin = (
  data: Pick<TUser, "email" | "password">
): Promise<TUserResponse> => {
  return request<TUserResponse>(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      ...headers,
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
};

export const logout = (): Promise<TUserLogout> => {
  return request(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      ...headers,
    },
    body: JSON.stringify({
      token: getCookie("refreshToken"),
    }),
  });
};

export const getUser = (): Promise<TUserResponse> => {
  return fetchWithRefresh<TUserResponse>(`${BASE_URL}/auth/user`, {
    method: "GET",
    headers: {
      ...headers,
      authorization: "Bearer " + getCookie("accessToken"),
    },
  });
};

export const updateUser = (data: TUser): Promise<TUserUpdate> => {
  return fetchWithRefresh(`${BASE_URL}/auth/user`, {
    method: "PATCH",
    headers: {
      ...headers,
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
    }),
  });
};
