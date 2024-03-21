import { Button, ConfigProvider, Space, Table, TableProps, Tag } from 'antd';
import CustomButton from '../../common/CustomButton';
import Image from 'next/image';

interface DataType {
  key: string;
  name: string;
  //   age: number;
  //   address: string;
  //   tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: '80%',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <CustomButton type='update' />
        <CustomButton type='delete' />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
  },
  {
    key: '2',
    name: 'Jim Green',
  },
  {
    key: '3',
    name: 'Joe Black',
  },
];

function CompanyPosts() {
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: 'var(--primary-color)',
              headerColor: '#fff',
            },
          },
        }}
      >
        <Table columns={columns} dataSource={data} />
      </ConfigProvider>
    </div>
  );
}

export default CompanyPosts;
