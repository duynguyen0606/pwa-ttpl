"use client";

import { Form, Input } from "antd";

function LawEnterpriseSendEmail() {
    const { TextArea } = Input;
    const [form] = Form.useForm();

    return (
        <div className="mb-4 p-4 bg-white rounded-lg">
            <Form
                form={form}
                layout="vertical"
                labelCol={{ className: "font-semibold" }}
            >
                <Form.Item label="Email của bạn">
                    <Input size="large" placeholder="Nhập email" />
                </Form.Item>

                <Form.Item label="Nội dung email">
                    <Input size="large" placeholder="Tiêu đề" />
                    <TextArea
                        variant="filled"
                        style={{ height: 120, marginTop: 4 }}
                        placeholder="Nhập nội dung"
                    />
                </Form.Item>

                <Form.Item
                    required
                    label="Mời bạn để lại Tên và Số điện thoại để tiện cho việc liên lạc"
                >
                    <Form.Item
                        label="Họ và tên"
                        labelCol={{ className: "font-semibold" }}
                    >
                        <Input size="large" placeholder="Nhập họ và tên" />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        labelCol={{ className: "font-semibold" }}
                    >
                        <Input size="large" placeholder="0987654321" />
                    </Form.Item>
                </Form.Item>

                <Form.Item className="flex justify-center">
                    <button
                        className="button-primary text-base px-4 py-3 rounded"
                        type="submit"
                    >
                        Gửi email
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LawEnterpriseSendEmail;
