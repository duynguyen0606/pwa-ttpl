"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form, Input, message } from "antd";

import { apiLogin } from "@/src/api/auth";
import {
    setDataUser,
    setOpenModalForgotPassword,
    setOpenModalRegister,
} from "@/src/redux/feature/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { ModalForgotPassword, ModalRegister } from "@/src/components/modal";

type FormSubmitValueType = {
    email: string;
    password: string;
};

function Index() {
    const router = useRouter();

    const dispatch = useAppDispatch();
    const { loading, user, loginCode } = useAppSelector(
        (state) => state.authState
    );

    const [form] = Form.useForm();
    const handleSubmitForm = async (values: FormSubmitValueType) => {
        const dataRes = await apiLogin(values);
        if (dataRes.status) {
            dispatch(setDataUser(dataRes?.data_user));

            message.success("Bạn đã đăng nhập thành công!");

            router.push("/mobile");
        } else {
            message.error("Bạn đã nhập sai tài khoản hoặc mật khẩu!");
        }
    };

    return (
        <div className="relative">
            <div className=" pt-3 pl-[11px] pl-0 pb-2">
                <Link href="/mobile">
                    <img
                        className="p-0.5 bg-[#EDEEFA] rounded-full"
                        src="/images/icons/left-arrow.png"
                        width={26}
                    />
                </Link>
            </div>

            <div className="f-1 p-[15px]">
                {/* form login */}
                <Form
                    onFinish={(values) => handleSubmitForm(values)}
                    form={form}
                >
                    {/* Title form */}
                    <h2 className="text-3xl text-[#262C41] font-semibold my-5">
                        Đăng nhập
                    </h2>

                    <Form.Item
                        name="email"
                        label="Email/Số điện thoại"
                        style={{ marginBottom: 12 }}
                    >
                        <Input
                            size="large"
                            placeholder="Email"
                            style={{ height: 48 }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Mật khẩu"
                        style={{ marginBottom: 0 }}
                    >
                        <Input.Password
                            size="large"
                            placeholder="Mật khẩu"
                            style={{ height: 48 }}
                        />
                    </Form.Item>

                    <div className="text-end text-sm text-[#4755D4] pt-1">
                        <span
                            onClick={() =>
                                dispatch(setOpenModalForgotPassword(true))
                            }
                        >
                            Quên mật khẩu ?
                        </span>
                    </div>

                    <Form.Item>
                        <Button
                            size="large"
                            htmlType="submit"
                            style={{
                                width: "100%",
                                height: 54,
                                color: "#FFF",
                                backgroundColor: "#4755D4",
                                margin: "20px 0px 12px",
                                borderRadius: "18px",
                            }}
                            loading={loading}
                        >
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>

                {/* Not account */}
                <div className="text-xs text-center">
                    Bạn chưa có tài khoản?
                    <span
                        className="font-bold text-[#4755D4] mx-1"
                        onClick={() => dispatch(setOpenModalRegister(true))}
                    >
                        {" "}
                        Đăng ký
                    </span>
                </div>

                {/* other login */}
                <div className="flex items-center justify-center">
                    <div
                        className="
                            w-4/5 
                            border-t-[1px] border-dashed 
                            flex flex-col items-center
                            text-xs 
                            mt-6 
                            px-3 py-6 
                        "
                    >
                        <span className="text-sm mb-3">
                            Hoặc đăng nhập bằng mạng xã hội
                        </span>
                        <div className="flex w-full justify-center">
                            <a
                                href="#"
                                className="justify-center mx-2 w-11 h-11 flex items-center bg-[#F6F6FD] rounded-full"
                            >
                                <img
                                    src="https://ttpl.vn/assets/images/mobile/icon-facebook.png"
                                    alt=""
                                />
                            </a>
                            <a
                                href="#"
                                className="justify-center mx-2 w-11 h-11 flex items-center bg-[#F6F6FD] rounded-full"
                            >
                                <img
                                    src="https://ttpl.vn/assets/images/mobile/icons-google.png"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Forgot password modal */}
            <ModalForgotPassword
                onCancel={() => dispatch(setOpenModalForgotPassword(false))}
                onOk={() => dispatch(setOpenModalForgotPassword(false))}
            />

            {/* Register modal */}
            <ModalRegister
                onCancel={() => dispatch(setOpenModalRegister(false))}
                onOk={() => dispatch(setOpenModalRegister(false))}
            />
        </div>
    );
}

export default Index;
