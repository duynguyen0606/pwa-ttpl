import { apiGetUserProcedureByType } from '@/src/api/user';
import { useAppSelector } from '@/src/redux/hooks';
import { ConfigProvider, Menu } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const dataNavs = [
  {
    label: 'Thủ tục đã xem',
    key: 1,
    type: '',
  },
  {
    label: 'Thủ tục đã lưu',
    key: 2,
    type: 'save',
  },
  {
    label: 'Thủ tục đã sửa',
    key: 3,
    type: 'edit',
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
    title: 'Thủ tục',
    dataIndex: 'title',
    key: 'title',
    width: '40%',
    render: (text) => (
      <div className='max-w-60 text-sky-500'>
        <Link href='/'>{text}</Link>
      </div>
    ),
  },
  {
    title: 'Cơ quan thực hiện',
    dataIndex: 'co_quan_thuc_hien',
    key: 'co_quan_thuc_hien',
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
  const [dataProcedure, setDataProcedure] = useState<Array<any>>();
  const { token } = useAppSelector((state) => state.authState);

  const handleSelectItem = async (type: string) => {
    setDataProcedure([]);
    if (token) {
      const dataRes = await apiGetUserProcedureByType({
        type,
        token: token,
      });
      if (dataRes.status) {
        setDataProcedure(dataRes.data);
      }
    }
  };

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
          defaultSelectedKeys={['1']}
          items={dataNavs.map((item) => {
            return {
              key: item.type,
              label: item.label,
            };
          })}
          onSelect={async ({ item, key: type }) => handleSelectItem(type)}
        />
      </ConfigProvider>
      <div className='p-10 bg-white'>
        <Table
          bordered
          columns={columns}
          dataSource={dataProcedure}
          pagination={{ position: ['bottomCenter'] }}
        />
      </div>
    </div>
  );
}

export default ProfileProcedure;
