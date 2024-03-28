import { ConfigProvider, Space, Table, TableProps } from "antd";
import CustomButton from "../../common/CustomButton";
interface DataType {
  key: string;
  id: string;
  title: string;
  type: any;
  delivered: any;
  finalActivity: any;
  status: any;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Mã hỗ trợ",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tiêu đề",
    key: "title",
    dataIndex: "title",
  },
  {
    title: "Loại hỗ trợ",
    key: "type",
    dataIndex: "type",
  },
  {
    title: "Đã giao cho",
    key: "delivered",
    dataIndex: "delivered",
  },
  {
    title: "Hoạt động cuối",
    key: "finalActivity",
    dataIndex: "finalActivity",
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

function CustomerSp() {
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

export default CustomerSp;
