import axios from 'axios';
import { sendPostWithToken } from '../utils';
const apiUrl = process.env.URL_API;

export const apiLogin = async (args: { email: string; password: string }) => {
  const form = new FormData();
  form.append('email', args.email);
  form.append('password', args.password);
  const url = `${'https://thutucphapluat.com/api'}/login/login_check`;
  const { data } = await axios.post(url, form);
  return data ?? {};
};

export const apiLogout = (args: {
  url?: string;
  token: string;
  data?: any;
}) => {
  const {
    url = `https://thutucphapluat.com/api/login/logout`,
    token,
    data,
  } = args;
  return sendPostWithToken({
    url,
    token,
    data,
  });
};
