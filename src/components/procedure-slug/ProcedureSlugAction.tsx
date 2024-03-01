import { apiGetListActualImplementation } from '@/src/api/procedure';
import { useAppSelector } from '@/src/redux/hooks';
import { useEffect, useState } from 'react';

function ProcedureSlugAction({ id }: { id?: string }) {
  const { user, token } = useAppSelector((state) => state.authState);
  const [data, setData] = useState();
  useEffect(() => {
    console.log(user, id);
    if (user && id) {
      (async () => {
        console.log('xxx');
        const dataRes = await apiGetListActualImplementation(
          id.toString(),
          token
        );
        if (dataRes.status) {
          console.log(data);
          setData(dataRes.data);
        }
      })();
    }
  }, [user, id, token]);
  return (
    <div>
      {data ? <div>Thực tế thực hiện</div> : <div>Không có dữ liệu</div>}
    </div>
  );
}

export default ProcedureSlugAction;
