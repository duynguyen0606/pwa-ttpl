import { Button, ConfigProvider, Table, TableProps } from 'antd';
import Image from 'next/image';
interface DataType {
  key: string;
  name: string;
  position: string;
  phoneNumber: string;
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
  },
  {
    title: 'Vị trí',
    key: 'position',
    dataIndex: 'position',
  },
  {
    title: 'Số điện thoại',
    key: 'phoneNumber',
    dataIndex: 'phoneNumber',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    position: 'Giám đốc',
    phoneNumber: '0987654321',
  },
  {
    key: '2',
    name: 'Jim Green',
    position: 'Giám đốc',
    phoneNumber: '0987654321',
  },
  {
    key: '3',
    name: 'Joe Black',
    position: 'Giám đốc',
    phoneNumber: '0987654321',
  },
];

function FinancePrice() {
  return (
    <>
      <Button
        icon={
          <Image
            src='/images/dashboard/plus.png'
            alt='plus'
            width={15}
            height={15}
          />
        }
        className='button-primary button-flex'
      >
        Thêm báo giá
      </Button>
      <br />
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
    </>
  );
}

export default FinancePrice;
