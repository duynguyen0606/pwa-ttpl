'use client';

import { useEffect, useMemo, useState } from 'react';
import { Input } from 'antd';
import Image from 'next/image';
import { ModalInfoRate } from '@/src/components/modal';
import PostItem from '@/src/components/mobile/post-item/PostItem';
import ArticleModel from '@/src/models/Article';
import {
  apiGetOtherFollowerByType,
  apiGetPostOfOtherUser,
  apiGetUserById,
  apiGetVideoOfOtherUser,
} from '@/src/api/user';
import { useAppSelector } from '@/src/redux/hooks';
import ProfileFollow from '@/src/components/mobile/user/ProfileFollow';

const tabs = [
  { name: 'Bài viết', tabActive: 1 },
  { name: 'Video', tabActive: 2 },
  { name: 'Theo dõi', tabActive: 3 },
];

const followTabs = [
  { name: 'Người theo dõi', childTabActive: 1 },
  { name: 'Đang theo dõi', childTabActive: 2 },
];

function Index({ params }: { params: { slug: string } }) {
  // Lấy other user id
  const { slug } = params;
  const { user, token } = useAppSelector((state) => state.authState);

  const [showInfoRate, setShowInfoRate] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [childTab, setChildTab] = useState(1);

  // data
  const [userInfor, setUserInfor] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [pagePost, setPagePost] = useState(1);
  const [pageVideo, setPageVideo] = useState(1);
  const [listPost, setListPost] = useState<Array<ArticleModel>>([]);
  const [listVideo, setListVideo] = useState<Array<any>>([]);
  const [listFollower, setListFollower] = useState<Array<any>>([]);
  const [listFollowing, setListFollowing] = useState<Array<any>>([]);

  useEffect(() => {
    (async () => {
      const dataPost = await apiGetPostOfOtherUser({
        page: pagePost,
        userID: slug,
      });
      if (dataPost.status) {
        if (listPost.length > 0) {
          setListPost((prev) => [...prev, ...dataPost.data]);
        } else {
          setListPost(dataPost.data);
        }
      }
    })();
  }, [pagePost, slug, listPost]);

  useEffect(() => {
    (async () => {
      const dataFollower = await apiGetOtherFollowerByType({
        token,
        type: 'follower',
        user_id: slug,
      });
      if (dataFollower.status) {
        setListFollower(dataFollower.data);
      }

      const dataVideo = await apiGetVideoOfOtherUser({
        page: pageVideo,
        userID: slug,
      });
      if (dataVideo.status) {
        setListVideo(dataVideo.data);
      }

      const dataUser = await apiGetUserById({ id: slug });
      if (dataUser.status) {
        setUserInfor(dataUser.data);
      }
    })();
  }, [pageVideo, slug, token]);

  useEffect(() => {
    (async () => {
      const dataFollowing = await apiGetOtherFollowerByType({
        token,
        type: 'watching',
        user_id: slug,
      });
      if (dataFollowing.status) {
        setListFollowing(dataFollowing.data);
      }
    })();
  }, [slug, token]);

  const renderContent = useMemo(() => {
    if (activeTab === 1) {
      return (
        <div>
          {/* Search container */}
          <div
            className='
                            mb-3 
                            py-3 px-2 
                            bg-white 
                            rounded-lg
                        '
          >
            <span className='text-xs text-[#444] font-bold'>
              Tìm kiếm công ty Luật/ Doanh nghiệp
            </span>

            <div className='flex justify-center pt-2'>
              <Input
                size='middle'
                placeholder='Tìm kiếm'
                prefix={
                  <Image
                    src='/images/icons/search.png'
                    alt='search-icon'
                    width={20}
                    height={20}
                  />
                }
                alt='search-icon'
                width={20}
                height={20}
              />
            </div>
          </div>

          {/* Follower container */}
          <div className='bg-white rounded-lg'>
            <div
              className='
                                flex justify-between items-center 
                                py-3 px-2 
                            '
            >
              <div>
                <div className='text-xs text-[#444] font-bold'>
                  Người theo dõi
                </div>
                <div className='text-[10px] text-[#898A8D]'>
                  {listFollower.length} người
                </div>
              </div>
              <div
                className='text-[10px] text-[#898A8D]'
                onClick={() => {
                  setActiveTab(3);
                  setChildTab(1);
                }}
              >
                Xem tất cả
              </div>
            </div>
            <ProfileFollow
              layout='vertical'
              dataList={listFollower.slice(0, 5)}
            />
          </div>

          {/* Following container */}
          <div className='bg-white rounded-lg'>
            <div
              className='
                                flex justify-between items-center 
                                py-3 px-2 mt-3
                            '
            >
              <div>
                <div className='text-xs text-[#444] font-bold'>
                  Đang theo dõi
                </div>
                <div className='text-[10px] text-[#898A8D]'>
                  {listFollowing.length} người
                </div>
              </div>
              <div
                className='text-[10px] text-[#898A8D]'
                onClick={() => {
                  setActiveTab(3);
                  setChildTab(2);
                }}
              >
                Xem tất cả
              </div>
            </div>
            <ProfileFollow
              layout='vertical'
              dataList={listFollowing.slice(0, 5)}
            />
          </div>

          {/* Post container */}
          <div className='py-2 bg-[#F4F5F8]'>
            {listPost.length > 0 ? (
              <>
                {listPost.map((post) => (
                  <PostItem key={post.id} post={post} />
                ))}

                <div className='flex items-center justify-center py-5'>
                  <button
                    className='
                                            py-2 px-3
                                            text-[var(--primary-color)] 
                                            font-bold 
                                            bg-[#FFF0E6] 
                                        '
                    onClick={() => setPagePost((prev) => prev + 1)}
                  >
                    Xem thêm
                  </button>
                </div>
              </>
            ) : (
              <h2>Chưa có bài viết để hiển thị</h2>
            )}
          </div>
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div className='flex bg-white rounded-lg'>
          {listVideo.length > 0 ? (
            <>{listVideo.map((video) => console.log(video))}</>
          ) : (
            <h2 className='p-4'> Chưa có video để hiển thị</h2>
          )}
        </div>
      );
    } else if (activeTab === 3) {
      return (
        <div className='bg-white'>
          <div
            className='
                            flex 
                            text-[10px] font-bold
                            bg-white 
                            rounded-lg
                        '
          >
            {followTabs.map((item) => (
              <nav
                key={item.childTabActive}
                className='flex justify-center items-center w-full h-8'
                onClick={() => setChildTab(item.childTabActive)}
                style={{
                  color:
                    childTab === item.childTabActive
                      ? 'var(--primary-color)'
                      : '#A1A5AC',
                  backgroundColor:
                    childTab === item.childTabActive ? '#FCF3EC' : '#FFF',
                }}
              >
                {item.name}
              </nav>
            ))}
          </div>

          {childTab === 1 && (
            <ProfileFollow layout='grid' dataList={listFollower} />
          )}

          {childTab === 2 && (
            <ProfileFollow layout='grid' dataList={listFollowing} />
          )}
        </div>
      );
    }
  }, [listPost, activeTab, childTab, listFollower, listFollowing, listVideo]);

  return (
    <div className='flex-1 px-3 flex w-full h-[100vh] flex-col bg-[#F7F7F7]'>
      {/* Top content */}
      <div className='bg-white'>
        {/* background */}
        <div className='relative text-center'>
          <Image
            className='w-full object-cover max-h-[340px]'
            src={userInfor?.banner}
            alt='anh bia'
            width={360}
            height={131}
          />

          {/* avatar */}
          <div
            className='
                            w-24 h-24 
                            flex justify-center items-center 
                            absolute 
                            right-1/2 translate-x-2/4 
                            bg-white 
                            rounded-full
                        '
            style={{ bottom: '-1.2rem' }}
          >
            <Image
              className='w-20 h-20'
              src={userInfor?.image}
              alt='avatar'
              width={80}
              height={80}
            />
          </div>
        </div>

        {/* name & rating */}
        <div className='relative text-center mt-5 py-2 border-b-[1px] border-solid'>
          <span
            className='
                            inline-flex items-center 
                            text-xl font-bold text-[#444]
                        '
          >
            {userInfor?.full_name}
          </span>
          <div className='mt-1 flex items-center justify-center text-[#4061AB]'>
            <span>Điểm thưởng:</span>
            <span className='text-sm font-bold mx-1'>{userInfor?.point}</span>
            <button className='bg-white' onClick={() => setShowInfoRate(true)}>
              <Image
                src='/images/icons/info.png'
                alt=''
                width={21}
                height={21}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Middle-header */}
      <div className='bg-white rounded-b-lg'>
        {/* nav tabs */}
        <div className='flex justify-center items-center'>
          {tabs.map((tab) => (
            <nav
              key={tab.tabActive}
              className='text-xs font-bold p-2.5'
              onClick={() => setActiveTab(tab.tabActive)}
              style={{
                color:
                  activeTab === tab.tabActive
                    ? 'var(--primary-color)'
                    : '#A1A5AC',
              }}
            >
              {tab.name}
            </nav>
          ))}
        </div>
      </div>

      <ModalInfoRate
        open={showInfoRate}
        onCancel={() => setShowInfoRate(false)}
      />

      {/* Content */}
      <div className='mt-2'>{renderContent}</div>
    </div>
  );
}

export default Index;
