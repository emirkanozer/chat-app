import axios from "axios";
const BASE_ENDPOINT = process.env.REACT_APP_BASEENDPOINT;

axios.interceptors.request.use((config) => {
  const { origin } = new URL(config.url);

  if (origin + "/api" === BASE_ENDPOINT) {
    const token = localStorage.getItem("access-token");
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchRegister = async (input) => {
  const { data } = await axios.post(`${BASE_ENDPOINT}/auth/register`, input);
  return data;
};

export const fetchLogin = async (input) => {
  const { data } = await axios.post(`${BASE_ENDPOINT}/auth/login`, input);
  return data;
};

export const fetchMe = async () => {
  const { data } = await axios.get(`${BASE_ENDPOINT}/user`);
  return data;
};
