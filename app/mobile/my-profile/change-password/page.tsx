"use client";

import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";
import { Form, Input, Button } from "antd";

function Index() {
    const [form] = Form.useForm();

    return (
        <CanBackLayout back="/mobile/my-profile" title="Đổi mật khẩu">
            <div className="px-5 py-7">
                <Form
                    form={form}
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item name="password" label="Mật khẩu cũ">
                        <Input.Password
                            size="large"
                            type="password"
                            placeholder="Mật khẩu cũ"
                            // style={{ backgroundColor: "#F4F5F8" }}
                        />
                    </Form.Item>

                    <Form.Item name="new-password" label="Mật khẩu mới">
                        <Input.Password
                            size="large"
                            placeholder="Mật khẩu mới"
                            // style={{ backgroundColor: "#F4F5F8" }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm-password"
                        label="Nhập lại mật khẩu"
                    >
                        <Input.Password
                            size="large"
                            placeholder="Nhập lại mật khẩu"
                            // style={{ backgroundColor: "#F4F5F8" }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            style={{
                                height: "54px",
                                borderRadius: "40px",
                                color: "white",
                                backgroundColor: "var(--secondary-color)",
                                fontWeight: "500",
                                width: "100%",
                                top: "45vh",
                            }}
                            size="large"
                        >
                            Lưu
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </CanBackLayout>
    );
}

export default Index;
