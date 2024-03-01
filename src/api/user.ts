import axios from 'axios';
import { getWithToken } from '../utils';
import ArticleModel from '../models/Article';

export const apiGetUserProcedureByType = ({
  type = '',
  token,
}: {
  type: '' | 'edit' | 'save' | string;
  token: string;
}) => {
  const url = `https://thutucphapluat.com/api/Help_articles_controller/list_my_procedure?type=${type}&limit=10&page=0`;
  return getWithToken({ url, token });
};

export const apiGetListMyPost = ({ token }: { token: string }) => {
  const url = `https://thutucphapluat.com/api/Posts_controller/list_by_me?page=0`;
  return getWithToken({ url, token });
};

export const apiGetMyFollowerByType = ({
  type,
  token,
}: {
  type: 'follower' | 'watching';
  token: string;
}) => {
  const url = `https://thutucphapluat.com/api/Users_controller/list_follow_me?limit=10&page=0&type=${type}`;
  return getWithToken({ url, token });
};

export const apiGetPostOfOtherUser = async ({
  page = 1,
  userID,
}: {
  page: number;
  userID: string;
}): Promise<{
  status: boolean;
  page: number;
  userID: string;
  data: Array<ArticleModel>;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/list?page=${page}&created_by=${userID}`;
  const { data } = await axios.get(url);
  console.log(data);
  return data ?? {};
};

export const apiGetVideoOfOtherUser = async ({
  page = 1,
  userID,
}: {
  page: number;
  userID: string;
}): Promise<{
  status: boolean;
  page: number;
  userID: string;
  data: Array<ArticleModel>;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/list?page=${page}&type_post=video&created_by=${userID}`;
  const { data } = await axios.get(url);
  console.log(data);
  return data ?? {};
};
