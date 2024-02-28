import axios from 'axios';
import { getWithToken } from '../utils';
import ArticleModel from '../models/Article';

export const apiGetUserWatchedProcedure = async ({
  url = 'https://thutucphapluat.com/api/Help_articles_controller/list_my_procedure?limit=10&page=1',
  token,
}: {
  url: string;
  token: string;
}) => {
  //   const url = `https://thutucphapluat.com/api/Procedural_comment_controller/list_comment?procedure_id=${id}&limit=1000&page=1`;
  //   const data = getWithToken({ url, token });
  // const { data } = await axios.get(url, {
  //   headers: {
  //     Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjUxNjUiLCJlbWFpbCI6ImR1eW5ndXllbkBnbWFpbC5jb20iLCJ0aW1lX2xvZ2luIjoxNzA4NjU5NzkzfQ.AFgnmMVqYIJyyp7XrtN8rwF1sJEIKHVgZR4Ng1mEpUA`,
  //   },
  // });
  // console.log(data);
  // return data ?? {};
  //   return data ?? {};
  fetch(
    'https://thutucphapluat.com/api/Help_articles_controller/list_my_procedure?limit=10&page=1',
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // Thêm token vào header
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjUxNjUiLCJlbWFpbCI6ImR1eW5ndXllbkBnbWFpbC5jb20iLCJ0aW1lX2xvZ2luIjoxNzA4NjYxMzI0fQ.mlY8i3D315BvaIdAoekchdgMujvPsGVirepwhtWkPt0`,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Phản hồi mạng không ổn định');
      }
      return response.json();
    })
    .then((data) => {
      // Xử lý dữ liệu phản hồi thành công
      console.log(data);
    })
    .catch((error) => {
      // Xử lý lỗi fetch
      console.error('Lỗi fetch:', error);
      // Hiển thị một thông báo lỗi cho người dùng hoặc thử lại yêu cầu
    });
};

export const apiGetPostByUser = async ({
  page = 1,
  userID,
}: {
  page: number, 
  userID: string
}): Promise<{ status: boolean; page: number; userID: string; data: Array<ArticleModel> }> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/list?page=${page}&created_by=${userID}`;
  const { data } = await axios.get(url);
  console.log(data);
  return data ?? {};
};

export const apiGetVideoByUser = async ({
    page = 1,
    userID,
  }: {
    page: number, 
    userID: string
  }): Promise<{ status: boolean; page: number; userID: string; data: Array<ArticleModel> }> => {
    const url = `https://thutucphapluat.com/api/Posts_controller/list?page=${page}&type_post=video&created_by=${userID}`;
    const { data } = await axios.get(url);
    console.log(data);
    return data ?? {};
  };