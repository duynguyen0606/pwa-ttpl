import { ConfigProvider, Space, Table, TableProps } from 'antd';
import CustomButton from '../../common/CustomButton';
interface DataType {
  key: string;
  inDate: any;
  inAt: any;
  outDate: any;
  outAt: any;
  duration: any,
  actualSalary: any;
  note: any;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Tới ngày",
    dataIndex: "inDate",
    key: "inDate",
  },
  {
    title: "Tới công ty giờ",
    key: "inAt",
    dataIndex: "inAt",
  },
  {
    title: "Về ngày",
    dataIndex: "outDate",
    key: "outDate",
  },
  {
    title: "Ra về khỏi giờ",
    key: "outAt",
    dataIndex: "outAt",
  },
  {
    title: "Thời lượng",
    key: "duration",
    dataIndex: "duration",
  },
  {
    title: "Lương thực lĩnh",
    key: "actualSalary",
    dataIndex: "actualSalary",
  },
  {
    title: "Ghi chú",
    key: "note",
    dataIndex: "note",
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

function EmployeeWorkday() {
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

export default EmployeeWorkday;
