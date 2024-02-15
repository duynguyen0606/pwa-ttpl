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
  const [dataLevel2, setDataLevel2] =
    useState<DetailProcedureLevel2Model | null>(null);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên cơ quan',
      dataIndex: 'data',
      key: 'data',
      render: (item) => (
        <div
          onClick={() => handleFetchDetailProcedureLevel2(item.id)}
          className='flex justify-between'
        >
          <div>{item.name}</div>
        </div>
      ),
    },
  ];

  const handleFetchDetailProcedureLevel2 = async (id: string) => {
    const dataRes = await apiGetListDetailProcedureLevel2(id);
    if (dataRes.status && dataRes.data) {
      setDataLevel2(dataRes.data);
    }
  };

  console.log(dataLevel2);

  return (
    <>
      <Button
        className='flex items-center'
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
      {dataLevel2 ? (
        <TableProcedureDetailLevel2 />
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
