'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Skeleton, Divider } from 'antd';

import ArticleModel from "@/src/models/Article";
import { useAppSelector } from "@/src/redux/hooks";
import { apiGetListPost } from "@/src/api/home-page";
import Header from "@/src/components/mobile/header/Header";
import Footer from "@/src/components/mobile/footer/Footer";
import PostItem from "@/src/components/mobile/post-item/PostItem";
import ModalPost from "@/src/components/modal/ModalPost";

function Index() {
  const { user } = useAppSelector((state) => state.authState);
  const [loading, setLoading] = useState(false);
  const [listPost, setListPost] = useState<Array<ArticleModel>>([]);
  const [page, setPage] = useState(1);
  const [showIconpaq, setShowIconpaq] = useState(false);

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListPost({ page: 1 });
      if (dataRes.status) {
        setListPost(dataRes.data);
      }
    })();
  }, []);

  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = async () => {
    setPage((prev) => prev + 1);
    if (loading) {
      return;
    }
    setLoading(true);
    const res = await apiGetListPost({ page: page + 1 });
    if (res.status) {
      setListPost((prev) => [...prev, ...res.data]);
      setLoading(false);
    } else {
      setLoading(false);
    }
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
                '
      >
        <div>+</div>
      </div>

      {/* btn add and q&a */}
      {showIconpaq && (
        <div id='icon-paq' className='fixed top-[17vh] right-[60px]'>
          <div
            className='
                            mb-5
                            w-10 h-10
                            rounded-full
                            flex items-center justify-center
                            bg-[--primary-color]
                        '
          >
            <img src='https://ttpl.vn/assets/images/icon/pencil.png' />
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
              <img src='https://ttpl.vn/assets/images/icon/zoom-question.png' />
            </Link>
          </div>
        </div>
      )}

      {/* list post */}
      <InfiniteScroll
        dataLength={listPost.length}
        next={loadMoreData}
        hasMore={listPost.length !== 15000}
        loader={<Skeleton style={{ width: '100%', height: 100 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget='scrollableDiv'
      >
        <div className='pt-[62px]'>
          {listPost.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </InfiniteScroll>

      <Footer />
    </div>
  );
}

export default Index;
