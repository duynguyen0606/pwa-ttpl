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
