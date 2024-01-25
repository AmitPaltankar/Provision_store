import axios from 'axios';

const BASE_URL = 'https://api.kalpav.com/api/v1/product/category/retail';

const api = axios.create({
  baseURL: BASE_URL,
});

export const login = async (email, password) => {
  const loginURL = 'https://apiv2stg.promilo.com/user/oauth/token';
  const formData = new FormData();
  formData.append('username', email);
  formData.append('password', password);
  formData.append('grant_type', 'password');

  const response = await axios.post(loginURL, formData);
  return response.data.access_token;
};

export const fetchProducts = async (accessToken) => {
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await api.get('https://api.kalpav.com/api/v1/product/category/retail', { headers });
  return response.data;
};
