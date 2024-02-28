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
      headers: {
        // Thêm token vào header
        Authorization: `Bearer ${token}`,
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
