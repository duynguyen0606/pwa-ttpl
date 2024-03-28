import { Calendar, ConfigProvider, Table, TableProps } from 'antd';
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

function CustomerEvent() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "var(--primary-color)",
            headerColor: "#fff",
          },
        },
      }}
    >
      {/* <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
      /> */}
      <Calendar />
    </ConfigProvider>
  );
}

export default CustomerEvent;
