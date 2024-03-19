"use client";

import { Button, Form, Input } from "antd";
import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";
import { useAppSelector } from "@/src/redux/hooks";

function Index() {
    const {user} = useAppSelector((state) => state.authState)
    const [form] = Form.useForm();

    return (
        <CanBackLayout back="/mobile/homepage/user" title="Sửa thông tin">
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
                            placeholder={user?.full_name}
                            style={{ backgroundColor: "#F4F5F8" }}
                        />
                    </Form.Item>

                    <Form.Item name="address" label="Địa chỉ">
                        <Input
                            size="large"
                            placeholder={user?.address}
                            style={{ backgroundColor: "#F4F5F8" }}
                        />
                    </Form.Item>

                    <Form.Item name="email" label="Email">
                        <Input
                            size="large"
                            placeholder={user?.email}
                            style={{ backgroundColor: "#F4F5F8" }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            className="top-[45vh] w-full font-medium"
                            style={{
                                height: "54px",
                                borderRadius: "40px",
                                color: 'white',
                                backgroundColor: 'var(--secondary-color)'
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
