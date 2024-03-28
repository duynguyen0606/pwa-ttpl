import { ConfigProvider, Space, Table, TableProps } from 'antd';
import CustomButton from '../../common/CustomButton';
interface DataType {
  key: string;
  date: any;
  type: any;
  title: string;
  description: any;
  file: any;
  money: any;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Ngày",
    dataIndex: "date",
    key: "date",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Loại khoản chi",
    key: "type",
    dataIndex: "type",
  },
  {
    title: "Tiêu đề",
    key: "title",
    dataIndex: "title",
  },
  {
    title: "Mô tả",
    key: "description",
    dataIndex: "description",
  },
  {
    title: "File",
    key: "file",
    dataIndex: "file",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Số tiền",
    key: "money",
    dataIndex: "money",
  },
  {
    title: "Thao tác",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <CustomButton type="update" />
        <CustomButton type="delete" />
      </Space>
    ),
  },
];

const data: DataType[] = [

];

function EmployeeCost() {
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

export default EmployeeCost;
