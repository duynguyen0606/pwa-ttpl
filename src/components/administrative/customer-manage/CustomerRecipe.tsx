import { ConfigProvider, Table, TableProps } from "antd";
interface DataType {
  key: string;
  id: string;
  flow: string;
  payDate: any;
  dueDate: any;
  moneyPaid: string;
  totalValue: string;
  status: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Mã hóa đơn",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Quy trình",
    key: "flow",
    dataIndex: "flow",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Ngày trả tiền",
    key: "payDate",
    dataIndex: "payDate",
  },
  {
    title: "Ngày đáo hạn",
    key: "dueDate",
    dataIndex: "dueDate",
  },
  {
    title: "Số tiền đã trả",
    key: "moneyPaid",
    dataIndex: "moneyPaid",
  },
  {
    title: "Giá trị hóa đơn",
    key: "totalValue",
    dataIndex: "totalValue",
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
    id: "Mã hóa đơn 270",
    flow: "Quy trình ABC",
    payDate: "26/03/2024",
    dueDate: "26/03/2024",
    moneyPaid: "0đ",
    totalValue: "0đ",
    status: "Nháp",
  },
  {
    key: "2",
    id: "Mã hóa đơn 268",
    flow: "Quy trình ABC",
    payDate: "06/03/2024",
    dueDate: "15/03/2024",
    moneyPaid: "0đ",
    totalValue: "0đ",
    status: "Nháp",
  },
];

function CustomerRecipe() {
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

export default CustomerRecipe;
