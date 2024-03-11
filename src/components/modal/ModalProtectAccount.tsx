import { useAppSelector } from '@/src/redux/hooks';
import { Button, Input, Modal, ModalProps, Typography } from 'antd';
import moment from 'moment';
import { useState } from 'react';

function ModalProtectAccount(props: ModalProps) {
  const { open, onOk, onCancel } = props;
  const { user } = useAppSelector((state) => state.authState);
  const [identification, setIdentification] = useState(user?.cmnd ?? '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phone ?? '');

  const handlePostProtectAccount = async () => {};

  return (
    <Modal
      title='Bảo mật tài khoản'
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <div>
        <div>{moment().format('DD/MM/YYYY h:mm:ss')}</div>
        <Typography className='mb-4'>
          Để chống mọi rủi ro mất tài khoản hay lộ thông tin, bạn vui lòng cung
          cấp số CMND/CCCD/Hộ chiếu kèm Số điện thoại để kích hoạt tài khoản.
          Khi dùng số điện thoại này gọi tới tổng đài, bạn sẽ được yêu cầu lấy
          lại hoặc ngay lập tức khóa tài khoản.
        </Typography>
        <div className='mb-4'>
          <Typography.Title level={5}>Số CMND/CCCD/Hộ chiếu</Typography.Title>
          <Input
            value={identification}
            disabled={!!identification}
            onChange={(e) => setIdentification(e.target.value)}
            placeholder='Nhập số CMND/CCCD/Hộ chiếu'
          />
        </div>
        <div className='mb-4'>
          <Typography.Title level={5}>Số Điện thoại</Typography.Title>
          <Input
            value={phoneNumber}
            disabled={!!phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='Nhập số điện thoại'
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button size='large' className='button-primary'>
            Gửi yêu cầu
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalProtectAccount;
