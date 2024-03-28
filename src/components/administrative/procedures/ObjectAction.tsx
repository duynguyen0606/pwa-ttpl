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
    title: "Đối tượng thực hiện",
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
    name: "Tổ chức, cá nhân nhập khẩu, sản xuất, sử dụng các chất POP tại Việt Nam theo quy định.",
  },
  {
    key: "2",
    name: "Chủ dự án đầu tư, cơ sở",
  },
  {
    key: "3",
    name: "Đương sự, người đại diện hợp pháp của đương sự hoặc cơ quan, tổ chức, cá nhân khởi kiện vụ án",
  },
];

function ObjectAction() {
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
        Thêm đối tượng thực hiện
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

export default ObjectAction;
