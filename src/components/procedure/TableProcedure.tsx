import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';

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
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Kết quả thực hiện',
    dataIndex: 'result',
    key: 'result',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Thủ tục chứng nhận lãnh sự, hợp pháp hóa lãnh sự giấy tờ, tài liệu tại các cơ quan ở trong nước',
    agent: 'Cục lãnh sự - Bộ ngoại giao',
    result: 'Chứng nhận hợp pháp hoá lãnh sự',
  },
  {
    key: '2',
    name: 'Thủ tục chứng nhận lãnh sự, hợp pháp hóa lãnh sự giấy tờ, tài liệu tại các cơ quan ở trong nước',
    agent: 'Cục lãnh sự - Bộ ngoại giao',
    result: 'Chứng nhận hợp pháp hoá lãnh sự',
  },
  {
    key: '3',
    name: 'Thủ tục chứng nhận lãnh sự, hợp pháp hóa lãnh sự giấy tờ, tài liệu tại các cơ quan ở trong nước',
    agent: 'Cục lãnh sự - Bộ ngoại giao',
    result: 'Chứng nhận hợp pháp hoá lãnh sự',
  },
  {
    key: '4',
    name: 'Thủ tục chứng nhận lãnh sự, hợp pháp hóa lãnh sự giấy tờ, tài liệu tại các cơ quan ở trong nước',
    agent: 'Cục lãnh sự - Bộ ngoại giao',
    result: 'Chứng nhận hợp pháp hoá lãnh sự',
  },
  {
    key: '5',
    name: 'Thủ tục chứng nhận lãnh sự, hợp pháp hóa lãnh sự giấy tờ, tài liệu tại các cơ quan ở trong nước',
    agent: 'Cục lãnh sự - Bộ ngoại giao',
    result: 'Chứng nhận hợp pháp hoá lãnh sự',
  },
  {
    key: '6',
    name: 'Thủ tục chứng nhận lãnh sự, hợp pháp hóa lãnh sự giấy tờ, tài liệu tại các cơ quan ở trong nước',
    agent: 'Cục lãnh sự - Bộ ngoại giao',
    result: 'Chứng nhận hợp pháp hoá lãnh sự',
  },
  {
    key: '7',
    name: 'Thủ tục chứng nhận lãnh sự, hợp pháp hóa lãnh sự giấy tờ, tài liệu tại các cơ quan ở trong nước',
    agent: 'Cục lãnh sự - Bộ ngoại giao',
    result: 'Chứng nhận hợp pháp hoá lãnh sự',
  },
];

function TableProcedure() {
  return (
    <div id='table-procedure'>
      <Table
        bordered
        columns={columns}
        dataSource={data}
        pagination={{ position: ['bottomCenter'] }}
      />
    </div>
  );
}

export default TableProcedure;
