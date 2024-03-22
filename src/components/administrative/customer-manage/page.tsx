import { Col, Row } from 'antd';
import CustomerInfor from './CustomerInfor';

function CustomerManagement() {
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
              <div>Thông tin</div>
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
            <div>
              <CustomerInfor />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CustomerManagement;
