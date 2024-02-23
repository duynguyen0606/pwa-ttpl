import axios from 'axios';
import { getWithToken } from '../utils';

export const apiGetUserWatchedProcedure = async ({
  url = 'https://thutucphapluat.com/api/Help_articles_controller/list_my_procedure?limit=10&page=1',
  token,
}: {
  url: string;
  token: string;
}) => {
  //   const url = `https://thutucphapluat.com/api/Procedural_comment_controller/list_comment?procedure_id=${id}&limit=1000&page=1`;
  //   const data = getWithToken({ url, token });
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data ?? {};
  //   return data ?? {};
};
