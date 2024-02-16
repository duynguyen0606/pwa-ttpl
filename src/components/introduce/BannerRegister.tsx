import { Button, Col, Form, Input, Row, Space } from 'antd';
import { useForm } from 'antd/es/form/Form';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function BannerRegister() {
  const [form] = useForm();
  const [isMobileClient, setIsMobileClient] = useState(false);
  const isMobileUI = useMediaQuery({
    query: '(max-width: 600px)',
  });

  useEffect(() => {
    setIsMobileClient(isMobileUI);
  }, [isMobileUI]);

  return (
    <div id='dang-ky' className='relative banner-register'>
      <div className='relative w-1/2 ml-auto' style={{ paddingTop: '62.5%' }}>
        <ImageLegacy
          layout='fill'
          alt='vector'
          src='/images/introduce/vector.png'
          className='absolute'
        />
      </div>
      <div
        className={`absolute bg-white p-10 rounded-lg ${
          isMobileClient ? 'bottom-0 w-11/12' : 'bottom-1/2 w-4/5'
        } right-1/2 translate-x-1/2 translate-y-1/2`}
      >
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Image
              src='/images/introduce/register-banner.png'
              alt='register-banner'
              width={549}
              height={248}
            />
          </Col>
          <Col span={16}>
            <div className='text-base mb-4'>
              <span className='text-xl font-semibold'>
                Tra cứu thủ tục pháp luật MIỄN PHÍ
              </span>
              &nbsp; ngay hôm nay bằng cách đăng ký các thông tin dưới đây:
            </div>
            <div>
              <Form
                form={form}
                layout='vertical'
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete='off'
              >
                <Row gutter={[12, 12]}>
                  <Col span={12}>
                    <Form.Item name='name' label='Họ và tên'>
                      <Input width={'100%'} placeholder='Nhập họ và tên' />
                    </Form.Item>
                    <Form.Item name='phoneNumber' label='Số điện thoại'>
                      <Input placeholder='Nhập số điện thoại' />
                    </Form.Item>
                    <Form.Item name='country' label='Tỉnh/ thành phố'>
                      <Input placeholder='Nhập tỉnh thành phố' />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name='email' label='Email'>
                      <Input placeholder='Nhập email' />
                    </Form.Item>
                    <Form.Item name='companyName' label='Tên công ty'>
                      <Input placeholder='Nhập tên công ty' />
                    </Form.Item>
                    <Form.Item name='numberPeople' label='Quy mô nhân sự'>
                      <Input placeholder='Nhập quy mô nhân sự' />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  <Button
                    style={{
                      color: '#fff',
                      backgroundColor: 'var(--primary-color)',
                      border: 'unset',
                    }}
                    htmlType='submit'
                  >
                    Đăng ký ngay
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BannerRegister;
