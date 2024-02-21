import { apiLogin } from '@/src/api/auth';
import {
  authLogin,
  setAuthLoading,
  setDataUser,
  setOpenModalLogin,
} from '@/src/redux/feature/authSlice';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import {
  App,
  Button,
  Form,
  Input,
  Modal,
  ModalProps,
  message,
  notification,
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';

type FormSubmitValueType = {
  email: string;
  password: string;
};

function ModalLogin(props: ModalProps) {
  const { onOk, onCancel } = props;
  const [form] = useForm();
  const dispatch = useAppDispatch();
  const { loading, user, openModalLogin, loginCode } = useAppSelector(
    (state) => state.authState
  );

  const handleSubmitForm = async (values: FormSubmitValueType) => {
    // dispatch(authLogin(values));
    const dataRes = await apiLogin(values);

    if (dataRes.status) {
      dispatch(setDataUser(dataRes?.data_user));
      message.success('Bạn đã đăng nhập thành công!');
      dispatch(setOpenModalLogin(false));
    } else {
      message.error('Bạn đã nhập sai tài khoản hoặc mật khẩu!');
    }
  };

  // useEffect(() => {
  //   if (loginCode == 1 && user) {
  //     message.success('Bạn đã đăng nhập thành công!');
  //     dispatch(setOpenModalLogin(false));
  //   } else if (loginCode == 0) {
  //   }
  // }, [user]);

  return (
    <Modal open={openModalLogin} onOk={onOk} onCancel={onCancel} footer={null}>
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
              className='button-primary'
              style={{
                width: '100%',
              }}
              htmlType='submit'
              size='large'
              loading={loading}
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
