import { Button } from 'antd';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import ProfilePost from './ProfilePost';
import ProfileVideo from './ProfileVideo';
import ProfileProcedure from './ProfileProcedure';
import ProfileFollow from './ProfileFollow';
import ProfilePremium from './ProfilePremium';
import { useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import ModalProtectAccount from '../modal/ModalProtectAccount';
import ModalUpdateInfor from '../modal/ModalUpdateInfor';
import { useAppSelector } from '@/src/redux/hooks';

interface NavItem {
  name: string;
  key: number;
  dataContent: JSX.Element;
}

const mapObjNav: { [key: number]: NavItem } = {
  1: { name: 'Bài viết', key: 1, dataContent: <ProfilePost /> },
  2: { name: 'Video', key: 2, dataContent: <ProfileVideo /> },
  3: { name: 'Thủ tục của tôi', key: 3, dataContent: <ProfileProcedure /> },
  4: { name: 'Theo dõi', key: 4, dataContent: <ProfileFollow /> },
  5: { name: 'Hỏi đáp pháp luật', key: 5, dataContent: <ProfileProcedure /> },
  6: { name: 'Gói premium', key: 6, dataContent: <ProfilePremium /> },
};

function UserProfile() {
  const [keyActive, setKeyActive] = useState(1);
  const [openModalProtect, setOpenModalProtect] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const { user } = useAppSelector((state) => state.authState);

  console.log(user);
  return (
    <div>
      <div className='bg-white rounded-b-lg'>
        <div className='relative' style={{ paddingTop: '37.5%' }}>
          <ImageLegacy
            src='https://ttpl.vn/assets/images/myprofile/anh-bia.png'
            layout='fill'
            className='absolute'
          />
        </div>
        <div className='p-6 pb-2 relative'>
          <div
            style={{ width: 150 }}
            className='absolute rounded-full overflow-hidden bottom-full right-1/2 translate-y-1/4 translate-x-1/2 border-4 border-white'
          >
            <ImageLegacy
              src={user?.image}
              layout='responsive'
              width={150}
              height={150}
            />
          </div>
          <div className='flex flex-col items-center pb-4 pt-4'>
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
              <Button
                className='button-primary'
                onClick={() => setOpenModalProtect(true)}
              >
                Bảo mật tài khoản
              </Button>
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
                  onClick={() => setOpenModalUpdate(true)}
                />
              </div>
            </div>
          </div>
          <div className='flex gap-4 justify-center border-t border-gray-200 py-2'>
            {Object.values(mapObjNav).map((item) => (
              <Button
                onClick={() => setKeyActive(item.key)}
                size='large'
                type='text'
                key={item.key}
                style={{
                  color:
                    keyActive === item.key ? 'var(--primary-color)' : '#000',
                }}
              >
                {item.name}
              </Button>
            ))}
          </div>
          <ModalProtectAccount
            open={openModalProtect}
            onCancel={() => setOpenModalProtect(false)}
          />
          <ModalUpdateInfor
            open={openModalUpdate}
            onCancel={() => setOpenModalUpdate(false)}
          />
        </div>
      </div>
      <div className='my-4'>{mapObjNav[keyActive].dataContent}</div>
    </div>
  );
}

export default UserProfile;
