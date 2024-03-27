import { Button, ConfigProvider, Tabs, TabsProps } from 'antd';
import Field from './Field';
import ObjectAction from './ObjectAction';
import ObjectAgency from './ObjectAgency';
import Procedure from './Procedure';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Thủ tục',
    children: <Procedure />,
  },
  {
    key: '2',
    label: 'Lĩnh vực',
    children: <Field />,
  },
  {
    key: '3',
    label: 'Đối tượng thực hiện',
    children: <ObjectAction />,
  },
  {
    key: '4',
    label: 'Cơ quan thực hiện',
    children: <ObjectAgency />,
  },
];

function Procedures() {
  return (
    <div>
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
        <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
      </ConfigProvider>
    </div>
  );
}

export default Procedures;
