import axios from 'axios';
import ArticleModel from '../models/Article';

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
