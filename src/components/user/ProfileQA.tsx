import { Menu } from 'antd';

const dataNavs = [
  {
    label: 'Câu hỏi miễn phí',
    key: 1,
  },
  {
    label: 'Câu hỏi VIP',
    key: 2,
  },
];

function ProfileQA() {
  return (
    <Menu
      theme='dark'
      mode='horizontal'
      defaultSelectedKeys={['2']}
      items={dataNavs.map((item) => {
        return {
          key: item.key,
          label: item.label,
        };
      })}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
}

export default ProfileQA;
