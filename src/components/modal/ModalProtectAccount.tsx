import { Button, Input, Modal, ModalProps, Typography } from 'antd';

function ModalProtectAccount(props: ModalProps) {
  const { open, onOk, onCancel } = props;
  return (
    <Modal
      title='Bảo mật tài khoản'
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <div>
        <Typography className='mb-4'>
          Để chống mọi rủi ro mất tài khoản hay lộ thông tin, bạn vui lòng cung
          cấp số CMND/CCCD/Hộ chiếu kèm Số điện thoại để kích hoạt tài khoản.
          Khi dùng số điện thoại này gọi tới tổng đài, bạn sẽ được yêu cầu lấy
          lại hoặc ngay lập tức khóa tài khoản.
        </Typography>
        <div className='mb-4'>
          <Typography.Title level={5}>Số CMND/CCCD/Hộ chiếu</Typography.Title>
          <Input placeholder='Nhập số CMND/CCCD/Hộ chiếu' />
        </div>
        <div className='mb-4'>
          <Typography.Title level={5}>Số Điện thoại</Typography.Title>
          <Input placeholder='Nhập số điện thoại' />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button
            size='large'
            style={{ backgroundColor: 'var(--primary-color)', color: '#fff' }}
          >
            Gửi yêu cầu
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalProtectAccount;