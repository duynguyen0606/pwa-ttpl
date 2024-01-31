import { Button, Form, Input, Modal, ModalProps } from 'antd';
import { useForm } from 'antd/es/form/Form';

function ModalForgotPassword(props: ModalProps) {
    const {open, onCancel} = props;
    const [form] = useForm();

    return (
        <Modal open={open} onCancel={onCancel} footer={null}>
            <div className=''>
                <div className='flex flex-col items-center justify-center py-2'>
                    <h3 className='text-base font-bold uppercase pb-1'>Quên mật khẩu</h3>
                    <h4 className='py-1'>Điền email của bạn để xác nhận đặt lại mật khẩu</h4>
                </div>

                <Form
                    form={form}
                    layout='vertical'
                >
                    <Form.Item name='email'>
                        <Input size='large' placeholder='Email' />
                    </Form.Item>

                    <Form.Item>
                        <Button style={{
                            backgroundColor: '#4755D4',
                            color: '#fff',
                            border: 'none',
                            width: '100%',
                            borderRadius: '8px',
                        }} 
                        htmlType='submit' 
                        size='large'
                        >
                            Xác nhận
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}

export default ModalForgotPassword;
