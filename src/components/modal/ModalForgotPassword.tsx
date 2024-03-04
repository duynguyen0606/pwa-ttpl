"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, Form, Input, Modal, ModalProps } from "antd";

import { useAppSelector, useAppDispatch } from "@/src/redux/hooks";
import { setOpenModalForgotPassword } from "@/src/redux/feature/authSlice";

function ModalForgotPassword(props: ModalProps) {
    const [form] = Form.useForm();
    const [primaryColor, setPrimaryColor] = useState("--primary-color");
    const dispatch = useAppDispatch();
    const isMobileUI = useMediaQuery({
        query: "(max-width: 600px)",
    });

    const { openModalForgotPassword } = useAppSelector(
        (state) => state.authState
    );

    useEffect(() => {
        setPrimaryColor(
            isMobileUI ? "var(--secondary-color)" : "var(--primary-color)"
        );
    }, [isMobileUI]);

    return (
        <Modal
            open={openModalForgotPassword}
            onCancel={() => dispatch(setOpenModalForgotPassword(false))}
            footer={null}
            closeIcon={isMobileUI ? null : undefined}
            width={isMobileUI ? undefined : "460px"}
        >
            <div>
                {/* Close button */}
                {isMobileUI && (
                    /* Close button */
                    <button
                        onClick={() =>
                            dispatch(setOpenModalForgotPassword(false))
                        }
                    >
                        <img
                            className="w-[26px] h-[27px] px-1 bg-[#EDEEFA] rounded-full"
                            src="/images/icons/left-arrow.png"
                        />
                    </button>
                )}
                <div className="flex flex-col items-center justify-center pb-2 pt-5">
                    <h3
                        className={`font-semibold uppercase
                        ${
                            isMobileUI ? "text-base pb-1" : "text-2xl py-[14px]"
                        }`}
                    >
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
                                backgroundColor: isMobileUI
                                    ? "#F4F5F8"
                                    : "#FFF",
                                border: isMobileUI ? "none" : undefined,
                            }}
                            size="large"
                            placeholder="Email"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            style={{
                                backgroundColor: primaryColor,
                                color: "#FFF",
                                border: "none",
                                width: "100%",
                                borderRadius: isMobileUI ? "20px" : "4px",
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
