"use client";

import { Button, Form, Input } from "antd";
import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";

function Index() {
    const [form] = Form.useForm();

    return (
        <CanBackLayout back="/mobile/my-profile" title="Sửa thông tin">
            {/* content */}
            <div className="px-5 py-7">
                <Form
                    form={form}
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item name="fullname" label="Họ và tên">
                        <Input
                            size="large"
                            placeholder="Họ và tên"
                            style={{ backgroundColor: "#F4F5F8" }}
                        />
                    </Form.Item>

                    <Form.Item name="address" label="Địa chỉ">
                        <Input
                            size="large"
                            placeholder="Địa chỉ"
                            style={{ backgroundColor: "#F4F5F8" }}
                        />
                    </Form.Item>

                    <Form.Item name="email" label="Email">
                        <Input
                            size="large"
                            placeholder="Email"
                            style={{ backgroundColor: "#F4F5F8" }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            className="top-[45vh] w-full font-medium text-white bg-[#4755D4]"
                            style={{
                                height: "54px",
                                borderRadius: "40px",
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
