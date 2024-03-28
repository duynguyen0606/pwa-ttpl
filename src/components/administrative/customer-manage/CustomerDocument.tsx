import { ConfigProvider, Table, TableProps } from "antd";
interface DataType {
  key: string;
  id: any;
  file: any;
  size: any;
  uploadBy: any;
  uploadAt: any;
  status: string;
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
  },
  {
    title: "Ngày upload",
    key: "uploadAt",
    dataIndex: "uploadAt",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
  },
];

const data: DataType[] = [];

function CustomerDocument() {
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

export default CustomerDocument;
