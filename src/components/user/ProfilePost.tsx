import { Button, Col, Input, Row, Typography } from 'antd';
import Image from 'next/image';
import UserPost from '../common/home-page/UserPost';
import { useState } from 'react';
import ModalPost from '../modal/ModalPost';

function ProfilePost() {
  const [openModalPost, setOpenModalPost] = useState(false);
  return (
    <Row gutter={16}>
      <Col span={8}>
        <div className='mb-4 p-4 bg-white rounded-lg'>
          <Typography.Title level={5}>
            Tìm kiếm công ty Luật/ Doanh nghiệp
          </Typography.Title>
          <Input
            prefix={
              <Image
                src='/images/icons/search.png'
                alt='search'
                width={20}
                height={20}
              />
            }
            width={'100%'}
            placeholder='Tìm kiếm'
          />
        </div>
        <div className='mb-4 p-4 bg-white rounded-lg flex justify-between'>
          <div>
            <Typography.Title level={5}>Người theo dõi</Typography.Title>
            <div>0 người</div>
          </div>
          <Button type='text'>Xem tất cả</Button>
        </div>
        <div className='mb-4 p-4 bg-white rounded-lg flex justify-between'>
          <div>
            <Typography.Title level={5}>Đang theo dõi</Typography.Title>
            <div>0 người</div>
          </div>
          <Button type='text'>Xem tất cả</Button>
        </div>
      </Col>
      <Col span={16}>
        <div className='mb-4 p-4 bg-white'>
          <UserPost onOpenModal={() => true} />
        </div>
        <div className='p-4 bg-white rounded-lg'>
          Chưa có bài viết để hiển thị
        </div>
      </Col>
      <ModalPost
        open={openModalPost}
        onCancel={() => setOpenModalPost(false)}
      />
    </Row>
  );
}

export default ProfilePost;
