import { ConfigProvider } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import Link from 'next/link';

interface DataType {
  key: string;
  data: {
    name: string;
    id: string;
  };
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: '5%',
  },
  {
    title: 'Họ và tên',
    dataIndex: 'name',
    key: 'name',
    width: '10%',
  },
  {
    title: 'Chức vụ',
    dataIndex: 'job_position',
    key: 'position',
    width: '15%',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
    width: '10%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: '10%',
  },
  {
    title: 'Lĩnh vực/địa bàn',
    dataIndex: 'fields_charge',
    key: 'fields_charge',
    width: '15%',
  },
  // {
  //   title: 'Vị trí làm việc',
  //   dataIndex: 'fields_charge',
  //   key: 'fields_charge',
  //   width: '15%',
  // },
];

function TableProcedureDetailLevel2({
  data,
}: {
  data: {
    dataDetail: any;
    staffOrgan: any;
  } | null;
}) {
  return (
    <>
      {data && (
        <div className='p-4'>
          <h2 className='text-xl font-semibold'>Thông tin cơ cấu tổ chức</h2>
          <div>
            <div>
              <div className='py-2 flex gap-2 items-center'>
                <div className='font-semibold text-lg'>Tên cơ cấu tổ chức:</div>
                <span>{data.dataDetail.name}</span>
              </div>
              <div className='py-2 flex gap-2 items-center'>
                <div className='font-semibold text-lg'>Địa chỉ:</div>
                <span>{data.dataDetail.address}</span>
              </div>
              <div className='py-2 flex gap-2 items-center'>
                <div className='font-semibold text-lg'>Email:</div>
                <span>{data.dataDetail.email}</span>
              </div>
              <div className='py-2 flex gap-2 items-center'>
                <div className='font-semibold text-lg'>Số điện thoại:</div>
                <span>{data.dataDetail.phone}</span>
              </div>
              <div className='py-2'>
                <div className='font-semibold text-lg'>Toạ độ: </div>
                <iframe
                  src={data.dataDetail.location}
                  width={'100%'}
                  height={170}
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <ConfigProvider
              theme={{
                components: {
                  Table: {
                    headerBg: 'var(--primary-color)',
                  },
                },
              }}
            >
              <Table
                bordered
                columns={columns}
                dataSource={data.staffOrgan}
                pagination={{ position: ['bottomCenter'] }}
              />
            </ConfigProvider>
          </div>
        </div>
      )}
    </>
  );
}

export default TableProcedureDetailLevel2;
