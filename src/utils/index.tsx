import axios from 'axios';
import Image from 'next/image';
import { NextRequest, NextResponse, userAgent } from 'next/server';

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
  const pastDate = new Date(date).getTime();

  // Tạo một đối tượng Date cho ngày hôm nay
  const currentDate = new Date().getTime();
  let diffInMilliseconds = currentDate - pastDate;

  // Chuyển đổi số mili giây thành số ngày
  let diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  // Làm tròn số ngày xuống số nguyên gần nhất
  let days = Math.floor(diffInDays);

  return days;
};

// Hàm gửi dữ liệu dạng form-data với token
export const sendPostFormDataWithToken = async (
  url: string,
  data: { [key: string]: string | Blob },
  token: string
) => {
  // Tạo đối tượng FormData
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
        Authorization: `${token}`,
      },
    });

    // Xử lý kết quả trả về
    return response;
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
    console.log(args);
    const response = await axios.post(url, data, {
      headers: {
        // Thiết lập Content-Type
        'Content-Type': 'application/json',
        // Thêm Authorization header với token
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('response', response);

    // Xử lý kết quả trả về
    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Error during API call:', error);
    throw error;
  }
};
