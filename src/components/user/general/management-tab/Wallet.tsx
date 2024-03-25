"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Button, ConfigProvider, Form, Input, InputNumber } from "antd";

function WalletManagement() {
    const [content, setContent] = useState("default");

    const view = useMemo(() => {
        switch (content) {
            case "recharge":
                return <RechargeContent onBack={() => setContent("default")} />;
            case "withdrawal":
                return (
                    <WithdrawalContent onBack={() => setContent("default")} />
                );
            case "default":
                return <DefaultContent setContent={(tab) => setContent(tab)} />;
        }
    }, [content]);

    return <div className="mb-4 p-4 bg-white rounded-lg">{view}</div>;
}

function RechargeContent({ onBack }: { onBack: () => void }) {
    const [form] = Form.useForm();
    return (
        <div>
            <Form form={form}>
                <div className="text-lg font-bold text-[--primary-color]">
                    Nạp tiền online
                </div>
                <div className="text-lg">
                    <div className="grid grid-cols-2 my-2">
                        <label>Tên tài khoản</label>
                        <div className="font-semibold">Phó Đức Thành</div>
                    </div>
                    <div className="grid grid-cols-2 my-2">
                        <label>Mã tài khoản</label>
                        <div className="font-semibold">#5645</div>
                    </div>
                    <div className="grid grid-cols-2 my-2">
                        <label>Số dư tài khoản</label>
                        <div className="font-semibold">0 đ</div>
                    </div>
                    <div className="grid grid-cols-2 my-2 items-center">
                        <label>Số tiền nạp</label>
                        <Input
                            size="large"
                            placeholder="Nhập số tiền cần nạp"
                        />
                    </div>
                    <div className="grid grid-cols-2 my-2 items-center">
                        <label>Thanh toán qua</label>
                        <Input
                            variant="outlined"
                            size="large"
                            disabled
                            value="Chuyển khoản qua ngân hàng"
                        />
                    </div>
                    <div className="grid grid-cols-2 my-2 item-center">
                        <label>Chọn ngân hàng</label>
                        <Input
                            variant="outlined"
                            size="large"
                            disabled
                            value="Ngân hàng MB Bank"
                        />
                    </div>

                    <div className="grid grid-cols-2 my-2">
                        <div></div>
                        <div>
                            <span className="font-semibold">
                                Thông tin chuyển khoản
                            </span>
                            <>
                                <div
                                    className="grid grid-cols-3 my-1 p-2"
                                    style={{
                                        backgroundColor:
                                            "rgba(245, 133, 51, 0.1)",
                                    }}
                                >
                                    <label>Số tài khoản</label>
                                    <div className="font-semibold">
                                        0944788910
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 my-1 p-2">
                                    <label>Tên ngân hàng</label>
                                    <div className="font-semibold">
                                        Ngân hàng MB Bank
                                    </div>
                                </div>
                                <div
                                    className="grid grid-cols-3 my-1 p-2"
                                    style={{
                                        backgroundColor:
                                            "rgba(245, 133, 51, 0.1)",
                                    }}
                                >
                                    <label>Tên tài khoản</label>
                                    <div className="font-semibold">
                                        NGUYEN TRUNG KIEN
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 my-1 p-2">
                                    <label>Chi nhánh</label>
                                    <div className="font-semibold">
                                        Chi nhánh Hoàng Mai
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>

                <div className="flex items-center mt-4 text-lg">
                    <button
                        className="rounded px-4 py-2 mx-2 font-semibold text-black bg-[#F7F7F7] "
                        onClick={onBack}
                    >
                        Hủy bỏ
                    </button>
                    <button
                        className="rounded px-4 py-2 mx-2 font-semibold text-white bg-[#F58533] "
                        // onClick={() => setIsEditing(false)}
                    >
                        Gửi yêu cầu
                    </button>
                </div>
            </Form>
        </div>
    );
}

function WithdrawalContent({ onBack }: { onBack: () => void }) {
    const [form] = Form.useForm();
    return (
        <div>
            <Form form={form}>
                <div className="text-lg font-bold text-[--primary-color]">
                    Rút tiền về tài khoản ngân hàng
                </div>
                <div className="text-lg">
                    <div className="grid grid-cols-2 my-2">
                        <label>Tên tài khoản</label>
                        <div className="font-semibold">Phó Đức Thành</div>
                    </div>
                    <div className="grid grid-cols-2 my-2">
                        <label>Mã tài khoản</label>
                        <div className="font-semibold">#5645</div>
                    </div>
                    <div className="grid grid-cols-2 my-2">
                        <label>Số dư tài khoản</label>
                        <div className="font-semibold">0 đ</div>
                    </div>
                    <div className="grid grid-cols-2 my-2 items-center">
                        <label>Số tiền rút</label>
                        <Input
                            size="large"
                            placeholder="Nhập số tiền cần rút"
                        />
                    </div>
                    <div className="grid grid-cols-2 my-2 items-center">
                        <label>Thanh toán qua</label>
                        <Input
                            variant="outlined"
                            size="large"
                            disabled
                            value="Chuyển khoản qua ngân hàng"
                        />
                    </div>
                    <div className="grid grid-cols-2 my-2 item-center">
                        <label>Chọn ngân hàng</label>
                        <Input size="large" />
                    </div>

                    <div className="grid grid-cols-2 my-2">
                        <div></div>
                        <div>
                            <span className="font-semibold">
                                Thông tin chuyển khoản
                            </span>
                            <>
                                <div
                                    className="grid grid-cols-3 my-1 p-2"
                                    style={{
                                        backgroundColor:
                                            "rgba(245, 133, 51, 0.1)",
                                    }}
                                >
                                    <label>Số tài khoản</label>
                                    <div className="font-semibold">
                                        0944788910
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 my-1 p-2">
                                    <label>Tên ngân hàng</label>
                                    <div className="font-semibold">
                                        Ngân hàng MB Bank
                                    </div>
                                </div>
                                <div
                                    className="grid grid-cols-3 my-1 p-2"
                                    style={{
                                        backgroundColor:
                                            "rgba(245, 133, 51, 0.1)",
                                    }}
                                >
                                    <label>Tên tài khoản</label>
                                    <div className="font-semibold">
                                        NGUYEN TRUNG KIEN
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 my-1 p-2">
                                    <label>Chi nhánh</label>
                                    <div className="font-semibold">
                                        Chi nhánh Hoàng Mai
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>

                <div className="flex items-center mt-4 text-lg">
                    <button
                        className="rounded px-4 py-2 mx-2 font-semibold text-black bg-[#F7F7F7] "
                        onClick={onBack}
                    >
                        Hủy bỏ
                    </button>
                    <button
                        className="rounded px-4 py-2 mx-2 font-semibold text-white bg-[#F58533] "
                        // onClick={() => setIsEditing(false)}
                    >
                        Gửi yêu cầu
                    </button>
                </div>
            </Form>
        </div>
    );
}

function DefaultContent({ setContent }: { setContent: (tab: string) => void }) {
    const [form] = Form.useForm();
    const [formBank] = Form.useForm();
    const [showPass, setShowPass] = useState(false);
    return (
        <div className=" flex justify-center">
            <div className="w-2/5 text-[--primary-color]">
                {/* Account balance */}
                <div className="text-base font-bold flex items-center mb-4">
                    <span className="mr-2">Số dư:</span>
                    {!showPass && (
                        <Image
                            src="https://ttpl.vn/assets/images/myprofile/star-hidden.png"
                            alt="hidden"
                            width={64}
                            height={10}
                        />
                    )}
                    {showPass && <div>0 đ</div>}
                    <Image
                        src={
                            showPass
                                ? "/images/icons/eye.png"
                                : "/images/icons/eye-slash.png"
                        }
                        alt={showPass ? "Show" : "Hide"}
                        className="ml-2"
                        width={24}
                        height={24}
                        onClick={() => setShowPass(!showPass)}
                    />
                </div>

                {/* Account point */}
                <div>
                    <span className="text-base font-bold pb-2">
                        Chuyển đổi số dư thành điểm
                    </span>
                    <Form form={form} layout="vertical">
                        <Form.Item
                            name="deposit-amount"
                            label="Số tiền cần chuyển: 1đ = 1 điểm"
                        >
                            <InputNumber
                                variant="filled"
                                placeholder="Nhập số cần chuyển"
                                style={{ width: "40%" }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                style={{
                                    backgroundColor: "rgb(240, 240, 240)",
                                    color: "var(--primary-color)",
                                    fontWeight: "700",
                                }}
                            >
                                Gửi yêu cầu
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                {/* Deposit withdrawal */}
                <div className="flex">
                    {/* recharge */}
                    <div className="flex flex-col justify-center items-center mr-24">
                        <div
                            className="flex items-center justify-center w-11 h-11 rounded bg-[var(--primary-color)] cursor-pointer"
                            onClick={() => setContent("recharge")}
                        >
                            <Image
                                src="/images/icons/enter.png"
                                alt="recharge"
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className="text-base font-bold">Nạp tiền</div>
                    </div>

                    {/* Withdraw */}
                    <div className="flex flex-col justify-center items-center">
                        <div
                            className="flex items-center justify-center w-11 h-11 rounded bg-[var(--primary-color)] cursor-pointer"
                            onClick={() => setContent("withdrawal")}
                        >
                            <Image
                                src="/images/icons/upload.png"
                                alt="recharge"
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className="text-base font-bold">Rút tiền</div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    backgroundColor: "var(--primary-color)",
                    borderRadius: 8,
                    color: "white",
                    padding: 12,
                    width: "40%",
                }}
            >
                <ConfigProvider
                    theme={{
                        token: {
                            colorTextPlaceholder: "white",
                            colorText: "white",
                        },
                        components: {
                            Form: {
                                verticalLabelPadding: 0,
                                itemMarginBottom: 4,
                            },
                        },
                    }}
                >
                    <Form form={formBank} layout="vertical" autoComplete="off">
                        <div className="flex mb-4">
                            <Image
                                src="/images/icons/bank-card.png"
                                alt="bankName"
                                width={30}
                                height={30}
                                className="mr-4"
                            />
                            <Input
                                variant="borderless"
                                placeholder="Tên ngân hàng"
                            />
                        </div>

                        <Form.Item label="Số tài khoản">
                            <Input
                                variant="borderless"
                                placeholder="Số tài khoản"
                                style={{ fontSize: 24 }}
                            />
                        </Form.Item>
                        <Form.Item label="Tên tài khoản">
                            <Input
                                variant="borderless"
                                placeholder="Tên tài khoản"
                            />
                        </Form.Item>
                        <Form.Item label="Chi nhánh">
                            <Input
                                variant="borderless"
                                placeholder="Chi nhánh"
                            />
                        </Form.Item>
                    </Form>
                </ConfigProvider>
            </div>
        </div>
    );
}

export default WalletManagement;
