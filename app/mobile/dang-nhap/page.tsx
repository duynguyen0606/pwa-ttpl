"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { authLogin } from "@/src/redux/feature/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { ModalForgotPassword } from "@/src/components/modal";
import { Button, Form, Input } from "antd";

type FormSubmitValueType = {
    email: string;
    password: string;
};

function Index() {
    const [error, setError] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [register, setRegister] = useState(false);

    const dispatch = useAppDispatch();

    /* HTML Form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data: FormSubmitValueType = {
            email,
            password,
        };

        await dispatch(authLogin(data));
    };
    */

    const [form] = Form.useForm();
    const handleSubmitForm = async (values: FormSubmitValueType) => {
        dispatch(authLogin(values));
    };

    const { user } = useAppSelector((state) => state.authState);
    console.log(user);

    return (
        <div className="relative">
            <div className=" pt-3 pl-[11px] pl-0 pb-2">
                <Link href="/mobile">
                    <img
                        className="w-[26px] h-[27px] bg-[#EDEEFA] rounded-full"
                        src="https://ttpl.vn/assets/images/mobile/type-back-login.png"
                    />
                </Link>
            </div>

            <div className="f-1 p-[15px]">
                {/* form login */}
                {/* <form onSubmit={handleSubmit}>
                    <h2 className="text-3xl text-[#262C41] font-semibold my-5">
                        Đăng nhập
                    </h2>
                    <div className="mb-1 text-[#f00]">
                        {error
                            ? "Tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại"
                            : " "}
                    </div>
                    <div className="flex flex-col mb-4 relative">
                        <label
                            className="text-xs text-[#686E7E] mb-1 "
                            htmlFor="email"
                        >
                            Email/Số điện thoại
                        </label>
                        <input
                            className="text-sm h-[48px] w-full rounded-lg px-2 bg-[#F4F5F8]"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onMouseDown={() => setError(false)}
                            placeholder="Email"
                        />
                    </div>
                    <div className="flex flex-col mb-1 relative">
                        <label
                            className="text-xs text-[#686E7E] mb-1 "
                            htmlFor="password"
                        >
                            Mật khẩu
                        </label>
                        <input
                            className="text-sm h-[48px] w-full rounded-lg px-2 bg-[#F4F5F8]"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onMouseDown={() => setError(false)}
                            placeholder="Mật khẩu"
                        />
                        <img
                            className="absolute right-5 bottom-3.5 hide-pass"
                            src="https://ttpl.vn/assets/images/icon/Eye.png"
                        />
                    </div>
                    <div className="text-end text-sm text-[#4755D4] pt-1">
                        <span onClick={() => setShowForgotPassword(true)}>
                            Quên mật khẩu ?
                        </span>
                    </div>
                    <button
                        className="
                            flex items-center justify-center
                            w-full h-12 
                            text-sm text-white  
                            bg-[#4755D4] 
                            rounded-[20px] 
                            mt-5 mb-2 
                        "
                        type="submit"
                    >
                        Đăng nhập
                    </button>
                </form> */}

                <Form
                    onFinish={(values) => handleSubmitForm(values)}
                    form={form}
                >
                    <h2 className="text-3xl text-[#262C41] font-semibold my-5">
                        Đăng nhập
                    </h2>

                    {/* Error message */}
                    {/* <div className="mb-1 text-[#f00]">
                        {error
                            ? "Tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại"
                            : " "}
                    </div> */}

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
                        <span onClick={() => setShowForgotPassword(true)}>
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
                        >
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>

                {/* Not account */}
                <div className="text-xs text-center">
                    Bạn chưa có tài khoản?
                    <span className="font-bold text-[#4755D4] mx-1">
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
                open={showForgotPassword}
                onCancel={() => setShowForgotPassword(false)}
            />
        </div>
    );
}

export default Index;
