import axios from "axios";
import { getRandomInteger } from "utils/functions";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/local`;

export async function authHandler(credentials) {
  console.log("credentials : ", credentials);
  const { formType, email, password } = credentials;

  switch (formType) {
    case "signup":
      return axios.post(`${BASE_URL}/register`, {
        username: `${email.split("@")[0]}${getRandomInteger(0, 999)}`,
        email,
        password,
      });
    case "signin":
      return axios.post(`${BASE_URL}`, {
        identifier: email,
        password,
      });
    default:
      return null;
  }
}

// Auth.form.error.confirmed
