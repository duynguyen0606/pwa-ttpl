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

export const apiForgotPassword = async (args: { email: string }) => {
  const form = new FormData();
  const url = 'https://thutucphapluat.com/api/Login/forget_password_by_email';
  form.append('email', args.email);
  const { data } = await axios.post(url, form);
  return data ?? {};
};

export const apiResetPassword = async (args: {
  email: string;
  newPassword: string;
  otp: string;
}) => {
  const form = new FormData();
  form.append('email', args.email);
  form.append('password', args.newPassword);
  form.append('otp', args.otp);
  const url = 'https://thutucphapluat.com/api/Login/reset_password_by_email';

  const { data } = await axios.post(url, form);
  return data ?? {};
};
