import { Button, ConfigProvider, Space, Table, TableProps, Tag } from "antd";
import CustomButton from "../../common/CustomButton";
import Image from "next/image";

interface DataType {
  key: string;
  id: string;
  name: string;
  result: string;
  // action: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Mã thủ tục",
    dataIndex: "id",
    key: "id",
    render: (text) => <a className="font-bold">{text}</a>,
    width: "20%",
  },
  {
    title: "Tên thủ tục",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Kết quả thực hiện",
    dataIndex: "result",
    key: "result",
    render: (text) => <a>{text}</a>,
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
  {
    key: "1",
    id: "LGZ-10.201123010",
    name: "Thủ tục chứng nhận lãnh sự, hợp pháp hóa lãnh sự giấy tờ, tài liệu tại các cơ quan ở trong nước",
    result: "Chứng nhận hợp pháp hóa lãnh lãnh sự",
  },
  {
    key: "2",
    id: "LGZ-10.20112309",
    name: "Thủ tục xác định tình trạng nghiện ma túy đối với người bị tạm giữ hành chính được đề nghị xác định tình trạng nghiện ma túy tại nơi tạm giữ không có cơ sở y tế đủ điều kiện",
    result: "Sau khi hoàn thành quy trình xác định tình trạng nghiện ma túy, cơ sở y tế lập Phiếu kết quả xác định tình trạng nghiện ma túy thành 02 bản trình thủ trưởng đơn vị phê duyệt theo mẫu quy định tại điểm e Khoản 1 Điều này; 01 bản lưu bệnh án, 01 bản trả cơ quan công an đề nghị xác định tình trạng nghiện ma túy.",
  },
  {
    key: "3",
    id: "LGZ-10.201123008",
    name: "thủ tục xác định tình trạng nghiện ma túy đối với người tự nguyện xác định tình trạng nghiện ma túy",
    result: "Cơ sở y tế lập Phiếu kết quả xác định tình trạng nghiện ma túy thành 02 bản theo mẫu quy định tại điểm c Khoản 1 Điều này; 01 bản lưu bệnh án, 01 bản trả cho người tự nguyện xác định tình trạng nghiện ma túy.",
  },
];

function Procedure() {
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
        Thêm thủ tục
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

export default Procedure;
