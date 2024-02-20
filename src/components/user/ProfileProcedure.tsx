import { ConfigProvider, Menu } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
const dataNavs = [
  {
    label: 'Thủ tục đã xem',
    key: 1,
  },
  {
    label: 'Thủ tục đã lưu',
    key: 2,
  },
  {
    label: 'Thủ tục đã sửa',
    key: 3,
  },
];

interface DataType {
  key: string;
  name: string;
  agent: string;
  result: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Tên',
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

function ProfileProcedure() {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'var(--primary-color)',
          },
          components: {
            Menu: {
              horizontalItemSelectedColor: 'var(--primary-color)',
            },
          },
        }}
      >
        <Menu
          style={{ justifyContent: 'center', fontSize: 18 }}
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={dataNavs.map((item) => {
            return {
              key: item.key,
              label: item.label,
            };
          })}
        />
      </ConfigProvider>
      {/* <Table
        bordered
        columns={columns}
        dataSource={listData}
        pagination={{ position: ['bottomCenter'] }}
      /> */}
    </div>
  );
}

export default ProfileProcedure;
