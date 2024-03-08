import { apiProcedureResponseComment } from '@/src/api/procedure';
import { useAppSelector } from '@/src/redux/hooks';
import { Avatar, Form, Input } from 'antd';

function CreateComment(props: {
  onSetDataChildComemnt?: (dataComment: any) => void;
  parentId?: string;
  procedureId?: string;
}) {
  const { onSetDataChildComemnt, parentId, procedureId } = props;
  const { user, token } = useAppSelector((state) => state.authState);
  const handleComment = async (values: { comment: string }) => {
    if (token && parentId && procedureId) {
      const dataRes = await apiProcedureResponseComment({
        token,
        procedural_comment_id: parentId,
        id_help_articles: procedureId,
        comment: values.comment,
        files: '',
      });

      // pass callback
      console.log(dataRes);
    }
  };
  return (
    <div id='create-comment' className='flex gap-4 mb-4'>
      {user && (
        <div className='w-8'>
          <Avatar src={user.image} alt='avatar' />
        </div>
      )}
      <div className='flex-1'>
        <Form onFinish={(values) => handleComment(values)}>
          {/* <Input placeholder='Nhập bình luận của bạn' /> */}
          <Form.Item name='comment'>
            <Input placeholder='Nhập bình luận của bạn' />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default CreateComment;
