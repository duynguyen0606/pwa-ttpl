import { apiGetListActualImplementation } from '@/src/api/procedure';
import { useAppSelector } from '@/src/redux/hooks';
import { useEffect, useState } from 'react';

function ProcedureSlugAction({ id }: { id?: string }) {
  const { user, token } = useAppSelector((state) => state.authState);
  const [data, setData] = useState();
  useEffect(() => {
    if (user && id) {
      (async () => {
        const dataRes = await apiGetListActualImplementation(
          id.toString(),
          token
        );
        if (dataRes.status) {
          setData(dataRes.data);
        }
      })();
    }
  }, [user, id, token, data]);
  return (
    <div>
      {data ? <div>Thực tế thực hiện</div> : <div>Không có dữ liệu</div>}
    </div>
  );
}

export default ProcedureSlugAction;
