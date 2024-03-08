import axios from 'axios';
import ArticleModel from '../models/Article';
import { sendPostFormDataWithToken } from '../utils';

export const apiGetDetailPost = async ({
  url_key,
}: {
  url_key: string;
}): Promise<{
  status: boolean;
  data: Array<ArticleModel>;
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/post_detail?url_key=${url_key}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiPostComment = (args: {
  token: string;
  title: string;
  post_id: string;
}) => {
  const { token, title, post_id } = args;
  const url = `https://thutucphapluat.com/api/Posts_controller/comment`;
  const data = sendPostFormDataWithToken({
    url,
    token,
    data: { title, post_id },
  });

  return data ?? {};
};