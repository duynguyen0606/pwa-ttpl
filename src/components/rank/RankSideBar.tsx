import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Image from 'next/image';

export enum OptionsSidebar {
  post = 1,
  procedure = 2,
  answer = 3,
  lawyer = 4,
  lawCompany = 5,
  business = 6,
  account = 7,
}

export const optionsArr = [
  {
    name: 'Bài viết',
    type: OptionsSidebar.post,
  },
  {
    name: 'Thủ tục pháp luật',
    type: OptionsSidebar.procedure,
  },
  {
    name: 'Câu trả lời pháp luật',
    type: OptionsSidebar.answer,
  },
  {
    name: 'Luật sư',
    type: OptionsSidebar.lawyer,
  },
  {
    name: 'Công ty luật',
    type: OptionsSidebar.lawCompany,
  },
  {
    name: 'Doanh nghiệp',
    type: OptionsSidebar.business,
  },
  {
    name: 'Tài khoản',
    type: OptionsSidebar.account,
  },
];

function RankSidebar(props: {
  activeTab?: number;
  onSelectedTab: (active: number) => void;
}) {
  const { activeTab = OptionsSidebar.post, onSelectedTab } = props;
  return (
    <div className='bg-white'>
      <div className='text-xl font-semibold p-4'>Bảng xếp hạng</div>
      <Sider style={{ background: '#fff' }} width={300}>
        <ul>
          {optionsArr.map((item) => (
            <li
              key={item.type}
              className='flex items-center justify-between py-2 px-4'
              style={{
                backgroundColor:
                  activeTab === item.type ? 'var(--primary-color)' : '#fff',
              }}
              onClick={() => onSelectedTab(item.type)}
            >
              <span
                style={{ color: activeTab === item.type ? '#fff' : '#444' }}
              >
                {item.name}
              </span>
              <Image
                src='/images/icons/right-arrow.png'
                width={30}
                height={20}
                alt='right-icon'
              />
            </li>
          ))}
        </ul>
      </Sider>
    </div>
  );
}

export default RankSidebar;
