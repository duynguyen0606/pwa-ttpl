import { ConfigProvider, Table, TableProps } from 'antd';
interface DataType {
  key: string;
  name: string;
  date: any;
  money: any;
  status: any;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Báo giá',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Ngày gửi báo giá',
    key: 'date',
    dataIndex: 'date',
  },
  {
    title: 'Số tiền',
    key: 'money',
    dataIndex: 'money',
  },
  {
    title: 'Trạng thái',
    key: 'status',
    dataIndex: 'status',
  },
];

const data: DataType[] = [

];

function CustomerPrice() {
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
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
      />
    </ConfigProvider>
  );
}

export default CustomerPrice;
