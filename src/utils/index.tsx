import axios from 'axios';
import Image from 'next/image';
import { NextRequest, NextResponse, userAgent } from 'next/server';
import moment from 'moment';

export const renderCollapseIcon = (isActive?: boolean) => {
  return (
    <div
      className='rounded-full w-5 p-1 overflow-hidden'
      style={{ backgroundColor: 'var(--primary-color)' }}
    >
      <Image
        src={!!isActive ? '/images/icons/up.png' : '/images/icons/down.png'}
        alt='expand icon'
        width={20}
        height={20}
      />
    </div>
  );
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { device } = userAgent(request);
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';
  url.searchParams.set('viewport', viewport);
  return NextResponse.rewrite(url);
}

export const converDateToDays = ({ date }: { date: string }) => {
  // Tạo một đối tượng Date cho ngày cần chuyển đổi
  // const pastDate = new Date(date).getTime();

  // // Tạo một đối tượng Date cho ngày hôm nay
  // const currentDate = new Date().getTime();
  // let diffInMilliseconds = currentDate - pastDate;

  // // Chuyển đổi số mili giây thành số ngày
  // let diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  // console.log(date);
  // // Làm tròn số ngày xuống số nguyên gần nhất
  // let days = Math.floor(diffInDays);

  return date;
  // return moment(date).fromNow();
};

// Hàm gửi dữ liệu dạng form-data với token
export const sendPostFormDataWithToken = async (args: {
  url: string;
  data: { [key: string]: string | Blob };
  token: string;
}) => {
  // Tạo đối tượng FormData
  const { url, data, token } = args;
  const formData = new FormData();

  // Thêm các trường vào FormData
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  try {
    // Thực hiện gọi API
    const response = await axios.post(url, formData, {
      headers: {
        // Thiết lập Content-Type
        'Content-Type': 'multipart/form-data',
        // Thêm Authorization header với token
        Authorization: `Bearer ${token}`,
      },
    });

    // Xử lý kết quả trả về
    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Error during API call:', error);
    throw error;
  }
};

export const sendPostWithToken = async (args: {
  url: string;
  data?: { [key: string]: string | Blob };
  token: string;
}) => {
  const { url, data, token } = args;
  try {
    // Thực hiện gọi API
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Xử lý kết quả trả về
    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Error during API call:', error);
    throw error;
  }
};

export const getWithToken = async ({
  url,
  token,
}: {
  url: string;
  token?: string;
}) => {
  try {
    // Thực hiện gọi API
    const response = await axios.get(url, {
      headers: {
        // Thêm Authorization header với token
        Authorization: `Bearer ${token}`,
      },
    });

    // Xử lý kết quả trả về
    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Error during API call:', error);
    throw error;
  }
};

export function nonAccentVietnamese(str: string) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
  return str;
}
