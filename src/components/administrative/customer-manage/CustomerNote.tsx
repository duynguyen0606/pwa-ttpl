import { ConfigProvider, Space, Table, TableProps } from 'antd';
import CustomButton from '../../common/CustomButton';
interface DataType {
  key: string;
  createAt: any;
  content: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Ngày tạo",
    dataIndex: "createAt",
    key: "createAt",
  },
  {
    title: "Nội dung",
    key: "content",
    dataIndex: "content",
  },
  {
    title: "Thao tác",
    key: "action",
    dataIndex: "action",
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

function CustomerNote() {
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

export default CustomerNote;
