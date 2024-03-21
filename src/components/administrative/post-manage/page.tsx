import { Button, ConfigProvider, Tabs, TabsProps } from 'antd';
import MyPosts from './MyPosts';
import CompanyPosts from './CompanyPosts';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Bài viết của tôi',
    children: <MyPosts />,
  },
  {
    key: '2',
    label: 'Bài viết của công ty',
    children: <CompanyPosts />,
  },
];

function PostManagement() {
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

export default PostManagement;
