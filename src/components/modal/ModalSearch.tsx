import { Modal, ModalProps } from 'antd';
import Search from 'antd/es/input/Search';

function ModalSearch(props: ModalProps) {
  const { open, onOk, onCancel } = props;
  return (
    <Modal
      title='Tìm kiếm thủ tục pháp luật'
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Search placeholder='Tìm kiếm ....' allowClear size='large' />
    </Modal>
  );
}

export default ModalSearch;
