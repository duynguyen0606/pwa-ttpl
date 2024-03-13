import { useAppSelector } from '@/src/redux/hooks';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const actionsArr = [
  {
    name: 'Bài viết của tôi',
    icon: '/images/icons/document.png',
    iconAlt: 'document',
    link: '/user',
  },
  {
    name: 'Video của tôi',
    icon: '/images/icons/face-time.png',
    iconAlt: 'face-time',
    link: '/user',
  },
  {
    name: 'Gói Premium',
    icon: '/images/icons/premium.png',
    iconAlt: 'premium',
    link: ''
  },
];

function UserProfile() {
  const { user } = useAppSelector((state) => state.authState);
  return (
    <div className='bg-white mb-4 rounded-lg p-4'>
      <div className='text-center'>
        <div className='text-center'>
          <Image
            className='rounded-full mx-auto'
            src={user?.image}
            alt='avatar'
            width={80}
            height={80}
          />
        </div>
        <div className='font-semibold'>{user?.full_name}</div>
        <div>{user?.email}</div>
        <div className='flex items-center justify-between my-4'>
          <div>
            <div className='font-bold'>0</div>
            <div>Bài đăng</div>
          </div>
          <div>
            <div className='font-bold'>0</div>
            <div>Theo dõi</div>
          </div>
          <div>
            <div className='font-bold'>0</div>
            <div>Lượt view</div>
          </div>
        </div>
        <div className='flex items-center justify-between my-4 py-2'>
          <div className='font-semibold'>Người theo dõi của tôi</div>
          <Link href='/user' className='button-flex text-black hover:text-black'>
            <span>Xem tất cả </span>
            <Image
              src='/images/icons/right.png'
              alt='right-icon'
              width={15}
              height={15}
            />
          </Link>
        </div>
      </div>
      <div>
        {actionsArr.map((item) => (
          <Link key={item.name} className='text-black hover:text-black flex justify-between mb-4' href={item.link} >
            <div className='flex gap-1'>
              <div className='w-5'>
                <Image
                  src={item.icon}
                  alt={item.iconAlt}
                  width={20}
                  height={20}
                />
              </div>
              <div>{item.name}</div>
            </div>
            <Button
              type='text'
              icon={
                <Image
                  src='/images/icons/right-arrow.png'
                  width={20}
                  height={10}
                  alt='right-arrow-icon'
                />
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
