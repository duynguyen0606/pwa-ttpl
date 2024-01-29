import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import ProcedureModel from '@/src/models/Procedure';

interface DataType {
  key: string;
  name: string;
  agent: string;
  result: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '40%',
    render: (text) => (
      <div className='max-w-60 text-sky-500'>
        <Link href='/'>{text}</Link>
      </div>
    ),
  },
  {
    title: 'Cơ quan thực hiện',
    dataIndex: 'agent',
    key: 'agent',
    width: '30%',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Kết quả thực hiện',
    dataIndex: 'result',
    key: 'result',
    width: '30%',
  },
];

function TableProcedure(props: { data: Array<ProcedureModel> }) {
  const { data: listProcedure } = props;
  const listData: DataType[] = listProcedure.map((item) => {
    return {
      key: item.id,
      name: item.title,
      agent: item.co_quan_thuc_hien,
      result: item.result,
    };
  });

  return (
    <div id='table-procedure'>
      <Table
        bordered
        columns={columns}
        dataSource={listData}
        pagination={{ position: ['bottomCenter'] }}
      />
    </div>
  );
}

export default TableProcedure;
