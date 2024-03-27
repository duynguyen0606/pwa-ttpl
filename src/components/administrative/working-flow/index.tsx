import { ConfigProvider, Tabs, TabsProps } from 'antd';
import CompanyFlow from './CompanyFlow';
import CompanyKPI from './CompanyKPI';
import PartnerFlow from './PartnerFlow';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Quy trình của công ty',
    children: <CompanyFlow />,
  },
  {
    key: '2',
    label: 'KPI của công ty',
    children: <CompanyKPI />,
  },
  {
    key: '3',
    label: 'Quy trinh của đối tác',
    children: <PartnerFlow />,
  },
];

function WoringFlow() {
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

export default WoringFlow;
