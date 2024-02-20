import { ConfigProvider, Menu } from 'antd';

const dataNavs = [
  {
    label: 'Người theo dõi',
    key: 1,
  },
  {
    label: 'Đang theo dõi',
    key: 2,
  },
];
function ProfileFollow() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'var(--primary-color)',
        },
        components: {
          Menu: {
            horizontalItemSelectedColor: 'var(--primary-color)',
          },
        },
      }}
    >
      <Menu
        mode='horizontal'
        defaultSelectedKeys={['2']}
        items={dataNavs.map((item) => {
          return {
            key: item.key,
            label: item.label,
          };
        })}
        style={{ justifyContent: 'center', fontSize: 18 }}
      />
    </ConfigProvider>
  );
}

export default ProfileFollow;
