import { Drawer, DrawerProps } from 'antd';

function AlertMobile(props: DrawerProps) {
  const { open, onClose } = props;
  return (
    <Drawer
      placement='bottom'
      width={'100%'}
      height={150}
      onClose={onClose}
      open={open}
    >
      <span className='font-semibold'>
        Bạn đang sử dụng thiết bị di động, chọn{' '}
        <span className='text-red-500'>Mobile</span> để hiển thị bản tối ưu hoá
        hơn
      </span>
    </Drawer>
  );
}

export default AlertMobile;
