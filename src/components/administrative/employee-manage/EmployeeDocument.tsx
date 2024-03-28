import { Avatar, ConfigProvider, Space, Table, TableProps } from "antd";
import CustomButton from "../../common/CustomButton";
interface DataType {
  key: string;
  id: any;
  file: any;
  size: any;
  uploadBy: any;
  uploadAt: any;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "File",
    key: "file",
    dataIndex: "file",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Dung lượng",
    key: "size",
    dataIndex: "size",
  },
  {
    title: "Upload by",
    key: "uploadBy",
    dataIndex: "uploadBy",
    render: (user, record) => (
      <div className="flex items-center">
        <Avatar src={user?.images} />
        <div className="ml-2 flex flex-col">
          <span>{user?.name}</span>
          <span>{user?.email}</span>
        </div>
      </div>
    ),
  },
  {
    title: "Ngày upload",
    key: "uploadAt",
    dataIndex: "uploadAt",
  },
  {
    title: "Thao tác",
    key: "action",
    dataIndex: "action",
    render: (_, record) => (
      <Space size="middle">
        <CustomButton type="save" />
        <CustomButton type="delete" />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    id: "#2022",
    file: "_file651957a688213-laravel.jpg",
    size: "5.06 kB",
    uploadBy: {
      name: "ngo long vu",
      email: "ngovu5122000@gmail.com",
      images: "",
    },
    uploadAt: "01/10/2023 18:35",
  },
];

function EmployeeDocument() {
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

export default EmployeeDocument;
