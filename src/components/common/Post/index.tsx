import { Button } from 'antd';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import './style.scss';
import ArticleModel from '@/src/models/Article';
import { apiGetListCommentByPostId } from '@/src/api/home-page';
import { useState } from 'react';
import CommentCom from '../comment';
import CommentModel from '@/src/models/Comment';

function Post({ post }: { post: ArticleModel }) {
  const [dataComment, setDataComment] = useState<Array<CommentModel>>([]);
  const handleFetchComment = async (id: string) => {
    const dataRes = await apiGetListCommentByPostId({ postId: id });
    if (dataRes.status && dataRes.data.length > 0) {
      setDataComment(dataRes.data);
    }
  };

  return (
    <>
      {post && (
        <div
          id='post'
          className='p-4 flex flex-col gap-4 bg-white rounded-lg mb-4'
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div style={{ width: 40 }}>
                <Image
                  src='https://drive.google.com/uc?id=1vLPCXwk1Fo3LkXI9N2ejCz2J0abYImZB'
                  alt='avatar'
                  width={40}
                  height={40}
                  objectFit='cover'
                  className='rounded-full'
                />
              </div>
              <div>
                <h4>{post.created_by_full_name}</h4>
                <p className='text-neutral-300'>12 ngày trước</p>
              </div>
            </div>
            {!post.is_follow && <Button>Theo dõi</Button>}
          </div>
          <ImageLegacy
            src={post?.images}
            alt='body-image'
            layout='responsive'
            width={412}
            height={232}
            objectFit='cover'
          />
          <div className='pb-4 border-b-[1px] border-solid border-slate-100'>
            <h4 className='font-semibold'>{post.title}</h4>
            <p
              className='dot-4 post-desc'
              dangerouslySetInnerHTML={{ __html: post.short_description }}
            />
            <div className='flex float-right gap-2 text-neutral-300 mt-2'>
              <p>{post.view} lượt xem</p>
              <p>{post.like} lượt thích</p>
            </div>
          </div>
          <div className='post-actions flex justify-between items-center'>
            <Button
              icon={
                <Image
                  src='/images/icons/like.png'
                  alt='like icon'
                  width={18}
                  height={18}
                />
              }
            >
              Like
            </Button>
            <Button
              icon={
                <Image
                  src='/images/icons/dislike.png'
                  alt='like icon'
                  width={18}
                  height={18}
                />
              }
            >
              Dislike
            </Button>
            <Button
              icon={
                <Image
                  src='/images/icons/comment.png'
                  alt='like icon'
                  width={18}
                  height={18}
                />
              }
              onClick={() => handleFetchComment(post.id)}
            >
              Comment
            </Button>
            <Button
              icon={
                <Image
                  src='/images/icons/share.png'
                  alt='like icon'
                  width={18}
                  height={18}
                />
              }
            >
              Share
            </Button>
          </div>

          {dataComment.length > 0 && <CommentCom commentList={dataComment} />}
        </div>
      )}
    </>
  );
}

export default Post;
