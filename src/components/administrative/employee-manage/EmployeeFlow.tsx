import { ConfigProvider, Table, TableProps } from "antd";
interface DataType {
  key: string;
  id: string;
  title: string;
  customerName: string;
  money: string;
  startDate: string;
  endDate: string;
  progress: any;
  status: any;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tiêu đề",
    key: "title",
    dataIndex: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Khách hàng",
    key: "customerName",
    dataIndex: "customerName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Số tiền",
    key: "money",
    dataIndex: "money",
  },
  {
    title: "Ngày bắt đầu",
    key: "startDate",
    dataIndex: "startDate",
  },
  {
    title: "Ngày kết thúc",
    key: "endDate",
    dataIndex: "endDate",
  },
  {
    title: "Tiến độ",
    key: "progress",
    dataIndex: "progress",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
];

const data: DataType[] = [
  {
    key: "1",
    id: "695",
    title: "test",
    customerName: "công ty B",
    money: "100đ",
    startDate: "22/03/2024",
    endDate: "22/03/2024",
    progress: "",
    status: "Open",
  },
  {
    key: "2",
    id: "695",
    title: "test",
    customerName: "công ty B",
    money: "100đ",
    startDate: "22/03/2024",
    endDate: "22/03/2024",
    progress: "",
    status: "Open",
  },
  {
    key: "3",
    id: "695",
    title: "test",
    customerName: "công ty B",
    money: "100đ",
    startDate: "22/03/2024",
    endDate: "22/03/2024",
    progress: "",
    status: "Open",
  },
];

function EmployeeFlow() {
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

export default EmployeeFlow;
