import { Button, ConfigProvider, Space, Table, TableProps, Tag } from 'antd';
import Image from 'next/image';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function Dashboard() {
  return (
    <div>
      <div className='bg-white mb-4'>
        <div className='p-2 uppercase border-l-4 border-b border-b-[#ccc] border-l-[#000]'>
          Tổng quan
        </div>
        <div className='flex items-center justify-between p-4'>
          <div>
            <div>Hiện tại bạn đã vào làm</div>
            <Button
              icon={
                <Image
                  src='/images/dashboard/leave.png'
                  alt='leave'
                  width={20}
                  height={20}
                />
              }
              style={{
                backgroundColor: 'var(--secondary-color)',
                color: '#fff',
              }}
              className='button-flex'
            >
              Ra vể
            </Button>
          </div>
          <div>
            <div>Quy trình hoạt động</div>
            <div className='flex gap-2'>
              <div
                style={{
                  backgroundColor: '#F0AD00',
                  width: 30,
                  height: 30,
                  borderRadius: '1000px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src='/images/dashboard/flow.png'
                  alt='flow'
                  width={20}
                  height={20}
                />
              </div>
              <div className='uppercase text-lg font-semibold'>0</div>
            </div>
          </div>
          <div>
            <div>Tất cả nhiệm vụ</div>
            <div className='flex gap-2'>
              <div
                style={{
                  backgroundColor: '#41DC8F',
                  width: 30,
                  height: 30,
                  borderRadius: '1000px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src='/images/dashboard/flow.png'
                  alt='flow'
                  width={20}
                  height={20}
                />
              </div>
              <div className='uppercase text-lg font-semibold'>0</div>
            </div>
          </div>
          <div>
            <div>%KPI</div>
            <div className='flex gap-2'>
              <div
                style={{
                  backgroundColor: '#EF9E00',
                  width: 30,
                  height: 30,
                  borderRadius: '1000px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src='/images/dashboard/kpi.png'
                  alt='flow'
                  width={20}
                  height={20}
                />
              </div>
              <div className='uppercase text-lg font-semibold'>0</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white mb-4'>
        <div className='p-2 uppercase border-l-4 border-b border-b-[#ccc] border-l-[#000]'>
          Báo cáo công việc
        </div>
        <div className='p-4'>
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  headerBg: 'var(--primary-color)',
                  headerColor: '#fff',
                },
              },
            }}
          >
            <Table columns={columns} dataSource={data} />
          </ConfigProvider>
        </div>
      </div>
      <div className='bg-white mg-4'></div>
    </div>
  );
}

export default Dashboard;
