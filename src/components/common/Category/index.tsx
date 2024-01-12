import { Input } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Image from 'next/image';

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
      <ul className='overflow-auto'>
        {dataArr.map((item, id) => (
          <li
            key={id}
            className='flex p-4 gap-2 text-base border-b-[1px] border-solid border-slate-100'
          >
            <Image src={item.image} alt={item.alt} width={40} height={40} />
            <div>Bộ luật dân sự</div>
          </li>
        ))}
      </ul>
    </Sider>
  );
}

export default Category;
