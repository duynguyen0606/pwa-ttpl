import { apiGetListDetailProcedureLevel2 } from '@/src/api/procedure';
import DetailProcedureLevel2Model from '@/src/models/DetailProcedureLevel2';
import { Button } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { useState } from 'react';
import TableProcedureDetailLevel2 from './TableProcedureDetailLevel2';

interface DataType {
  key: string;
  data: {
    name: string;
    id: string;
  };
}

function TableProcedureDetail({
  data,
  onClickBack,
  name,
}: {
  data: Array<{
    id: string;
    name: string;
  }>;
  onClickBack: () => void;
  name: string;
}) {
  const [showDetailLevel2, setShowDetailLevel2] = useState(false);
  const [dataLevel2, setDataLevel2] = useState<{
    dataDetail: any;
    staffOrgan: any;
  } | null>(null);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên cơ quan',
      dataIndex: 'data',
      key: 'data',
      render: (item) => (
        <div
          onClick={() => {
            setShowDetailLevel2(true);
            handleFetchDetailProcedureLevel2(item.id);
          }}
          className='flex justify-between'
        >
          <div>{item.name}</div>
        </div>
      ),
    },
  ];

  const handleFetchDetailProcedureLevel2 = async (id: string) => {
    const dataRes = await apiGetListDetailProcedureLevel2('395');
    if (dataRes.status && dataRes.data) {
      setDataLevel2({
        dataDetail: dataRes.data,
        staffOrgan: dataRes.staff_organ,
      });
    }
  };

  return (
    <>
      <Button
        className='button-flex'
        type='text'
        onClick={() => {
          onClickBack();
          setDataLevel2(null);
        }}
        icon={
          <Image
            src='/images/icons/left-arrow.png'
            width={20}
            height={20}
            alt='back icon'
          />
        }
      >
        {name}
      </Button>
      {showDetailLevel2 ? (
        <TableProcedureDetailLevel2 data={dataLevel2} />
      ) : (
        <Table
          bordered
          columns={columns}
          dataSource={data.map((item) => {
            return {
              key: item.id,
              data: item,
            };
          })}
          pagination={{ position: ['bottomCenter'], pageSize: 10 }}
        />
      )}
    </>
  );
}

export default TableProcedureDetail;
