import { useAppSelector } from '@/src/redux/hooks';
import { Avatar, Button, ConfigProvider, Menu } from 'antd';
import { useState } from 'react';

const dataNavs = [
  {
    label: 'Người theo dõi',
    key: 'follower',
  },
  {
    label: 'Đang theo dõi',
    key: 'watching',
  },
];
function ProfileFollow({
  listFollower,
  listWatching,
}: {
  listFollower: Array<any>;
  listWatching: Array<any>;
}) {
  const [typeNav, setTypeNav] = useState('follower');

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'var(--primary-color)',
          },
          components: {
            Menu: {
              horizontalItemSelectedColor: 'var(--primary-color)',
            },
          },
        }}
      >
        <Menu
          mode='horizontal'
          defaultSelectedKeys={[typeNav]}
          items={dataNavs.map((item) => {
            return {
              key: item.key,
              label: item.label,
            };
          })}
          style={{ justifyContent: 'center', fontSize: 18 }}
          onSelect={({ item, key }) => setTypeNav(key)}
        />
      </ConfigProvider>
      <div className='bg-white'>
        <div className='w-1/2 m-auto p-4'>
          {typeNav === 'follower' ? (
            <div className='grid grid-cols-2 gap-4 border '>
              {listFollower.length &&
                listFollower?.map((item) => (
                  <div className='flex items-center justify-between p-2 rounded-lg border border-gray-300'>
                    <div className='flex items-center gap-2'>
                      <Avatar src={item?.avatar_user_answer} size='large' />
                      <div>{item?.name_user_answer}</div>
                    </div>
                    {item?.is_follow ? (
                      <Button>Đang Theo dõi</Button>
                    ) : (
                      <Button>Theo dõi</Button>
                    )}
                  </div>
                ))}
            </div>
          ) : (
            <>
              {listWatching.length && listWatching?.length && (
                <div className='grid grid-cols-2 gap-4'>
                  {listWatching.map((item) => (
                    <div className='flex items-center justify-between p-2 rounded-lg border border-gray-300'>
                      <div className='flex items-center gap-2'>
                        <Avatar src={item?.avatar_user_watching} size='large' />
                        <div>{item?.name_user_watching}</div>
                      </div>
                      {item?.is_follow ? (
                        <Button>Đang Theo dõi</Button>
                      ) : (
                        <Button>Theo dõi</Button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileFollow;
