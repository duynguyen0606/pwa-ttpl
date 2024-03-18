import { Drawer, DrawerProps } from 'antd';
import { useRouter } from 'next/navigation';

function AlertMobile(
  props: DrawerProps & { handleTransformView?: () => void }
) {
  const { open, onClose, handleTransformView } = props;
  const router = useRouter();
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
        <span
          onClick={() => router.push('/mobile')}
          className='text-red-500 cursor-pointer'
        >
          Mobile
        </span>{' '}
        để hiển thị bản tối ưu hoá hơn
      </span>
    </Drawer>
  );
}

export default AlertMobile;
