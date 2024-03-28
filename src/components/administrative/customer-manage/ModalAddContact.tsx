import { Checkbox, Col, Form, Input, Modal, ModalProps, Radio, Row } from 'antd';

function ModalAddContact(props: ModalProps) {
  const { open, onOk, onCancel } = props;
  return (
    <Modal onCancel={onCancel} open={open} title='Thêm liên lạc thông tin'>
      <Form layout='vertical'>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label='Họ'>
              <Input placeholder='Họ' />
            </Form.Item>
            <Form.Item label='Email'>
              <Input placeholder='Email' />
            </Form.Item>
            <Form.Item label='Skype'>
              <Input placeholder='Skype' />
            </Form.Item>
            <Form.Item label='Mật khẩu'>
              <Input placeholder='Mật khẩu' />
            </Form.Item>
            <Form.Item label='Giới tính'>
              <Radio.Group>
                <Radio value='men'> Nam </Radio>
                <Radio value='female'> Nữ </Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Tên'>
              <Input placeholder='Tên' />
            </Form.Item>
            <Form.Item label='Số điện thoại'>
              <Input placeholder='Số điện thoại' />
            </Form.Item>
            <Form.Item label='Vị trí công việc'>
              <Input placeholder='Vị trí công việc' />
            </Form.Item>
            <Form.Item label='Nhập lại mật khẩu'>
              <Input placeholder='Nhập lại mật khẩu' />
            </Form.Item>
            <Form.Item label='Gửi chi tiết đăng nhập qua email cho người dùng này'>
              <Checkbox value='men' defaultChecked />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default ModalAddContact;
