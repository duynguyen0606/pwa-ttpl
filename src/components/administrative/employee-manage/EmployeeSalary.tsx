import { ConfigProvider, Space, Table, TableProps } from "antd";
import CustomButton from "../../common/CustomButton";
interface DataType {
  key: string;
  month: any;
  totalWorkday: any;
  basicSalary: any;
  bonusSalary: any;
  minusSalary: any;
  hotReward: any;
  phoneAllowance: any;
  fuelAllowance: any;
  actualSalary: any;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Tháng",
    dataIndex: "month",
    key: "month",
    fixed: "left",
  },
  {
    title: "Ngày công",
    key: "totalWorkday",
    dataIndex: "totalWorkday",
  },
  {
    title: "Lương cơ bản",
    key: "basicSalary",
    dataIndex: "basicSalary",
  },
  {
    title: "Lương thưởng KPI",
    key: "bonusSalary",
    dataIndex: "bonusSalary",
  },
  {
    title: "Giảm trừ lương",
    key: "minusSalary",
    dataIndex: "minusSalary",
  },
  {
    title: "Thưởng nóng",
    key: "hotReward",
    dataIndex: "hotReward",
  },
  {
    title: "Phụ cấp điện thoại",
    key: "phoneAllowance",
    dataIndex: "phoneAllowance",
  },
  {
    title: "Phụ cấp xăng xe",
    key: "fuelAllowance",
    dataIndex: "fuelAllowance",
  },
  {
    title: "Lương thực lĩnh",
    key: "actualSalary",
    dataIndex: "actualSalary",
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

function EmployeeSalary() {
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

export default EmployeeSalary;
