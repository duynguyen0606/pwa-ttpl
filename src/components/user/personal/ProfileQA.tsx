import { ConfigProvider, Menu } from 'antd';
import { useState } from 'react';

const dataNavs = [
  {
    label: 'Câu hỏi miễn phí',
    key: '1',
  },
  {
    label: 'Câu hỏi VIP',
    key: '2',
  },
];

function ProfileQA() {
  const [typeNav, setTypeNav] = useState('1')
  return (
      <ConfigProvider
          theme={{
              token: {
                  colorPrimary: "var(--primary-color)",
              },
              components: {
                  Menu: {
                      horizontalItemSelectedColor: "var(--primary-color)",
                  },
              },
          }}
      >
          <Menu
              mode="horizontal"
              defaultSelectedKeys={[typeNav]}
              selectedKeys={[typeNav]}
              items={dataNavs.map((item) => {
                  return {
                      key: item.key,
                      label: item.label,
                  };
              })}
              style={{
                  justifyContent: "center",
                  fontSize: 16,
                  color: "#a1a5ac",
              }}
              onSelect={({ item, key }) => setTypeNav(key)}
          />
      </ConfigProvider>
  );
}

export default ProfileQA;
