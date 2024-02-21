import { useAppSelector } from '@/src/redux/hooks';
import { Avatar, Button, Input } from 'antd';

function ProcedureSlugComment() {
  const { user } = useAppSelector((state) => state.authState);
  return (
    <div>
      <div className='flex gap-2 w-full'>
        <Avatar shape='circle' src={user?.image} />
        <div className='flex-1 p-4 bg-slate-200 rounded-lg'>
          <Input placeholder='Viết bình luận' />
          <div className='flex justify-between pt-2'>
            <Button size='small'>Tải file lên</Button>
            <Button size='small'>Bình luận</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcedureSlugComment;
