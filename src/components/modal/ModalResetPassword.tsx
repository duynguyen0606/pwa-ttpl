import { apiResetPassword } from '@/src/api/auth';
import { setOpenModalResetPassword } from '@/src/redux/feature/authSlice';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { useMobileClient } from '@/src/utils/hook';
import { Button, Form, Input, Modal, ModalProps, notification } from 'antd';
import { useForm } from 'antd/es/form/Form';

function ModalResetPassword(props: ModalProps) {
  const { onOk, onCancel } = props;
  const [form] = useForm();
  const dispatch = useAppDispatch();
  const { openModalResetPassword } = useAppSelector((state) => state.authState);
  const isMobileClient = useMobileClient()
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.success({
      message: 'Bạn đã đổi mật khẩu thành công!',
    });
  };

  const handleSubmitForm = async (values: {
    email: string;
    newPassword: string;
    confirmNewPassword: string;
    otp: string;
  }) => {
    const dataRes = await apiResetPassword({
      email: values.email,
      otp: values.otp,
      newPassword: values.confirmNewPassword,
    });

    if (dataRes.status) {
      openNotification();
      dispatch(setOpenModalResetPassword(false));
      form.resetFields();
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={openModalResetPassword}
        onOk={onOk}
        onCancel={onCancel}
        footer={null}
      >
        <div className='p-4'>
          <div className={`font-semibold ${isMobileClient ? 'text-base' : 'text-2xl'} uppercase py-4 text-center`}>
            Đổi mật khẩu
          </div>
          <Form
            onFinish={(values) => handleSubmitForm(values)}
            form={form}
            layout='vertical'
          >
            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Bạn phải nhập trường này!',
                },
              ]}
              hasFeedback
            >
              <Input placeholder='Nhập email' />
            </Form.Item>
            <Form.Item
              name='newPassword'
              rules={[
                {
                  required: true,
                  message: 'Bạn phải nhập trường này!',
                },
                { min: 6, message: 'Bạn phải nhập ít nhất 6 ký tự' },
              ]}
              hasFeedback
            >
              <Input.Password
                size='large'
                placeholder='Nhập mật khẩu mới'
                type='password'
              />
            </Form.Item>
            <Form.Item
              name='confirmNewPassword'
              dependencies={['newPassword']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Bạn phải nhập trường này!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('Nhập lại mật khẩu không chính xác!')
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                size='large'
                placeholder='Nhập lại mật khẩu mới'
                type='password'
              />
            </Form.Item>
            <Form.Item
              name='otp'
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Bạn phải nhập trường này!',
                },
              ]}
            >
              <Input
                size='large'
                placeholder='Mã OTP (được gửi đến email của bạn) '
              />
            </Form.Item>
            <Form.Item>
              <Button
                className='mt-4'
                style={{
                  width: '100%',
                  color: 'white',
                  backgroundColor: isMobileClient ? 'var(--secondary-color)' : 'var(--primary-color)',
                  border: 'none',
                }}
                htmlType='submit'
                size='large'
              >
                Đổi mật khẩu
              </Button>
              {/* <div className='text-center text-base pt-4'>
              Bạn chưa có tài khoản?
              <Button
                size='large'
                style={{ color: 'var(--primary-color)' }}
                type='link'
                onClick={() => {
                  dispatch(setOpenModalLogin(false));
                  dispatch(setOpenModalRegister(true));
                }}
              >
                Đăng ký
              </Button>
            </div> */}
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default ModalResetPassword;
