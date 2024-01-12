import {
  Button,
  ConfigProvider,
  Pagination,
  PaginationProps,
  Select,
  Tabs,
} from 'antd';
import Input from 'antd/es/input/Input';
import Table, { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { useState } from 'react';
import TableProcedureDetail from './TableProcedureDetail';

const navbarArr = ['Cấp bộ', 'Cấp tỉnh'];

interface DataType {
  key: string;
  actionObject: {
    name: string;
    action: string;
  };
}

function TableProcedureAgent() {
  const [showDetail, setShowDetail] = useState(false);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên cơ quan',
      dataIndex: 'actionObject',
      key: 'name',
      render: (object) => (
        <div className='flex justify-between'>
          <div style={{ width: '70%' }}>{object.name}</div>
          <Button
            style={{ backgroundColor: 'var(--primary-color)', color: '#fff' }}
            onClick={() => setShowDetail(true)}
          >
            Cơ quan tổ chức
          </Button>
        </div>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      actionObject: {
        name: 'Toà án nhân dân thành phố HN',
        action: 'Cơ quan tổ chức',
      },
    },
    {
      key: '2',
      actionObject: {
        name: 'Toà án nhân dân thành phố HN',
        action: 'Cơ quan tổ chức',
      },
    },
    {
      key: '3',
      actionObject: {
        name: 'Toà án nhân dân thành phố HN',
        action: 'Cơ quan tổ chức',
      },
    },
    {
      key: '4',
      actionObject: {
        name: 'Toà án nhân dân thành phố HN',
        action: 'Cơ quan tổ chức',
      },
    },
    {
      key: '5',
      actionObject: {
        name: 'Toà án nhân dân thành phố HN',
        action: 'Cơ quan tổ chức',
      },
    },
    {
      key: '6',
      actionObject: {
        name: 'Toà án nhân dân thành phố HN',
        action: 'Cơ quan tổ chức',
      },
    },
  ];

  console.log(showDetail);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
  };

  return (
    <div id='table-procedure-agent' className='p-4'>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              itemActiveColor: 'var(--primary-color)',
              itemHoverColor: 'var(--primary-color)',
              itemSelectedColor: 'var(--primary-color)',
              inkBarColor: 'var(--primary-color)',
              colorBorderSecondary: '#fff',
              fontSize: 18,
            },
          },
        }}
      >
        <Tabs
          items={navbarArr.map((item) => {
            return {
              label: item,
              key: item,
            };
          })}
        />
      </ConfigProvider>
      <div className='float-right pb-4'>
        <Input
          style={{ width: 280 }}
          placeholder='Tìm kiếm'
          prefix={
            <Image
              src='/images/icons/search.png'
              alt='search icon'
              width={20}
              height={20}
            />
          }
        />
        {/* &nbsp; Hiển thị &nbsp;
        <Select
          defaultValue={'10'}
          style={{ width: 80 }}
          onChange={handleChange}
          options={[
            { value: '10', label: 10 },
            { value: '25', label: 25 },
            { value: '50', label: 50 },
            { value: '100', label: 100 },
          ]}
        /> */}

        {/* <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
        /> */}
      </div>
      {showDetail ? (
        <>
          <Button
            className='flex items-center'
            type='text'
            onClick={() => setShowDetail(false)}
            icon={
              <Image
                src='/images/icons/left-arrow.png'
                width={20}
                height={20}
                alt='back icon'
              />
            }
          >
            UBND tỉnh yên bái
          </Button>
          <TableProcedureDetail />
        </>
      ) : (
        <Table
          bordered
          columns={columns}
          dataSource={data}
          pagination={{ position: ['bottomCenter'], pageSize: 10 }}
        />
      )}
    </div>
  );
}

export default TableProcedureAgent;
