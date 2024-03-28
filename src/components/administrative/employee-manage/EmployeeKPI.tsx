import { ConfigProvider, Table, TableProps } from "antd";
interface DataType {
  key: string;
  id: string;
  name: string;
  type: string;
  percent: any;
  total: any;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên quy trình",
    key: "name",
    dataIndex: "name",
  },
  {
    title: "Loại quy trình",
    key: "type",
    dataIndex: "type",
  },
  {
    title: "%KPI",
    key: "percent",
    dataIndex: "percent",
  },
  {
    title: "Tổng",
    key: "total",
    dataIndex: "total",
  },
];

const data: DataType[] = [];

function EmployeeKPI() {
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

export default EmployeeKPI;
