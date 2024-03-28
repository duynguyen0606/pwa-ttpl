import { Button, ConfigProvider, Space, Table, TableProps, Tag } from "antd";
import CustomButton from "../../common/CustomButton";
import Image from "next/image";

interface DataType {
  key: string;
  name: string;
  //   age: number;
  //   address: string;
  //   tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Tên lĩnh vực",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    width: "80%",
  },
  {
    title: "Action",
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
  {
    key: "1",
    name: "Tố tụng hành chính",
  },
  {
    key: "2",
    name: "Tố tụng hình sự",
  },
  {
    key: "3",
    name: "Tố tụng dân sự",
  },
];

function Field() {
  return (
    <div>
      <Button
        icon={
          <Image
            src="/images/dashboard/plus.png"
            alt="plus"
            width={20}
            height={20}
          />
        }
        className="mb-4 button-primary button-flex"
      >
        Thêm lĩnh vực
      </Button>
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
    </div>
  );
}

export default Field;
