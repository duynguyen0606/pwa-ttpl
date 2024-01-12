import { Modal, ModalProps } from 'antd';
import Image from 'next/legacy/image';

function ModalMarketing(props: ModalProps) {
  const { open, onCancel, onOk } = props;
  return (
    <Modal
      width={'80%'}
      closeIcon={null}
      footer={null}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      <div>
        {Array.from(Array(15).keys()).map((item) => (
          <div className='relative'>
            <Image
              src={
                item + 1 < 10
                  ? `https://ttpl.vn/assets/images/profile-mkt-DN/profile-mkt-DN-0${
                      item + 1
                    }.png`
                  : `https://ttpl.vn/assets/images/profile-mkt-DN/profile-mkt-DN-${
                      item + 1
                    }.png`
              }
              layout='responsive'
              alt='profile marketing'
              width={1654}
              height={2339}
            />
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default ModalMarketing;
