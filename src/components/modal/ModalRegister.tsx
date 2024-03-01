import { useState } from "react";
import { Modal, ModalProps } from "antd";
import {
    LawyerIcon,
    EnterpriseIcon,
    PersonalIcon,
    StateCadresIcon,
} from "@/src/components/common/icons";

function NextStepRegister(props: ModalProps) {
    const {open, onCancel} = props
    return ( 
        <Modal
            open={open}
            onCancel={onCancel}
        >
            Next Step
        </Modal>
    );
}

function ModalRegister(props: ModalProps) {
    const { open, onCancel } = props;
    const [roleActive, setRoleActive] = useState(0);
    const [next, setNext] = useState(false)


    const role_options = [
        {
            id: 1,
            tag: "lawyer",
            icon: (
                <LawyerIcon color={roleActive === 1 ? "#4755D4" : "#8A8A8A"} />
            ),
            name: "Luật sư",
        },
        {
            id: 2,
            tag: "enterprise",
            icon: (
                <EnterpriseIcon
                    color={roleActive === 2 ? "#4755D4" : "#8A8A8A"}
                />
            ),
            name: "Doanh nghiệp",
        },
        {
            id: 3,
            tag: "personal",
            icon: (
                <PersonalIcon
                    color={roleActive === 3 ? "#4755D4" : "#8A8A8A"}
                />
            ),
            name: "Cá nhân",
        },
        {
            id: 4,
            tag: "state-cadres",
            icon: (
                <StateCadresIcon
                    color={roleActive === 4 ? "#4755D4" : "#8A8A8A"}
                />
            ),
            name: "Cán bộ nhà nước",
        },
    ];

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            footer={null}
            closeIcon={null}
            centered
        >
            <div>
                {/* Header */}
                <button onClick={onCancel}>
                    <img
                        className="w-[26px] h-[27px] bg-[#EDEEFA] rounded-full"
                        src="https://ttpl.vn/assets/images/mobile/type-back-login.png"
                    />
                </button>

                {/* Content */}
                <div className="flex flex-col justify-center items-center text-[#444]">
                    {/* Title */}
                    <div className="py-2 text-center">
                        <div className="mb-4 text-base font-semibold uppercase">
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
                            <div className="mr-2 mb-2">
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
                                                ? "#4755D4"
                                                : "#E5E5E5",
                                    }}
                                >
                                    {role.icon}
                                    <span
                                        className="mt-4 text-base font-semibold"
                                        style={{
                                            color:
                                                roleActive === role.id
                                                    ? "#4755D4"
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
                            className="w-full h-[54px] bg-[#4755D4] rounded-[20px] text-base font-medium text-white my-2"
                            onClick={() => setNext(true)}
                        >
                            Tiếp tục
                        </button>
                    </div>

                    {/* Note */}
                    <div className="text-center text-[#A1A5AC] mb-4">
                        Với việc tiếp tục, bạn đã đồng ý với các{" "}
                        <span className="text-[#4755D4]">
                            Chính sách bảo mật
                        </span>{" "}
                        của chúng tôi
                    </div>

                    {/* Have account */}
                    <div className="text-base mb-4">
                        Bạn đã có tài khoản?
                        <span className="text-[#4755D4]" onClick={onCancel}>
                            {" "}
                            Đăng nhập
                        </span>
                    </div>
                </div>
            </div>

            <NextStepRegister open={next} onCancel={() => setNext(false)} />
        </Modal>
    );
}

export default ModalRegister;
