import { useAppSelector } from '@/src/redux/hooks';
import { Button } from 'antd';
import Image from 'next/image';

const actionsArr = [
  {
    name: 'Bài viết của tôi',
    icon: '/images/icons/document.png',
    iconAlt: 'document',
  },
  {
    name: 'Video của tôi',
    icon: '/images/icons/face-time.png',
    iconAlt: 'face-time',
  },
  {
    name: 'Gói Premium',
    icon: '/images/icons/premium.png',
    iconAlt: 'premium',
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
            <div>0</div>
            <div>Bài đăng</div>
          </div>
          <div>
            <div>0</div>
            <div>Theo dõi</div>
          </div>
          <div>
            <div>0</div>
            <div>Lượt view</div>
          </div>
        </div>
        <div className='flex items-center justify-between my-4'>
          <div>Người theo dõi của tôi</div>
          <Button type='text' className='flex items-center'>
            Xem tất cả{' '}
            <Image
              src='/images/icons/right.png'
              alt='right-icon'
              width={15}
              height={15}
            />
          </Button>
        </div>
      </div>
      <div>
        {actionsArr.map((item) => (
          <div key={item.name} className='flex justify-between mb-4'>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
