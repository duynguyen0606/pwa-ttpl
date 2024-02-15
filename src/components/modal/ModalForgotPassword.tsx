import { Button, Form, Input, Modal, ModalProps } from "antd";
import { useForm } from "antd/es/form/Form";

function ModalForgotPassword(props: ModalProps) {
    const { open, onCancel } = props;
    const [form] = useForm();

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            footer={null}
            // closeIcon={
            //     <button className='w-7 h-7 rounded-full bg-[#f6f6fd]'>
            //         <img src="https://ttpl.vn/assets/images/mobile/type-back-login.png" alt="" />
            //     </button>
            // }
        >
            <div>
                <div className="flex flex-col items-center justify-center pb-2 pt-5">
                    <h3 className="text-base font-bold uppercase pb-1">
                        Quên mật khẩu
                    </h3>
                    <h4 className="py-1 text-xs">
                        Điền email của bạn để xác nhận đặt lại mật khẩu
                    </h4>
                </div>

                <Form form={form} layout="vertical">
                    <Form.Item name="email">
                        <Input
                            style={{
                                backgroundColor: "#F4F5F8",
                                border: "none",
                            }}
                            size="large"
                            placeholder="Email"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            style={{
                                backgroundColor: "#4755D4",
                                color: "#fff",
                                border: "none",
                                width: "100%",
                                borderRadius: "20px",
                                fontWeight: 600,
                            }}
                            htmlType="submit"
                            size="large"
                        >
                            Xác nhận
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
}

export default ModalForgotPassword;
