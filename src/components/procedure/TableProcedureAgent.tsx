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
import { useEffect, useState } from 'react';
import TableProcedureDetail from './TableProcedureDetail';
import {
  apiGetListChildrentAgentByProcedureAgentId,
  apiGetListProcedureAgentByType,
} from '@/src/api/procedure';

const navbarArr = [
  { name: 'Cấp bộ', type: 'bo' },
  { name: 'Cấp tỉnh', type: 'tinh' },
];

interface DataType {
  key: string;
  actionObject: {
    name: string;
    action: string;
  };
}

function TableProcedureAgent() {
  const [showDetail, setShowDetail] = useState(false);
  const [typeAgent, setTypeAgent] = useState<string>('bo');
  const [dataListAgent, setDataListAgent] = useState<
    Array<{ id: string; name: string }>
  >([]);
  const [dataChildAgent, setDataChildAgent] = useState<
    Array<{ id: string; name: string }>
  >([]);
  const [detailAgentName, setDetailAgentName] = useState('');
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
            onClick={() => {
              setShowDetail(true);
              handleFetchDataDetailAgent(object.id);
              setDetailAgentName(object.name);
            }}
          >
            {object.action}
          </Button>
        </div>
      ),
    },
  ];
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
  };

  useEffect(() => {
    (async () => {
      const dataRes = await apiGetListProcedureAgentByType({ type: typeAgent });

      if (dataRes.status && dataRes.data) {
        setDataListAgent(dataRes.data.result);
      }
    })();
  }, [typeAgent]);

  const handleFetchDataDetailAgent = async (id: string) => {
    const dataRes = await apiGetListChildrentAgentByProcedureAgentId(id);

    if (dataRes.status && dataRes.data) {
      setDataChildAgent(dataRes.data.result);
    }
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
              label: item.name,
              key: item.type,
            };
          })}
          onTabClick={(type) => setTypeAgent(type)}
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
      </div>
      {showDetail && dataChildAgent ? (
        <TableProcedureDetail
          onClickBack={() => setShowDetail(false)}
          data={dataChildAgent}
          name={detailAgentName}
        />
      ) : (
        <Table
          bordered
          columns={columns}
          dataSource={dataListAgent.map((item) => {
            return {
              key: item.id,
              actionObject: {
                name: item.name,
                action: 'Cơ cấu tổ chức',
                id: item.id,
              },
            };
          })}
          pagination={{ position: ['bottomCenter'], pageSize: 10 }}
        />
      )}
    </div>
  );
}

export default TableProcedureAgent;
