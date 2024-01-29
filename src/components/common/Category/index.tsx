import { apiGetListCategory } from '@/src/api/home-page';
import CategoryModel from '@/src/models/Category';
import { useAppDispatch } from '@/src/redux/hooks';
import { Input, Pagination } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import { useEffect, useState } from 'react';
import './style.scss';

const dataArr = [
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
  {
    image: 'https://ttpl.vn/files/category/_11_16_2022_112413.webp',
    alt: 'xxx',
  },
];

function Category() {
  // const listCategories = useAppSelector(
  //   (state) => state.categoriesState.listCategory
  // );
  const [listCate, setListCate] = useState<Array<CategoryModel>>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async () => {
      const cateRes = await apiGetListCategory({ page });
      if (cateRes.status && cateRes.data.length > 0) {
        setTotal(cateRes.count_record);
        setPage(Number(cateRes.page));
        setListCate(cateRes.data);
      }
    })();
  }, [page]);

  return (
    <Sider
      width={300}
      style={{
        backgroundColor: '#fff',
        position: 'sticky',
        overflow: 'auto',
        height: '80vh',
      }}
      className='px-4 py-2 rounded-lg'
    >
      <div className='font-semibold pb-2 text-lg'>Danh mục</div>
      <div>
        <Input
          placeholder='Tìm kiếm'
          prefix={
            <Image
              src='/images/icons/search.png'
              alt='search'
              width={20}
              height={20}
            />
          }
        />
      </div>
      <ul className='overflow-auto list-categories'>
        {total > 0 &&
          listCate?.map((item, id) => (
            <li
              key={item.id}
              className='flex items-center p-4 gap-2 text-base border-b-[1px] border-solid border-slate-100'
            >
              <div className='min-w-10'>
                <ImageLegacy
                  src={`${item.images}`}
                  alt='danh mục'
                  width={40}
                  height={40}
                  layout='responsive'
                  objectFit='cover'
                />
              </div>
              <div className='dot-1 category-name'>{item.name}</div>
            </li>
          ))}
      </ul>
      {total > 0 && (
        <div className='py-4 text-center'>
          <Pagination
            size='small'
            onChange={(page) => setPage(page)}
            current={page}
            total={total}
            showSizeChanger={false}
          />
        </div>
      )}
    </Sider>
  );
}

export default Category;
