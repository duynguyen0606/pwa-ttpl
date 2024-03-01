import { Lawyer } from "@/src/assests/icons";
import { Modal, ModalProps } from "antd";
import { calc } from "antd/es/theme/internal";

function ModalRegister(props: ModalProps) {
    const { open, onCancel } = props;

    const role_options = [
        {
            icon: <Lawyer />,
            name: "Luật sư",
        },
        {
            icon: <Lawyer />,
            name: "Doanh nghiệp",
        },
        {
            icon: <Lawyer />,
            name: "Cá nhân",
        },
        {
            icon: <Lawyer />,
            name: "Cán bộ nhà nước",
        },
    ]

    return (
        <Modal open={open} onCancel={onCancel} footer={null} closeIcon={null}>
            <div>
                {/* Header */}
                <div>
                    <img
                        className="w-[26px] h-[27px] bg-[#EDEEFA] rounded-full"
                        src="https://ttpl.vn/assets/images/mobile/type-back-login.png"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center items-center">
                    {/* Title */}
                    <div className="py-2 text-center">
                        <div className="mb-4 text-base text-[#444] font-semibold uppercase">
                            Đăng ký
                        </div>
                    </div>

                    {/* Icon */}
                    <div className="relative"></div>

                    {/* Number */}
                    <div className="text-lg text-[#444] font-semibold mt-7 mb-8">
                        1. Chọn loại tài khoản
                    </div>

                    {/* Roles-register */}
                    <div className="w-full grid grid-cols-2 grid-rows-2">
                        <div className="flex flex-col justify-center items-center">
                            <input type="radio" style={{ display: "none" }} />
                            <label>
                                <Lawyer />
                                <span>Luật sư</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalRegister;
