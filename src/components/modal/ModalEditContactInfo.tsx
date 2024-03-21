import { useAppSelector } from "@/src/redux/hooks";
import { Button, Form, Input, Modal, ModalProps } from "antd";
import { useMemo } from "react";

function ModalEditContactInfo(props: ModalProps) {
    const { open, onCancel } = props;
    const { TextArea } = Input;
    const [form] = Form.useForm();
    const { user } = useAppSelector((state) => state.authState);

    const dataForm = useMemo(() => {
        switch (user?.user_type) {
            case "company":
                return (
                    <div>
                        <Form.Item name="phone" label="Điện thoại">
                            <Input
                                placeholder="Nhập điện thoại"
                                defaultValue={user?.phone}
                            />
                        </Form.Item>
                        <Form.Item name="alternative_phone" label="Di động">
                            <Input
                                placeholder="Nhập di động"
                                defaultValue={user?.alternative_phone}
                            />
                        </Form.Item>
                        <Form.Item name="email" label="Email">
                            <Input
                                placeholder="Nhập email"
                                defaultValue={user?.email}
                            />
                        </Form.Item>
                        <Form.Item name="address" label="Địa chỉ">
                            <TextArea
                                variant="filled"
                                placeholder="Nhập địa chỉ"
                                defaultValue={user?.address}
                                style={{ height: 120, resize: "none" }}
                            />
                        </Form.Item>
                    </div>
                );

            case "enterprise":
                return (
                    <div>
                        <Form.Item name="address" label="Địa chỉ">
                            <TextArea
                                variant="filled"
                                placeholder="Nhập địa chỉ"
                                defaultValue={user?.address}
                                style={{ height: 120, resize: "none" }}
                            />
                        </Form.Item>
                        <Form.Item name="phone" label="Điện thoại">
                            <Input
                                placeholder="Nhập điện thoại"
                                defaultValue={user?.phone}
                            />
                        </Form.Item>
                        <Form.Item name="alternative_phone" label="Fax">
                            <Input
                                placeholder="Nhập fax"
                                defaultValue={user?.alternative_phone}
                            />
                        </Form.Item>
                        <Form.Item name="email" label="Email">
                            <Input
                                placeholder="Nhập email"
                                defaultValue={user?.email}
                            />
                        </Form.Item>
                        <Form.Item name="website" label="Website">
                            <Input
                                placeholder="Nhập website"
                                defaultValue={user?.website}
                            />
                        </Form.Item>
                    </div>
                );
        }
    }, [user?.user_type]);

    return (
        <Modal open={open} onCancel={onCancel} footer={null}>
            <Form
                form={form}
                layout="vertical"
                onFinish={(values) => console.log(values)}
            >
                <p className="mb-8 text-2xl font-semibold">
                    Chỉnh sửa thông tin liên hệ
                </p>
                {dataForm}
                <div className="flex items-center justify-center mt-4">
                    <button
                        className="rounded px-4 py-2 mx-2 font-semibold text-black bg-[#F7F7F7]"
                        onClick={onCancel}
                    >
                        Hủy
                    </button>
                    <button
                        className="rounded px-4 py-2 mx-2 font-semibold text-white bg-[#F58533]"
                        type="submit"
                    >
                        Lưu
                    </button>
                </div>
            </Form>
        </Modal>
    );
}

export default ModalEditContactInfo;
