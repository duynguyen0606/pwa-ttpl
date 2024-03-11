import { apiGetListChildCommentByParentCommentId } from '@/src/api/home-page';
import CommentModel from '@/src/models/Comment';
import { converDateToDays } from '@/src/utils';
import { Avatar, Button } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CreateComment from './CreateComment';
import { Image as ImageAntd } from 'antd';
import { apiGetListChildProcedureComment } from '@/src/api/procedure';
import { useAppSelector } from '@/src/redux/hooks';
import { usePathname } from 'next/navigation';

function CommentItem({
  data,
  isChild = false,
  type = 'post',
  itemId,
}: // type'
{
  data: CommentModel;
  isChild?: boolean;
  type?: 'procedure' | 'post';
  itemId?: string;
}) {
  const pathName = usePathname();
  const [dataCommentChild, setDataCommentChild] = useState<Array<CommentModel>>(
    []
  );

  const [showReplieComment, setShowReplieComment] = useState(false);

  const { token } = useAppSelector((state) => state.authState);
  // const [handleShow]

  const handleFetchDataCommentChild = async (id: string) => {
    if (token) {
      if (type === 'post') {
        const dataRes = await apiGetListChildCommentByParentCommentId({
          postId: id,
        });
        if (dataRes.status && dataRes.data.length > 0) {
          setDataCommentChild(dataRes.data);
        }
      } else if (type === 'procedure') {
        const dataRes = await apiGetListChildProcedureComment({
          token,
          procedureId: itemId as string,
          commentId: id,
        });
        if (dataRes.status && dataRes.data.length > 0) {
          console.log(dataRes);

          setDataCommentChild(dataRes.data);
        }
      }
    }
  };

  useEffect(() => {
    if (data?.id) {
      handleFetchDataCommentChild(data.id);
    }
  }, [data?.id]);

  return (
    <div id='comment-item' className='my-4'>
      <div className='flex items-start gap-4'>
        <div className='w-8 rounded-full overflow-hidden'>
          <Avatar
            icon={
              <Image
                src={data.created_by_avartar}
                width={30}
                height={30}
                alt='avatar'
                className='rounded-full'
              />
            }
            size={30}
            style={{ backgroundColor: '#fff' }}
          />
        </div>
        <div className='flex-1'>
          <h2>{data.created_by_full_name}</h2>
          <p style={{ color: 'var(--description-color)' }}>
            {converDateToDays({ date: data.created_at })}
          </p>
          <div className='pt-2'>{data.title}</div>
          {data?.files?.length > 0 && (
            <div className='flex gap-2'>
              {data?.files.map((item: any, id: any) => (
                <ImageAntd key={id} src={item.files} />
              ))}
            </div>
          )}
          <div className='pt-2'>
            <span>{data.total_like}</span>
            <Button
              type='link'
              icon={
                <Image
                  src='/images/icons/like.png'
                  alt='like icon'
                  width={18}
                  height={18}
                />
              }
            />
            <Button
              type='link'
              icon={
                <Image
                  src='/images/icons/dislike.png'
                  alt='like icon'
                  width={18}
                  height={18}
                />
              }
            />

            {!isChild && (
              <Button
                onClick={() => {
                  setShowReplieComment((prev) => !prev);
                }}
                type='link'
              >
                Trả lời
              </Button>
            )}
          </div>
          {/* {!isChild && (
                      <Button
                          className="button-flex"
                          type="link"
                          style={{ padding: "unset" }}
                          icon={
                              <Image
                                  src="/images/icons/reply.png"
                                  alt="reply"
                                  width={20}
                                  height={20}
                              />
                          }
                          onClick={() => handleFetchDataCommentChild(data.id)}
                      >
                          Phản hồi
                      </Button>
                  )} */}
          {showReplieComment && (
            <CreateComment
              parentId={data.id}
              itemId={itemId}
              onSetDataChildComemnt={(newDataChildComment) => {
                setDataCommentChild([newDataChildComment, ...dataCommentChild]);
              }}
            />
          )}
          {showReplieComment &&
            dataCommentChild.length > 0 &&
            dataCommentChild.map((item: any) => (
              <CommentItem
                itemId={itemId}
                isChild
                key={item.id}
                data={
                  new CommentModel({
                    created_by_avartar: item.avatar,
                    created_by_full_name: item.first_name,
                    created_at: item.created_at,
                    title: item.comment,
                    files: item.files,
                    id: item.id,
                  })
                }
                type={type}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
