import Table, { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Tên cơ quan',
    dataIndex: 'name',
    key: 'name',
    render: (name) => (
      <div className='flex justify-between'>
        <div>{name}</div>
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Ban dân tộc tỉnh Yên Bái',
  },
  {
    key: '2',
    name: 'Ban dân tộc tỉnh Yên Bái',
  },
  {
    key: '3',
    name: 'Ban dân tộc tỉnh Yên Bái',
  },
  {
    key: '4',
    name: 'Ban dân tộc tỉnh Yên Bái',
  },
  {
    key: '5',
    name: 'Ban dân tộc tỉnh Yên Bái',
  },
  {
    key: '6',
    name: 'Ban dân tộc tỉnh Yên Bái',
  },
];

function TableProcedureDetail() {
  return (
    <Table
      bordered
      columns={columns}
      dataSource={data}
      pagination={{ position: ['bottomCenter'], pageSize: 10 }}
    />
  );
}

export default TableProcedureDetail;
