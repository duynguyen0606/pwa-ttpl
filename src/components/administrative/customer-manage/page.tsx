import { Col, ConfigProvider, Row, Select } from 'antd';
import CustomerInfor from './CustomerInfor';
import { useMemo, useState } from 'react';
import CustomerFlow from './CustomerFlow';
import CustomerRecipe from './CustomerRecipe';
import CustomerSp from './CustomerSp';
import CustomerNote from './CustomerNote';
import CustomerDocument from './CustomerDocument';
import CustomerEvent from './CustomerEvent';
import CustomerPrice from './CustomerPrice';

enum TabSelection {
  CS_FLOW = 'customer_flow',
  CS_RECIPE = 'customer_recipe',
  CS_PRICE = 'customer_price',
  CS_SP = 'customer_support',
  CS_NOTE = 'customer_note',
  CS_DOCUMENT = 'customer_document',
  CS_EVENT = 'customer_event',
  CS_INFOR = 'customer_infor',
}

function CustomerManagement() {
  const [seletecTab, setSelectedTab] = useState('');
  const handleChange = (value: string) => {
    setSelectedTab(value);
  };

  const renderChild = useMemo(() => {
    switch (seletecTab) {
      case TabSelection.CS_FLOW:
        return <CustomerFlow />;
      case TabSelection.CS_RECIPE:
        return <CustomerRecipe />;
      case TabSelection.CS_SP:
        return <CustomerSp />;
      case TabSelection.CS_NOTE:
        return <CustomerNote />;
      case TabSelection.CS_DOCUMENT:
        return <CustomerDocument />;
      case TabSelection.CS_EVENT:
        return <CustomerEvent />;
      case TabSelection.CS_PRICE:
        return <CustomerPrice />;
      default:
        return <CustomerInfor />;
    }
  }, [seletecTab]);

  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <div className='bg-white p-4'>
            <div className='font-semibold border-b border-[#ccc] pb-2 mb-2'>
              Tất cả khách hàng
            </div>
            <div>
              <div
                className='p-2 rounded-lg text-white'
                style={{ backgroundColor: 'var(--primary-color)' }}
              >
                <div>Công ty B</div>
                <div>test@gmail.com</div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={18}>
          <div className='bg-white p-4'>
            <div
              className={`flex justify-between items-center p-4 text-white`}
              style={{ backgroundColor: 'var(--secondary-color)' }}
            >
              <Select
                defaultValue={TabSelection.CS_INFOR}
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: TabSelection.CS_INFOR, label: 'Thông tin' },
                  { value: TabSelection.CS_FLOW, label: 'Quy trình' },
                  { value: TabSelection.CS_RECIPE, label: 'Hoá đơn' },
                  { value: TabSelection.CS_PRICE, label: 'Báo giá' },
                  { value: TabSelection.CS_SP, label: 'Chăm sóc khách hàng' },
                  { value: TabSelection.CS_NOTE, label: 'Ghi chú cá nhân' },
                  { value: TabSelection.CS_DOCUMENT, label: 'Tài liệu' },
                  { value: TabSelection.CS_EVENT, label: 'Sự kiện' },
                ]}
              />

              <div>
                <div>Công ty B</div>
                <div>test@gmail.com</div>
              </div>
              <div>
                <div>Quy trình hoạt động</div>
                <div>1</div>
              </div>
              <div>
                <div>Giá trị hoá đơn</div>
                <div>0Đ</div>
              </div>
              <div>
                <div>Tất cả thanh toán</div>
                <div>0Đ</div>
              </div>
              <div>
                <div>Còn nợ</div>
                <div>0Đ</div>
              </div>
            </div>
            <div className='p-4'>{renderChild}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CustomerManagement;
