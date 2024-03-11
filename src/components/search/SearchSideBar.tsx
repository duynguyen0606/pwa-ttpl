import { Input, Typography } from 'antd';
import {
  AllIcon,
  GroupIcon,
  LawyerIcon,
  PostIcon,
  ProcedureIcon,
  QuestionIcon,
} from '../common/icons/search';
import Sider from 'antd/es/layout/Sider';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

enum TypeTabs {
  ALL = 'list',
  POST = 'list_post_favorite',
  PROCEDURE = 'list_data_thutuc',
  QUESTION = 'list_cauhoi',
  LAWYER = 'list_data_luatsu',
  GROUP = 'list_data_moinguoi',
}

const dataNavs = {
  [TypeTabs.ALL]: {
    name: 'Tất cả',
    icon: <AllIcon width='25px' height='25px' />,
    type: TypeTabs.ALL,
  },
  [TypeTabs.POST]: {
    name: 'Bài viết',
    icon: <PostIcon width='25px' height='25px' />,
    type: TypeTabs.POST,
  },
  [TypeTabs.PROCEDURE]: {
    name: 'Thủ tục pháp luật',
    icon: <ProcedureIcon width='40px' height='40px' />,
    type: TypeTabs.PROCEDURE,
  },
  [TypeTabs.QUESTION]: {
    name: 'Câu hỏi thường gặp',
    icon: <QuestionIcon width='25px' height='25px' />,
    type: TypeTabs.QUESTION,
  },
  [TypeTabs.LAWYER]: {
    name: 'Luật sư',
    icon: <LawyerIcon width='25px' height='25px' />,
    type: TypeTabs.LAWYER,
  },
  [TypeTabs.GROUP]: {
    name: 'Mọi người',
    icon: <GroupIcon width='30px' height='30px' />,
    type: TypeTabs.GROUP,
  },
};

function SearchSideBar({
  tabActive,
  onSetTabActive,
}: {
  tabActive: string;
  onSetTabActive: (value: TypeTabs) => void;
}) {
  // const [tabActive, setTabActive] = useState(TypeTabs.ALL);
  const searchParams = useSearchParams();
  const valueSearch = searchParams.get('search');

  const dataNavs = useMemo(() => {
    return {
      [TypeTabs.ALL]: {
        name: 'Tất cả',
        icon: (
          <AllIcon
            width='25px'
            height='25px'
            bgColor={tabActive === TypeTabs.ALL ? '#fff' : '#000'}
          />
        ),
        type: TypeTabs.ALL,
      },
      [TypeTabs.POST]: {
        name: 'Bài viết',
        icon: (
          <PostIcon
            width='25px'
            height='25px'
            bgColor={tabActive === TypeTabs.POST ? '#fff' : '#000'}
          />
        ),
        type: TypeTabs.POST,
      },
      [TypeTabs.PROCEDURE]: {
        name: 'Thủ tục pháp luật',
        icon: (
          <ProcedureIcon
            width='40px'
            height='40px'
            bgColor={tabActive === TypeTabs.PROCEDURE ? '#fff' : '#000'}
          />
        ),
        type: TypeTabs.PROCEDURE,
      },
      [TypeTabs.QUESTION]: {
        name: 'Câu hỏi thường gặp',
        icon: (
          <QuestionIcon
            width='25px'
            height='25px'
            bgColor={tabActive === TypeTabs.QUESTION ? '#fff' : '#000'}
          />
        ),
        type: TypeTabs.QUESTION,
      },
      [TypeTabs.LAWYER]: {
        name: 'Luật sư',
        icon: (
          <LawyerIcon
            width='25px'
            height='25px'
            bgColor={tabActive === TypeTabs.LAWYER ? '#fff' : '#000'}
          />
        ),
        type: TypeTabs.LAWYER,
      },
      [TypeTabs.GROUP]: {
        name: 'Mọi người',
        icon: (
          <GroupIcon
            width='30px'
            height='30px'
            bgColor={tabActive === TypeTabs.GROUP ? '#fff' : '#000'}
          />
        ),
        type: TypeTabs.GROUP,
      },
    };
  }, [tabActive]);

  return (
    <Sider
      width={300}
      style={{
        backgroundColor: '#fff',
      }}
      className='px-4 py-2 rounded-lg'
    >
      <div className='py-4 mb-4 border-b boder-slate-400'>
        <Typography.Title level={4}>Kết quả tìm kiếm</Typography.Title>
        <Input
          defaultValue={'x'}
          prefix={
            <Image
              src='/images/icons/search.png'
              alt='search-icon'
              width={20}
              height={20}
            />
          }
        />
      </div>
      <div>
        {Object.values(dataNavs).map((item) => (
          <div
            onClick={() => onSetTabActive(item.type)}
            key={item.name}
            className='flex items-center rounded-lg'
            style={{
              backgroundColor:
                tabActive === item.type ? 'var(--primary-color)' : '#fff',
              color: tabActive === item.type ? '#fff' : '#000',
            }}
          >
            <div className='w-14 flex justify-center py-2'>{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </Sider>
  );
}

export default SearchSideBar;
