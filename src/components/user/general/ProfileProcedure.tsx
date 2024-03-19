import { apiGetUserProcedureByType } from "@/src/api/user";
import { useAppSelector } from "@/src/redux/hooks";
import { ConfigProvider, Menu } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";


interface NavItem {
  key: number;
  label: string;
  data: Array<any>;
}
interface DataType {
  key: string;
  name: string;
  agent: string;
  result: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Thủ tục",
    dataIndex: "title",
    key: "title",
    width: "40%",
    render: (text) => (
      <div className="max-w-60 text-sky-500">
        <Link href="/">{text}</Link>
      </div>
    ),
  },
  {
    title: "Cơ quan thực hiện",
    dataIndex: "co_quan_thuc_hien",
    key: "co_quan_thuc_hien",
    width: "30%",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Kết quả thực hiện",
    dataIndex: "result",
    key: "result",
    width: "30%",
  },
];

function ProfileProcedure() {
  const [dataProcedure, setDataProcedure] = useState<Array<any>>();
  const { listProcedureSaved, listProcedureEdited, listProcedureWatched } =
    useAppSelector((state) => state.procedureState);
    
  const dataNavs: { [key: number]: NavItem } = useMemo(() => {
    return {
      1: {
        key: 1,
        label: "Thủ tục đã xem",
        data: listProcedureWatched,
      },
      2: {
        key: 2,
        label: "Thủ tục đã lưu",
        data: listProcedureSaved,
      },
      3: {
        key: 3,
        label: "Thủ tục đã sửa",
        data: listProcedureEdited,
      },
    };
  }, []);

  const handleSelectItem = (item: any) => {
    setDataProcedure(dataNavs[item.key].data);
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "var(--primary-color)",
          },
          components: {
            Menu: {
              horizontalItemSelectedColor: "var(--primary-color)",
            },
          },
        }}
      >
        <Menu
          style={{ justifyContent: "center", fontSize: 18 }}
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={Object.values(dataNavs).map((item) => {
            return {
              key: item.key,
              label: item.label,
            };
          })}
          onSelect={(item) => handleSelectItem(item)}
        />
      </ConfigProvider>
      <div className="p-10 bg-white">
        <Table
          bordered
          columns={columns}
          dataSource={dataProcedure}
          pagination={{ position: ["bottomCenter"] }}
        />
      </div>
    </div>
  );
}

export default ProfileProcedure;
