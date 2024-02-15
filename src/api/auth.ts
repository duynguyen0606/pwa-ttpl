import axios from 'axios';
const apiUrl = process.env.URL_API;

export const apiLogin = async (args: {
  email: string;
  password: string;
}): Promise<any> => {
  const url = `${'https://thutucphapluat.com/api'}/login/login_check`;
  const { data } = await axios.post(url, args);
  return data ?? {};
};
