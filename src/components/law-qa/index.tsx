import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import {
  Button,
  Collapse,
  CollapseProps,
  Form,
  Input,
  Layout,
  Select,
} from 'antd';
import './style.scss';
import { Header } from '../common';
import { useMemo, useState } from 'react';

enum TypeQA {
  QA_FAQ = 1,
  QA_USER = 2,
  QA_FREE = 3,
  QA_VIP = 4,
}

const navbarArr = [
  { name: 'Danh sách câu hỏi', tabActive: 1 },
  { name: 'Đặt câu hỏi với luật sư', tabActive: 2 },
];
const items: CollapseProps['items'] = [
  {
    key: '1',
    label: (
      <div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
  {
    key: '2',
    label: (
      <div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
  {
    key: '3',
    label: (
      <div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
  {
    key: '4',
    label: (
      <div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
  {
    key: '5',
    label: (
      <div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
  {
    key: '6',
    label: (
      <div>
        <h2 className='qa-title'>Lĩnh vực khác</h2>
        <p className='qa-desc'>
          Quy định về các biện pháp làm việc với điện cao áp
        </p>
        <p className='qa-subdesc'>
          Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi
          làm việc với điện cao áp? Nhờ hỗ trợ.
        </p>
      </div>
    ),
    children: (
      <div className='qa-children'>
        <h2>Câu trả lời</h2>
        <p>
          Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc gia về an
          toàn điện QCVN 01:2020/BCT (Có hiệu lực từ 01/06/2021) quy định về các
          biện pháp làm việc với điện cao áp như sau: - Khi làm việc với điện
          cao áp như kiểm tra, sửa chữa và vệ sinh phần có điện hoặc sứ cách
          điện (vật liệu cách điện khác), nhân viên đơn vị công tác sử dụng các
          trang bị, dụng cụ cho làm việc có điện, trong trường hợp này khoảng
          cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu
          chưa được bọc cách điện) phải bảo đảm tương ứng theo cấp điện áp công
          tác của mạch điện quy định ở bảng sau: Cấp điện áp đường dây (kV)Từ 01
          đến 35 Khoảng cách cho phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0;
          220 là 2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng kim
          loại lên cột phải bảo đảm cho chúng không đến gần dây dẫn với khoảng
          quy định tại khoản 25.1. Trân trọng!
        </p>
      </div>
    ),
  },
];

function LawQuestion() {
  const [form] = Form.useForm();
  const [tabActive, setTabActive] = useState(1);
  const [childTabs, setChildTabs] = useState([
    {
      name: 'Câu hỏi FQA',
      tabActive: TypeQA.QA_FAQ,
    },
    {
      name: 'Câu hỏi người dùng',
      tabActive: TypeQA.QA_USER,
    },
  ]);
  const [childTabActive, setChildTabActive] = useState(TypeQA.QA_FAQ);
  const [childTabActive2, setChildTabActive2] = useState(TypeQA.QA_FREE);
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const handleChangeTabs = (tabActive: number) => {
    console.log(tabActive);

    setTabActive(tabActive);
    if (tabActive == 1) {
      setChildTabs([
        {
          name: 'Câu hỏi FAQ',
          tabActive: TypeQA.QA_FAQ,
        },
        {
          name: 'Câu hỏi người dùng',
          tabActive: TypeQA.QA_USER,
        },
      ]);
    } else {
      setChildTabs([
        {
          name: 'Đặt câu hỏi miễn phí',
          tabActive: TypeQA.QA_FREE,
        },
        {
          name: 'Đặt câu hỏi VIP',
          tabActive: TypeQA.QA_VIP,
        },
      ]);
    }
  };

  const renderIcon = (isActive?: boolean) => {
    return (
      <div
        className='rounded-full p-1 overflow-hidden'
        style={{ backgroundColor: 'var(--primary-color)' }}
      >
        <Image
          src={!!isActive ? '/images/icons/up.png' : '/images/icons/down.png'}
          alt='expand icon'
          width={20}
          height={20}
        />
      </div>
    );
  };

  const renderContent = useMemo(() => {
    console.log(tabActive, childTabActive, childTabActive2);

    if (tabActive == 1) {
      switch (childTabActive) {
        case TypeQA.QA_FAQ:
          return (
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => renderIcon(isActive)}
              expandIconPosition='end'
              items={items}
              onChange={onChange}
            />
          );
        case TypeQA.QA_USER:
          return (
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => renderIcon(isActive)}
              expandIconPosition='end'
              items={items}
              onChange={onChange}
            />
          );
      }
    } else {
      switch (childTabActive2) {
        case TypeQA.QA_FREE:
          return (
            <div className='w-1/2 m-auto'>
              <Form
                form={form}
                name='validateOnly'
                layout='vertical'
                autoComplete='off'
              >
                <Form.Item
                  name='title'
                  label='Tiêu đề câu hỏi'
                  rules={[{ required: true }]}
                >
                  <Input size='large' />
                </Form.Item>
                <Form.Item
                  name='content'
                  label='Nội dung câu hỏi'
                  rules={[{ required: true }]}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  name='major'
                  label='Lĩnh vực quan tâm'
                  rules={[{ required: true }]}
                >
                  <Select
                    size='large'
                    defaultValue='lucy'
                    options={[
                      { value: 'jack', label: 'Jack' },
                      { value: 'lucy', label: 'Lucy' },
                      {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                      },
                      {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  name='address'
                  label='Bạn muốn tìm luật sư ở khu vực nào'
                  rules={[{ required: true }]}
                >
                  <Select
                    size='large'
                    defaultValue='lucy'
                    options={[
                      { value: 'jack', label: 'Jack' },
                      { value: 'lucy', label: 'Lucy' },
                      {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                      },
                      {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item>
                  <div className='flex items-center flex-col gap-4'>
                    <Button
                      className='button-primary'
                      style={{
                        width: 200,
                      }}
                      size='large'
                    >
                      Gửi câu hỏi
                    </Button>
                    <Button
                      className='button-primary'
                      style={{
                        width: 200,
                      }}
                      size='large'
                    >
                      Hướng dẫn sử dụng
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          );
        case TypeQA.QA_VIP:
          return (
            <div>
              <div className='relative' style={{ paddingTop: '62.5%' }}>
                <ImageLegacy
                  src='https://ttpl.vn/assets/images/icon/icon_nang_cap.png'
                  alt='upgrade'
                  layout='fill'
                  className='absolute'
                />
              </div>
              <div className='text-center my-4'>
                <p>Bạn vui lòng nâng cấp tài khoản để sử dụng tính năng này!</p>
                <Button
                  size='large'
                  className='button-primary'
                  style={{
                    margin: 16,
                  }}
                >
                  Nâng cấp tài khoản
                </Button>
              </div>
            </div>
          );
      }
    }
  }, [childTabActive, tabActive, childTabActive2]);
  return (
    <Layout>
      <Header />
      <div
        className='relative law-qa-banner mt-20'
        style={{ paddingTop: '37.5%' }}
      >
        <ImageLegacy
          src='https://ttpl.vn/assets/images/banner/banner_QA.png.webp'
          layout='fill'
          objectFit='cover'
          className='absolute'
        />
        <div
          className='absolute top-1/2 right-1/2 text-white text-center z-10'
          style={{ transform: 'translate(50%, -50%)' }}
        >
          <p className='text-5xl'>Đặt câu hỏi với luật sư</p>
          <h2 className='uppercase text-6xl font-semibold pt-4'>Miễn phí</h2>
        </div>
      </div>
      <div className='mt-4 w-3/4 m-auto bg-white rounded-lg'>
        <div className='flex rounded-t-xl overflow-hidden'>
          {navbarArr.map((item) => (
            <nav
              key={item.name}
              className='flex justify-center text-xl font-semibold py-4 px-10 flex-1'
              onClick={() => handleChangeTabs(item.tabActive)}
              style={{
                color: tabActive === item.tabActive ? '#fff' : '#444',
                backgroundColor:
                  tabActive === item.tabActive ? '#4262AE' : '#fff',
              }}
            >
              {item.name}
            </nav>
          ))}
        </div>
        <div className='flex'>
          {childTabs.map((item) => (
            <nav
              key={item.name}
              className='flex justify-center text-xl font-semibold py-4 px-10 flex-1'
              onClick={() => {
                console.log('hgdfhfhs', item.tabActive);
                tabActive === 1
                  ? setChildTabActive(item.tabActive)
                  : setChildTabActive2(item.tabActive);
              }}
              style={{
                color:
                  childTabActive === item.tabActive ||
                  childTabActive2 === item.tabActive
                    ? 'var(--primary-color)'
                    : '#A1A5AC',
                borderBottom: '4px solid #ccc',
                borderColor:
                  childTabActive === item.tabActive ||
                  childTabActive2 === item.tabActive
                    ? 'var(--primary-color)'
                    : '#ccc',
              }}
            >
              {item.name}
            </nav>
          ))}
        </div>
        <div className='flex justify-center p-4'>
          <Input
            placeholder='Tìm kiếm'
            size='large'
            style={{ width: '50%' }}
            prefix={
              <Image
                src='/images/icons/search.png'
                alt='search-icon'
                width={20}
                height={20}
              />
            }
            alt='search-icon'
            width={20}
            height={20}
          />
        </div>
        <div className='qa-list p-4'>{renderContent}</div>
      </div>
    </Layout>
  );
}

export default LawQuestion;
