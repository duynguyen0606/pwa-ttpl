import { Button, ConfigProvider, Space, Table, TableProps, Tag } from 'antd';
import CustomButton from '../../common/CustomButton';
import Image from 'next/image';

interface DataType {
  key: string;
  name: string;
  title: string;
  classification: string;
  author: string;
  time: any;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Mã bài viết',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Tiêu đề',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Danh mục',
    dataIndex: 'classification',
    key: 'classification',
  },
  {
    title: 'Tác giả',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Thời gian',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Thao tác',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <CustomButton type='delete' />
      </Space>
    ),
  },
];

const data: DataType[] = [
    {
        key: "1",
        name: "HELLO8",
        title: "HELLO",
        classification: "1",
        author: "ngo long vu",
        time: "2024-03-26 23:26:38",
    },
    {
        key: "2",
        name: "6263",
        title: "test",
        classification: "1",
        author: "ngo long vu",
        time: "2024-03-25 15:07:28",
    },
    {
        key: "3",
        name: "",
        title: "Test phản hồi bình luận có id là 4550",
        classification: "",
        author: "ngo long vu",
        time: "2024-03-12 10:11:45",
    },
];

function MyPosts() {
  return (
    <div>
      {/* <Button
        icon={
          <Image
            src='/images/dashboard/plus.png'
            alt='plus'
            width={20}
            height={20}
          />
        }
        className='mb-4 button-primary button-flex'
      >
        Thêm đối tượng thực hiện
      </Button> */}
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
        <Table columns={columns} dataSource={data} pagination={{position: ['bottomCenter']}} />
      </ConfigProvider>
    </div>
  );
}

export default MyPosts;
