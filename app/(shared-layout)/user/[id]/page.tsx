'use client';

import { Button, Rate } from 'antd';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '@/src/redux/hooks';
import ProfilePost from '@/src/components/user/ProfilePost';
import ProfileVideo from '@/src/components/user/ProfileVideo';
import ProfileFollow from '@/src/components/user/ProfileFollow';
import {
  apiGetOtherFollowerByType,
  apiGetOtherListPost,
  apiGetUserById,
  apiGetVideoOfOtherUser,
} from '@/src/api/user';

interface NavItem {
  name: string;
  key: number;
  dataContent: JSX.Element;
}

function Index({ params }: { params: { id: string } }) {
  const [keyActive, setKeyActive] = useState(1);
  const [userInfor, setUserInfor] = useState<any>();
  const { user, token } = useAppSelector((state) => state.authState);
  const [listPost, setListPost] = useState([]);
  const [listWatching, setListWatching] = useState<Array<any>>([]);
  const [listFollower, setListFollower] = useState<Array<any>>([]);
  const [typeFollowTab, setTypeFollowTab] = useState('');
  const [listVideo, setListVideo] = useState<Array<any>>([]);

  useEffect(() => {
    if (params.id) {
      (async () => {
        const dataFollower = await apiGetOtherFollowerByType({
          type: 'follower',
          token,
          user_id: params.id,
        });
        if (dataFollower.status) {
          setListFollower(dataFollower.data);
        }
        const dataWatching = await apiGetOtherFollowerByType({
          type: 'watching',
          token,
          user_id: params.id,
        });
        if (dataWatching.status) {
          setListWatching(dataWatching.data);
        }
        const dataPost = await apiGetOtherListPost({
          token,
          id: params.id,
          page: 1,
        });
        if (dataPost.status) {
          setListPost(dataPost.data);
        }
        const dataUser = await apiGetUserById({ id: params.id });
        if (dataUser.status) {
          setUserInfor(dataUser.data);
        }

        const dataVideos = await apiGetVideoOfOtherUser({ userId: params.id });
        if (dataVideos.status) {
          setListVideo(dataVideos.data);
        }
      })();
    }
  }, [params.id, token]);

  const mapObjNav: { [key: number]: NavItem } = useMemo(() => {
    return {
      1: {
        name: 'Bài viết',
        key: 1,
        dataContent: (
          <ProfilePost
            showPost={false}
            listPost={listPost}
            listFollower={listFollower}
            listWatching={listWatching}
            onTransferFollower={(typeTab) => {
              setKeyActive(3);
              setTypeFollowTab(typeTab);
            }}
            onSetMapFollower={(newListFollower) =>
              setListFollower(newListFollower)
            }
            onSetMapFollowing={(newListFollowing) =>
              setListWatching(newListFollowing)
            }
          />
        ),
      },
      2: {
        name: 'Video',
        key: 2,
        dataContent: <ProfileVideo listVideo={listVideo} />,
      },
      3: {
        name: 'Theo dõi',
        key: 3,
        dataContent: (
          <ProfileFollow
            listFollower={listFollower}
            listWatching={listWatching}
            activeKey={typeFollowTab}
            onSetMapFollower={(newListFollower) =>
              setListFollower(newListFollower)
            }
            onSetMapFollowing={(newListFollowing) =>
              setListWatching(newListFollowing)
            }
          />
        ),
      },
    };
  }, [listPost, listFollower, listWatching, typeFollowTab, listVideo]);

  return (
    <div>
      <div className='bg-white rounded-b-lg'>
        <div className='relative' style={{ paddingTop: '37.5%' }}>
          <ImageLegacy
            src={userInfor?.banner}
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
              src={userInfor?.image}
              layout='responsive'
              width={150}
              height={150}
            />
          </div>
          <div className='flex flex-col items-center pb-4 pt-4'>
            <div className='font-semibold text-2xl pb-4'>
              {userInfor?.full_name}
            </div>
            <div>
              {userInfor?.data_star?.count_star > 0 && (
                <Rate
                  disabled
                  defaultValue={userInfor?.data_star?.count_star}
                />
              )}
            </div>
            <div className='flex gap-2 items-center justify-center'>
              <div>
                Điểm thưởng:
                <span
                  className='font-semibold'
                  style={{ color: 'var(--primary-color)' }}
                >
                  {userInfor?.point}
                </span>
              </div>
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
                // onClick={() => setOpenModalProtect(true)}
              >
                Nhắn tin
              </Button>
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
        </div>
      </div>
      <div className='my-4'>{mapObjNav[keyActive]?.dataContent}</div>
    </div>
  );
}

export default Index;
