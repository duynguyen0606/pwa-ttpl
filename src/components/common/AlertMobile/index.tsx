import { Drawer, DrawerProps } from 'antd';

function AlertMobile(props: DrawerProps & { handleTransformView: () => void }) {
  const { open, onClose, handleTransformView } = props;
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
        <span onClick={handleTransformView} className='text-red-500 cursor-pointer'>
          Mobile
        </span>{' '}
        để hiển thị bản tối ưu hoá hơn
      </span>
    </Drawer>
  );
}

export default AlertMobile;
