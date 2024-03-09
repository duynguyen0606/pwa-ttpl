import axios from 'axios';
import Category from '../models/Category';
import ArticleModel from '../models/Article';
import CommentModel from '../models/Comment';
import {
  getWithToken,
  sendPostFormDataWithToken,
  sendPostWithToken,
} from '../utils';

export const apiGetListCategory = async (args: {
  page: number;
}): Promise<{
  status: boolean;
  page: string;
  count_record: number;
  msg: string;
  data: Array<Category>;
}> => {
  const { page = 1 } = args;
  const url = `https://thutucphapluat.com/api/Category_controller/read?page=${page}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListMostViewArticle = async (): Promise<{
  status: boolean;
  data: Array<ArticleModel>;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/most_view`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListPost = async ({
  page = 1,
}: {
  page: number;
}): Promise<{ status: boolean; page: number; data: Array<ArticleModel> }> => {
  const url = `https://thutucphapluat.com/api/posts_controller/list?page=${page}`;
  const { data } = await axios.get(url);
  console.log(data);
  return data ?? {};
};

export const apiLikePost = async ({
  id_post,
  token,
  status,
}: {
  id_post: string;
  token: string;
  status: string; // 0 bỏ like, 1 là like, 2 là dislike
}): Promise<{ status: boolean; msg: string; action: string }> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/like`;
  return sendPostFormDataWithToken({
    url,
    token,
    data: { id_post, status },
  });
};

export const apiGetListCommentByPostId = async ({
  postId,
}: {
  postId: string;
}): Promise<{
  status: boolean;
  page: number;
  count_record: number;
  data: Array<CommentModel>;
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/list_comment?page=1&id_post=${postId}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListChildCommentByParentCommentId = async ({
  postId,
}: {
  postId: string;
}): Promise<{
  status: boolean;
  page: number;
  count_record: number;
  data: Array<CommentModel>;
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/list_child_comment?page=1&id_comment=${postId}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiFollowUser = (args: { id: string; token: string }) => {
  const url = `https://thutucphapluat.com/api/Posts_controller/follow`;
  return sendPostFormDataWithToken({
    token: args.token,
    url,
    data: { id_customer: args.id },
  });
};

export const apiGetListNotification = (args: { token: string }) => {
  const url = `https://thutucphapluat.com/api/Notifications_controller/list_notification?limit=10&page=0`;
  return getWithToken({
    url,
    token: args.token,
  });
};
