import { Avatar, Button, ConfigProvider, Space, Table, TableProps, Tag } from 'antd';
import Image from 'next/image';

interface DataType {
  key: string;
  action: any;
  mission: any;
  process: any;
  implementer: any;
  time: any;
  status: any;

}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Hành động',
    dataIndex: 'action',
    key: 'action',
    render: (text) => (
    <div className='flex justify-center items-center'> 
      <div className='p-1 rounded text-white bg-[#41DC8F]'>
        {text}
      </div>
    </div>
    )
  },
  {
    title: 'Nhiệm vụ',
    dataIndex: 'mission',
    key: 'mission',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Quy trình',
    dataIndex: 'process',
    key: 'process',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Người thực hiện',
    key: 'implementer',
    dataIndex: 'implementer',
    render: (user) => (
      <div className='flex items-center' >
        <Avatar src={user.images} />
        <div className='flex flex-col ml-1'>
          <span className='font-bold'>{user.name}</span>
          <span>{user.email}</span>
        </div>
      </div>
    )
  },
  {
    title: 'Thời gian',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <div className='flex justify-center items-center'> 
        <div className='p-1 rounded text-white bg-black'>
          {text}
        </div>
      </div>
    )
  }
];

const data: DataType[] = [
  {
    key: '1',
    action: 'created',
    mission: '# 4211 saldsjaslkd',
    process: 'Quy trình ABC',
    implementer: {images: '', name: 'Ngô Long VŨ', email: 'ngovu5122000@gmail.com'},
    time: '2024-03-26 08:02:56',
    status: 'Quản lý giao việc'
  },
  {
    key: '2',
    action: 'created',
    mission: '# 4211 saldsjaslkd',
    process: 'Quy trình ABC',
    implementer: {images: '', name: 'Ngô Long VŨ', email: 'ngovu5122000@gmail.com'},
    time: '2024-03-26 08:02:56',
    status: 'Quản lý giao việc'
  },
  {
    key: '3',
    action: 'created',
    mission: '# 4211 saldsjaslkd',
    process: 'Quy trình ABC',
    implementer: {images: '', name: 'Ngô Long VŨ', email: 'ngovu5122000@gmail.com'},
    time: '2024-03-26 08:02:56',
    status: 'Quản lý giao việc'
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
