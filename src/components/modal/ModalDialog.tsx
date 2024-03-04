import { Drawer, DrawerProps } from 'antd';
import Image from 'next/image';

function ModalDialog(props: DrawerProps) {
  const { open, onClose } = props;

  return (
    <Drawer
      open={open}
      onClose={onClose}
      closeIcon={null}
      placement='bottom'
      title='Bạn muốn truy cập vào Dashboard của công ty nào ?'
      className='rounded-t-[40px]'
    >
      <div className='flex items-center mb-4 text-base'>
        <Image
          className='mr-3 rounded-full'
          width={40}
          height={40}
          src='https://ttpl.vn/files/system/_file64b792e27abc0-site-logo.png'
          alt=''
        />
        <span>Công ty mẫu</span>
      </div>
    </Drawer>
  );
}

export default ModalDialog;
