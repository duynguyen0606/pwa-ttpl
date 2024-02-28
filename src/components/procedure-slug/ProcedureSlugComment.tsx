import {
  apiGetListActualImplementation,
  apiGetListProcedureComment,
} from '@/src/api/procedure';
import { useAppSelector } from '@/src/redux/hooks';
import { Avatar, Button, Input } from 'antd';
import { useEffect, useState } from 'react';

function ProcedureSlugComment({ id }: { id?: string }) {
  const { user, token } = useAppSelector((state) => state.authState);
  const [data, setData] = useState();
  useEffect(() => {
    if (user && id) {
      (async () => {
        const dataRes = await apiGetListProcedureComment(id, token);
        if (dataRes.status) {
          setData(dataRes.data);
        }
      })();
    }
  }, [user, id]);

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
