import { ConfigProvider, Space, Table, TableProps } from "antd";
import CustomButton from "../../common/CustomButton";
interface DataType {
  key: string;
  type: string;
  date: string;
  duration: string;
  status: any;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Loại nghỉ phép",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Ngày",
    key: "date",
    dataIndex: "date",
  },
  {
    title: "Thời lượng",
    key: "duration",
    dataIndex: "duration",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
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

const data: DataType[] = [];

function EmployeeDaysOff() {
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

export default EmployeeDaysOff;
