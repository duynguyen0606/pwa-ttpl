import { Modal, ModalProps } from 'antd';
import Search from 'antd/es/input/Search';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function ModalSearch(props: ModalProps) {
  const { open, onOk, onCancel } = props;
  const router = useRouter();
  const [value, setValue] = useState('');
  return (
    <Modal
      title='Tìm kiếm thủ tục pháp luật'
      open={open}
      onOk={() => {
        router.push(`/tim-kiem?search=${value}`);
        onCancel;
      }}
      onCancel={onCancel}
    >
      <Search
        onChange={(e) => setValue(e.target.value)}
        placeholder='Tìm kiếm ....'
        allowClear
        size='large'
      />
    </Modal>
  );
}

export default ModalSearch;
