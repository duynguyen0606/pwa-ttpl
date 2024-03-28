import { ConfigProvider, Table, TableProps } from 'antd';
interface DataType {
  key: string;
  id: string;
  title: string;
  startAt: any;
  endAt: any;
  flow: any;
  assigned: any;
  members: Array<any>;
  status: any;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Tiêu đề',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Ngày bắt đầu',
    key: 'startAt',
    dataIndex: 'startAt',
  },
  {
    title: 'Ngày kết thúc',
    key: 'endAt',
    dataIndex: 'endAt',
  },
  {
    title: 'Quy trình',
    key: 'flow',
    dataIndex: 'flow',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Phối hợp và làm việc',
    key: 'members',
    dataIndex: 'members',
  },
  {
    title: 'Trạng thái',
    key: 'status',
    dataIndex: 'status',
  },
];

const data: DataType[] = [

];

function EmployeeMission() {
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

export default EmployeeMission;
