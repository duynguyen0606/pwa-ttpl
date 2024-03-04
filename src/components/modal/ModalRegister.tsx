import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, Form, Input, Modal, ModalProps } from "antd";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import {
    setOpenModalLogin,
    setOpenModalRegister,
} from "@/src/redux/feature/authSlice";

import {
    LawyerIcon,
    EnterpriseIcon,
    PersonalIcon,
    StateCadresIcon,
} from "@/src/components/common/icons";

function NextStepRegister({
    onClickBack,
    color: primaryColor,
}: {
    onClickBack: () => void;
    color: string;
}) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const isMobileUI = useMediaQuery({
        query: "(max-width: 600px)",
    });

    return (
        <div>
            {/* Close button */}
            <button onClick={onClickBack}>
                <Image
                    className="w-[26px] h-[27px] px-1 bg-[#EDEEFA] rounded-full"
                    src="/images/icons/left-arrow.png"
                    alt=""
                    width={26}
                    height={27}
                />
            </button>

            {/* Content */}
            <div className="flex flex-col items-center justify-center">
                {/* Title */}
                <div className="py-2 text-center">
                    <div
                        className={`mb-4 ${
                            isMobileUI ? "text-base" : "text-3xl"
                        } font-semibold uppercase`}
                    >
                        Đăng ký
                    </div>
                </div>

                {/* Icon */}
                <div className="relative"></div>

                {/* Number */}
                <div className="text-lg font-semibold mt-7 mb-8">
                    2. Đăng ký
                </div>

                <Form
                    className="w-full"
                    form={form}
                    onFinish={(values) => console.log(values)}
                >
                    <Form.Item name="Name">
                        <Input size="large" placeholder="Họ và tên" />
                    </Form.Item>

                    <Form.Item name="Email">
                        <Input size="large" placeholder="Email" />
                    </Form.Item>

                    <Form.Item name="Phone">
                        <Input
                            size="large"
                            type="number"
                            placeholder="Số điện thoại"
                        />
                    </Form.Item>

                    <Form.Item name="Password">
                        <Input.Password
                            size="large"
                            placeholder="Nhập mật khẩu"
                        />
                    </Form.Item>

                    <Form.Item name="ConfirmPassword">
                        <Input.Password
                            size="large"
                            placeholder="Nhập lại mật khẩu"
                        />
                    </Form.Item>

                    <div className="flex justify-between">
                        <button
                            style={{
                                width: "160px",
                                height: "54px",
                                fontSize: 18,
                                fontWeight: "600",
                                borderRadius: "40px",
                                color: "#4A433F",
                                backgroundColor: "#F2F2F2",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "8 0 8",
                            }}
                            onClick={onClickBack}
                        >
                            Quay lại
                        </button>

                        <Form.Item>
                            <Button
                                size="large"
                                htmlType="submit"
                                loading={loading}
                                style={{
                                    width: "160px",
                                    height: "54px",
                                    fontSize: 18,
                                    fontWeight: "600",
                                    borderRadius: "40px",
                                    color: "white",
                                    backgroundColor: `${primaryColor}`,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                Đăng ký
                            </Button>
                        </Form.Item>
                    </div>
                </Form>

                <Note color={primaryColor} />

                {/* Have account */}
                <div className="text-base mb-4">
                    Bạn đã có tài khoản?
                    <span
                        className={`text-[${primaryColor}] cursor-pointer`}
                        onClick={() => {
                            dispatch(setOpenModalLogin(true));
                            dispatch(setOpenModalRegister(false));
                        }}
                    >
                        {" "}
                        Đăng nhập
                    </span>
                </div>
            </div>
        </div>
    );
}

function Note({ color: primaryColor }: { color: string }) {
    return (
        <div className="text-center text-[#A1A5AC] mb-4">
            Với việc tiếp tục, bạn đã đồng ý với các{" "}
            <span className={`text-[${primaryColor}]`}>Chính sách bảo mật</span>{" "}
            của chúng tôi
        </div>
    );
}

function ChooseTypeEnterprise({color: primaryColor}: {color: string}) {
    const [typeActive, setTypeActive] = useState(0);
    const typeEnterprise = useMemo(() => {
        return [
            {
                id: 1,
                tag: "company-lawyer",
                icon: (
                    <LawyerIcon
                        color={typeActive === 1 ? `${primaryColor}` : "#8A8A8A"}
                    />
                ),
                name: "Công ty luật",
            },
            {
                id: 2,
                tag: "enterprise",
                icon: (
                    <EnterpriseIcon
                        color={typeActive === 2 ? `${primaryColor}` : "#8A8A8A"}
                    />
                ),
                name: "Doanh nghiệp",
            },
        ];
    }, [])

    return (
        <div className="w-full grid grid-cols-2 grid-rows-2">
            {typeEnterprise.map((type) => (
                <div className="mr-2 mb-2" key={type.id}>
                    <input
                        id={type.tag}
                        type="radio"
                        style={{ display: "none" }}
                        onClick={() => setTypeActive(type.id)}
                    />
                    <label
                        htmlFor={type.tag}
                        className="
                                        h-full width-full 
                                        rounded 
                                        flex flex-col 
                                        items-center justify-center 
                                        text-center
                                        py-4
                                        border-[1px] border-solid 
                                        "
                        style={{
                            borderColor:
                                typeActive === type.id
                                    ? `${primaryColor}`
                                    : "#E5E5E5",
                        }}
                    >
                        {type.icon}
                        <span
                            className="mt-4 text-base font-semibold"
                            style={{
                                color:
                                    typeActive === type.id
                                        ? `${primaryColor}`
                                        : "#8A8A8A",
                            }}
                        >
                            {type.name}
                        </span>
                    </label>
                </div>
            ))}
        </div>
    );
}

function ModalRegister(props: ModalProps) {
    const [roleActive, setRoleActive] = useState(0);
    const [next, setNext] = useState(false);
    const { openModalRegister } = useAppSelector((state) => state.authState);
    const [primaryColor, setPrimaryColor] = useState("--primary-color");

    const dispatch = useAppDispatch();
    const isMobileUI = useMediaQuery({
        query: "(max-width: 600px)",
    });

    const role_options = useMemo(() => {
        return [
            {
                id: 1,
                tag: "lawyer",
                icon: (
                    <LawyerIcon
                        color={roleActive === 1 ? `${primaryColor}` : "#8A8A8A"}
                    />
                ),
                name: "Luật sư",
            },
            {
                id: 2,
                tag: "enterprise",
                icon: (
                    <EnterpriseIcon
                        color={roleActive === 2 ? `${primaryColor}` : "#8A8A8A"}
                    />
                ),
                name: "Doanh nghiệp",
            },
            {
                id: 3,
                tag: "personal",
                icon: (
                    <PersonalIcon
                        color={roleActive === 3 ? `${primaryColor}` : "#8A8A8A"}
                    />
                ),
                name: "Cá nhân",
            },
            {
                id: 4,
                tag: "state-cadres",
                icon: (
                    <StateCadresIcon
                        color={roleActive === 4 ? `${primaryColor}` : "#8A8A8A"}
                    />
                ),
                name: "Cán bộ nhà nước",
            },
        ];
    }, [roleActive]);

    useEffect(() => {
        setPrimaryColor(
            isMobileUI ? "var(--secondary-color)" : "var(--primary-color)"
        );
    }, [isMobileUI]);

    return (
        <Modal
            open={openModalRegister}
            onCancel={() => dispatch(setOpenModalRegister(false))}
            footer={null}
            closeIcon={isMobileUI ? null : undefined}
            centered
        >
            {next ? (
                <NextStepRegister
                    color={primaryColor}
                    onClickBack={() => setNext(false)}
                />
            ) : (
                <div>
                    {isMobileUI && (
                        /* Close button */
                        <button
                            onClick={() =>
                                dispatch(setOpenModalRegister(false))
                            }
                        >
                            <Image
                                className="w-[26px] h-[27px] px-1 bg-[#EDEEFA] rounded-full"
                                src="/images/icons/left-arrow.png"
                                alt=""
                                width={26}
                                height={27}
                            />
                        </button>
                    )}

                    {/* Content */}
                    <div className="flex flex-col justify-center items-center text-[#444]">
                        {/* Title */}
                        <div className="py-2 text-center">
                            <div
                                className={`mb-4 font-semibold uppercase 
                                ${isMobileUI ? "text-base" : "text-3xl"}`}
                            >
                                Đăng ký
                            </div>
                        </div>

                        {/* Icon */}
                        <div className="relative"></div>

                        {/* Number */}
                        <div className="text-lg font-semibold mt-7 mb-8">
                            1. Chọn loại tài khoản
                        </div>

                        {/* Roles-register */}
                        <div className="w-full grid grid-cols-2 grid-rows-2">
                            {role_options.map((role) => (
                                <div className="mr-2 mb-2" key={role.id}>
                                    <input
                                        id={role.tag}
                                        type="radio"
                                        style={{ display: "none" }}
                                        onClick={() => setRoleActive(role.id)}
                                    />
                                    <label
                                        htmlFor={role.tag}
                                        className="
                                        h-full width-full 
                                        rounded 
                                        flex flex-col 
                                        items-center justify-center 
                                        text-center
                                        py-4
                                        border-[1px] border-solid 
                                        "
                                        style={{
                                            borderColor:
                                                roleActive === role.id
                                                    ? `${primaryColor}`
                                                    : "#E5E5E5",
                                        }}
                                    >
                                        {role.icon}
                                        <span
                                            className="mt-4 text-base font-semibold"
                                            style={{
                                                color:
                                                    roleActive === role.id
                                                        ? `${primaryColor}`
                                                        : "#8A8A8A",
                                            }}
                                        >
                                            {role.name}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>

                        {/* Button submit role */}
                        <div className="w-full">
                            <button
                                type="submit"
                                className={`w-full h-[54px] bg-[${primaryColor}] rounded-[20px] text-base font-medium text-white my-2`}
                                onClick={() => setNext(true)}
                            >
                                Tiếp tục
                            </button>
                        </div>

                        {/* Note */}
                        <Note color={primaryColor} />

                        {/* Have account */}
                        <div className="text-base mb-4">
                            Bạn đã có tài khoản?
                            <span
                                className={`text-[${primaryColor}] cursor-pointer`}
                                onClick={() => {
                                    dispatch(setOpenModalLogin(true));
                                    dispatch(setOpenModalRegister(false));
                                }}
                            >
                                {" "}
                                Đăng nhập
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
}

export default ModalRegister;
