import {
  Button,
  ConfigProvider,
  Menu,
  Space,
  Table,
  TableProps,
  Tag,
} from "antd";
import CustomButton from "../../common/CustomButton";
import Image from "next/image";
import { useState } from "react";

interface DataType {
  key: string;
  name: string;
  //   age: number;
  //   address: string;
  //   tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Tên cơ quan",
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
        <Button className="button-primary">Cơ cấu tổ chức</Button>
      </Space>
    ),
  },
];

const dataMinisterialLevel: DataType[] = [
  {
    key: "1",
    name: "Chính phủ",
  },
  {
    key: "2",
    name: "Tòa án nhân dân tối cao",
  },
  {
    key: "3",
    name: "Tập đoàn điện lực Việt Nam",
  },
];

const dataProvincialLevel: DataType[] = [
  {
    key: "1",
    name: "Tòa án nhân dân Thành phố Hà Nội",
  },
  {
    key: "2",
    name: "Tòa án nhân dân cấp Tỉnh",
  },
  {
    key: "3",
    name: "UBND tỉnh Yên Bái",
  },
  {
    key: "4",
    name: "UBND tỉnh Yên Bái",
  },
];

const navArr = [
  {
    label: "Cấp Bộ",
    key: "cap-bo",
  },
  {
    label: "Cấp Tỉnh",
    key: "cap-tinh",
  },
];

function ObjectAgency() {
  const [activeNav, setActiveNav] = useState<string>("cap-bo");
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
        Thêm cơ quan thực hiện
      </Button>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "var(--primary-color)",
              headerColor: "#fff",
            },
            Menu: {
              horizontalItemSelectedColor: "var(--primary-color)",
            },
          },
        }}
      >
        <div className="flex bg-white">
          <div className="w-1/2">
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[activeNav]}
              selectedKeys={[activeNav]}
              items={navArr.map((item) => {
                return {
                  key: item.key,
                  label: item.label,
                };
              })}
              style={{
                justifyContent: "center",
                marginBottom: 8,
                fontSize: 16,
                color: "#a1a5ac",
              }}
              onSelect={({ item, key }) => {
                setActiveNav(key);
              }}
            />
            <Table
              columns={columns}
              dataSource={
                activeNav === "cap-tinh"
                  ? dataProvincialLevel
                  : dataMinisterialLevel
              }
              pagination={{ position: ["bottomCenter"] }}
            />
          </div>
          <div>Đang xem:</div>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default ObjectAgency;
