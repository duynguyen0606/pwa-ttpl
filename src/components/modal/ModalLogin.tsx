import { apiLogin } from '@/src/api/auth';
import { authLogin } from '@/src/redux/feature/authSlice';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { Button, Form, Input, Modal, ModalProps } from 'antd';
import { useForm } from 'antd/es/form/Form';

type FormSubmitValueType = {
  email: string;
  password: string;
};

function ModalLogin(props: ModalProps) {
  const { open, onOk, onCancel } = props;
  const [form] = useForm();
  const dispatch = useAppDispatch();
  const handleSubmitForm = async (values: FormSubmitValueType) => {
    dispatch(authLogin(values));
  };

  const { user } = useAppSelector((state) => state.authState);
  console.log(user);

  return (
    <Modal open={open} onOk={onOk} onCancel={onCancel} footer={null}>
      <div className='p-4'>
        <div className='font-semibold text-2xl uppercase py-4 text-center'>
          Đăng nhập
        </div>
        <Form
          onFinish={(values) => handleSubmitForm(values)}
          form={form}
          layout='vertical'
        >
          <Form.Item name='email' required tooltip='This is a required field'>
            <Input size='large' placeholder='Email' />
          </Form.Item>
          <Form.Item
            name='password'
            required
            tooltip='This is a required field'
          >
            <Input.Password
              size='large'
              placeholder='Password'
              type='password'
            />
          </Form.Item>
          <div className='text-right'>
            <Button type='link'>Quên mật khẩu ?</Button>
          </div>
          <Form.Item>
            <Button
              style={{
                backgroundColor: 'var(--primary-color)',
                color: '#fff',
                border: 'none',
                width: '100%',
              }}
              htmlType='submit'
              size='large'
            >
              Đăng nhập
            </Button>
            <div className='text-center text-base pt-4'>
              Bạn chưa có tài khoản?
              <Button
                size='large'
                style={{ color: 'var(--primary-color)' }}
                type='link'
              >
                Đăng ký
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

export default ModalLogin;
