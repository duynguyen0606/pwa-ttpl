import { Button } from 'antd';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import './style.scss';
import ArticleModel from '@/src/models/Article';
import {
  apiFollowUser,
  apiGetListCommentByPostId,
  apiLikePost,
} from '@/src/api/home-page';
import { useEffect, useState } from 'react';
import CommentCom from '../comment';
import CommentModel from '@/src/models/Comment';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import CreateComment from '../comment/CreateComment';
import CommentItem from '../comment/CommentItem';
import { setListPost } from '@/src/redux/feature/postSlice';
import { setOpenModalLogin } from '@/src/redux/feature/authSlice';
import { LikeIcon } from '../icons';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

function Post({ post }: { post: ArticleModel }) {
  const [dataComment, setDataComment] = useState<Array<CommentModel>>([]);
  const { token, user } = useAppSelector((state) => state.authState);
  const { listPost } = useAppSelector((state) => state.postState);
  const dispatch = useAppDispatch();

  const [showComment, setShowComment] = useState(false);

  const handleFetchComment = async (id: string) => {
    const dataRes = await apiGetListCommentByPostId({ postId: id });
    if (dataRes.status && dataRes.data.length > 0) {
      setDataComment(dataRes.data);
    }
  };

  const handleFollow = async (id: string, type: 'follow' | 'unfollow') => {
    if (id && token) {
      const dataRes = await apiFollowUser({
        id,
        token,
        type,
      });

      if (dataRes.status) {
        dispatch(
          setListPost(
            listPost.map((item) => {
              if (item.created_by.toString() == id) {
                return {
                  ...item,
                  is_follow: +dataRes.action === 1 ? '0' : '1',
                };
              }
              return item;
            })
          )
        );
      }
    } else {
      dispatch(setOpenModalLogin(true));
    }
  };

  const handleLikePost: () => void = async () => {
    if (token && post) {
      const dataRes = await apiLikePost({
        id_post: post.id,
        token,
        status: post.like == 1 ? '0' : '1',
      });
      if (dataRes.status) {
        dispatch(
          setListPost(
            listPost.map((item) => {
              if (item.id === post.id) {
                return {
                  ...post,
                  like: post.like == 1 ? '0' : '1',
                };
              }
              return item;
            })
          )
        );
      }
    } else {
      dispatch(setOpenModalLogin(true));
    }
  };

  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });
  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

  return (
      <>
          {post && (
              <div
                  id="post"
                  className="p-4 flex flex-col gap-4 bg-white rounded-lg mb-4"
              >
                  <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                          <div style={{ width: 40 }}>
                              <Image
                                  src="https://drive.google.com/uc?id=1vLPCXwk1Fo3LkXI9N2ejCz2J0abYImZB"
                                  alt="avatar"
                                  width={40}
                                  height={40}
                                  objectFit="cover"
                                  className="rounded-full"
                              />
                          </div>
                          <div>
                              <Link
                                  href={`${
                                      isMobileClient ? "/mobile" : ""
                                  }/user/${post.created_by}`}
                                  style={{ color: "black" }}
                              >
                                  {post.created_by_full_name ||
                                      post.created_by_user}
                              </Link>
                              <p className="text-neutral-300">
                                  {post.created_at}
                              </p>
                          </div>
                      </div>

                      <Button
                          onClick={() =>
                              handleFollow(
                                  post.created_by.toString(),
                                  post.is_follow == 1 ? "unfollow" : "follow"
                              )
                          }
                          className={
                              post.is_follow == 1 ? "button-primary" : ""
                          }
                      >
                          {post.is_follow == 1 ? "Bỏ theo dõi" : "Theo dõi"}
                      </Button>
                  </div>
                  {post?.images && (
                      <ImageLegacy
                          src={post?.images}
                          alt="body-image"
                          layout="responsive"
                          width={412}
                          height={232}
                          objectFit="cover"
                      />
                  )}
                  <div className=" pb-4 border-b-[1px] border-solid border-slate-100">
                      <Link
                          href={`${isMobileClient ? "/mobile" : ""}/bai-viet/${
                              post.url_key
                          }`}
                          className="text-black hover:text-black"
                      >
                          <div
                              className={`font-bold text-base ${
                                  isMobileClient ? "my-1" : "my-2"
                              } `}
                          >
                              {post.title}
                          </div>
                          <p
                              className="dot-4 post-desc"
                              dangerouslySetInnerHTML={{
                                  __html: post.short_description,
                              }}
                          />
                      </Link>
                      <div className="flex float-right gap-2 text-neutral-300 mt-2">
                          <p>{post.view} lượt xem</p>
                          <p>{post.like} lượt thích</p>
                      </div>
                  </div>
                  <div className="post-actions flex justify-between items-center">
                      <Button
                          style={{
                              backgroundColor:
                                  post.like == 1
                                      ? "var(--secondary-color)"
                                      : "#fff",
                              color: post.like == 1 ? "#fff" : "#000",
                          }}
                          icon={
                              <LikeIcon
                                  width="20px"
                                  height="20px"
                                  bgColor={post.like == 1 ? "#fff" : "#000"}
                              />
                          }
                          onClick={handleLikePost}
                      >
                          Like
                      </Button>
                      <Button
                          icon={
                              <Image
                                  src="/images/icons/dislike.png"
                                  alt="like icon"
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
                                  src="/images/icons/comment.png"
                                  alt="like icon"
                                  width={18}
                                  height={18}
                              />
                          }
                          onClick={() => {
                              setShowComment(!showComment);
                              handleFetchComment(post.id);
                          }}
                      >
                          Comment
                      </Button>
                      <Button
                          icon={
                              <Image
                                  src="/images/icons/share.png"
                                  alt="like icon"
                                  width={18}
                                  height={18}
                              />
                          }
                      >
                          Share
                      </Button>
                  </div>

                  {showComment && (
                      <div className="py-4 w-full">
                          {user && (
                              <CreateComment
                                  itemId={post.id}
                                  onSetDataComment={(cmtParent) =>
                                      setDataComment([
                                          cmtParent,
                                          ...dataComment,
                                      ])
                                  }
                              />
                          )}
                          {dataComment.map((item) => (
                              <CommentItem
                                  itemId=""
                                  key={item.id}
                                  data={item}
                              />
                          ))}
                      </div>
                  )}
              </div>
          )}
      </>
  );
}

export default Post;
