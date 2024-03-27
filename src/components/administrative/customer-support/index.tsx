import { ConfigProvider, Tabs, TabsProps } from 'antd';
import RequestSend from './RequestSend';
import RequireFormClient from './RequireFromClient';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Yêu cầu đã gửi',
    children: <RequestSend />,
  },
  {
    key: '2',
    label: 'Yêu cầu từ khách hàng',
    children: <RequireFormClient />,
  },
];

function CustomerSupport() {
  return (
    <div className='bg-white p-4'>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              itemActiveColor: 'var(--primary-color)',
              itemHoverColor: 'var(--primary-color)',
              itemSelectedColor: 'var(--primary-color)',
              inkBarColor: 'var(--primary-color)',
            },
          },
        }}
      >
        <Tabs defaultActiveKey='1' items={items} />
      </ConfigProvider>
    </div>
  );
}

export default CustomerSupport;
