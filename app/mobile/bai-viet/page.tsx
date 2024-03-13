'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Skeleton, Divider } from 'antd';

import ArticleModel from '@/src/models/Article';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { apiGetListPost } from '@/src/api/home-page';

import Header from '@/src/components/mobile/header/Header';
import Footer from '@/src/components/mobile/footer/Footer';
import ModalPost from '@/src/components/modal/ModalPost';
import { Post } from '@/src/components/common';
import { setListPost } from '@/src/redux/feature/postSlice';

function Index() {
  const { user, token } = useAppSelector((state) => state.authState);
  console.log('xxx', token);

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  // const [listPost, setListPost] = useState<Array<ArticleModel>>([]);
  const { listPost } = useAppSelector((state) => state.postState);
  const [page, setPage] = useState(1);
  const [showIconpaq, setShowIconpaq] = useState(false);

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListPost({ page, token });
      if (dataRes.status) {
        dispatch(setListPost(dataRes.data));
      }
    })();
    return () => {
      dispatch(setListPost([]));
    };
  }, [token]);

  const loadMoreData = async () => {
    setPage((prev) => prev + 1);
    if (loading) {
      return;
    }
    setLoading(true);
    const res = await apiGetListPost({ page });
    if (res.status) {
      dispatch(setListPost([...listPost, ...res.data]));
    }
    setLoading(false);
  };

  return (
    <div className='bg-[#F4F5F8]'>
      <Header title={user ? 'Bài viết' : undefined} />

      {/* create-post-draggable */}
      <div
        onClick={() => setShowIconpaq(!showIconpaq)}
        className=' 
                    flex items-center justify-center
                    text-4xl text-white 
                    w-12 h-12 
                    rounded-full 
                    bg-[#4755D4] 
                    fixed right-0 top-[20vh]
                    z-[2]
                '
      >
        <div>+</div>
      </div>

      {/* btn add and q&a */}
      {showIconpaq && (
        <div id='icon-paq' className='fixed top-[17vh] right-[60px] z-[1]'>
          <div
            className='
                            mb-5
                            w-10 h-10
                            rounded-full
                            flex items-center justify-center
                            bg-[--primary-color]
                        '
          >
            <Image
              src='https://ttpl.vn/assets/images/icon/pencil.png'
              alt=''
              width={24}
              height={24}
            />
          </div>
          <div
            className='
                            w-10 h-10
                            rounded-full
                            flex items-center justify-center
                            bg-[--primary-color]
                        '
          >
            <Link href='/mobile/cau-hoi'>
              <Image
                src='https://ttpl.vn/assets/images/icon/zoom-question.png'
                alt=''
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      )}

      {/* list post */}
      <InfiniteScroll
        dataLength={listPost.length}
        next={loadMoreData}
        hasMore={true}
        loader={<Skeleton style={{ width: '100%', height: 100 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget='scrollableDiv'
      >
        <div className='pt-[62px]'>
          {listPost.map((post) => (
            <Post key={post?.id} post={{...post, description: ''}} />
          ))}
        </div>
      </InfiniteScroll>

      <Footer />
    </div>
  );
}

export default Index;
