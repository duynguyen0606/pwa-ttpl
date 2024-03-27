import { ConfigProvider, Tabs, TabsProps } from 'antd';
import FinanceRecipe from './FinanceRecipe';
import FinanceCost from './FinanceCost';
import FinancePrice from './FinancePrice';
import FinanceCostReceived from './FinanceCostReceived';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Hóa đơn',
    children: <FinanceRecipe />,
  },
  {
    key: '2',
    label: 'Chi phí',
    children: <FinanceCost />,
  },
  {
    key: '3',
    label: 'Báo giá',
    children: <FinancePrice />,
  },
  {
    key: '4',
    label: 'Báo giá đã nhận',
    children: <FinanceCostReceived />,
  },
];

function Finance() {
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

export default Finance;
