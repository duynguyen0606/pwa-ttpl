import { Button } from 'antd';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';

const navsArr = [
  { name: 'Bài viết', key: 1 },
  { name: 'Video', key: 2 },
  { name: 'Thủ tục', key: 3 },
  { name: 'Theo dõi', key: 4 },
  { name: 'Hỏi đáp pháp luật', key: 5 },
  { name: 'Gói premium', key: 6 },
];

function UserProfile() {
  return (
    <div className='bg-white rounded-b-lg'>
      <div className='relative' style={{ paddingTop: '37.5%' }}>
        <ImageLegacy
          src='https://ttpl.vn/assets/images/myprofile/anh-bia.png'
          layout='fill'
          className='absolute'
        />
      </div>
      <div className='p-6 pb-2 relative'>
        <div className='flex flex-col items-center pb-4'>
          <div className='font-semibold text-2xl pb-4'>duynguyen</div>
          <div className='flex gap-2 items-center justify-center'>
            <div>Điểm thưởng: 200</div>
            <Image
              src='/images/icons/info.png'
              alt='info'
              width={20}
              height={20}
            />
          </div>
          <div className='absolute right-6 top-6'>
            <Button>Bảo mật tài khoản</Button>
            <div className='flex justify-end mt-2'>
              <Button
                type='text'
                icon={
                  <Image
                    src='/images/icons/pencil.png'
                    alt='pencil'
                    width={30}
                    height={30}
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className='flex gap-4 justify-center border-t border-gray-200 py-2'>
          {navsArr.map((item) => (
            <Button size='large' type='text' key={item.key}>
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
