import { useAppSelector } from '@/src/redux/hooks';
import { Avatar, Input } from 'antd';

function CreateComment() {
  const { user } = useAppSelector((state) => state.authState);
  return (
    <div id='create-comment' className='flex gap-4 mb-4'>
      {user && (
        <div className='w-8'>
          <Avatar src={user.image} alt='avatar' />
        </div>
      )}

      <div className='flex-1'>
        <Input placeholder='Nhập bình luận của bạn' />
      </div>
    </div>
  );
}

export default CreateComment;
