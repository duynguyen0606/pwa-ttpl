"use client";

import Link from "next/link";
import { Switch } from "antd";

import { BackIcon } from "@/src/assests/icons";
import Footer from "@/src/components/mobile/footer/Footer";

const user = {
    name: "Đức Thành",
    email: "ducthanh@gmail.com",
    type: "Free",
    phone: "0906785637",
    address: "Số 2, ngách 141/35/28, Nham Dư, Lĩnh Nam, Hoàng Mai, Hà Nội",
};

function Index() {
    
    const info = [
        {
            icons: "https://ttpl.vn/assets/images/mobile/Icon-feather-phone.png",
            value: user.phone,
        },
        {
            icons: "https://ttpl.vn/assets/images/mobile/Icon-feather-mail.png",
            value: user.email,
        },
        {
            icons: "https://ttpl.vn/assets/images/mobile/marker.png",
            value: user.address,
        },
    ];

    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div className="bg-[#4755D4]">
            {/* header-user  */}
            <div
                className="
                    flex flex-col 
                    justify-center items-center
                    pt-9
                    text-[#FCFCFE]
                "
            >
                {/* back btn */}
                <Link href="/mobile" className="absolute top-5 left-5">
                    <BackIcon color="white" />
                </Link>

                {/* avatar-user */}
                <div
                    className="
                        w-[71px] h-[71px] 
                        rounded-full
                        mb-4
                    "
                >
                    <img
                        src="https://ttpl.vn/assets/images/logo/logo-legalzone.png"
                        className="w-full h-full"
                    />
                </div>

                {/* name */}
                <div className="text-xl font-bold mb-1">{user.name}</div>

                {/* email */}
                <div className="text-sm mb-4">{user.email}</div>

                {/* type account */}
                <div
                    className="
                        flex justify-center items-center
                        py-1 px-4
                        text-sm text-[#4755D4] font-bold
                        bg-[#FCFCFE]
                        rounded-[10px]
                    "
                >
                    Tài khoản: {user.type}
                </div>
            </div>

            {/* content-user */}
            <div
                className="
                    h-[60vh]
                    bg-[#FCFCFE]
                    mt-[30px]
                    px-5 pt-8 pb-20
                    rounded-t-3xl
                    overflow-scroll
                "
            >
                {/* top content */}
                <div className="flex justify-between mb-5 text-base">
                    {/* Title */}
                    <div className="text-[#262C41] font-bold">
                        Thông tin chi tiết
                    </div>

                    {/* Edit profile */}
                    <Link
                        href="my-profile/edit-profile"
                        className="
                            flex items-center justify-center
                            text-[#4755D4] font-medium 
                        "
                    >
                        Sửa
                        <img
                            className="ml-1"
                            src="https://ttpl.vn/assets/images/mobile/Icon-awesome-pen.png"
                        />
                    </Link>
                </div>

                {/* info */}
                <div className="border-b-[1px] border-solid border-[#EDEBF3]">
                    {info.map((item, index) => (
                        <div
                            key={index}
                            className="
                                flex items-center
                                text-sm text-[#262C41]
                                mb-5
                            "
                        >
                            <img className="" src={item.icons} />
                            <span className="ml-3">{item.value}</span>
                        </div>
                    ))}
                </div>

                {/* option */}
                <div className="text-sm text-[#262C41]">
                    {/* timeout */}
                    <div
                        className="
                            flex justify-between items-center
                            py-4
                            border-b-[1px] border-solid border-[#EBEDF3] border-opacity-50
                        "
                    >
                        <div className="flex items-center">
                            <img
                                className="mr-3"
                                src="https://ttpl.vn/assets/images/mobile/Icon-feather-clock.png"
                            />
                            <span>Thời hạn sử dụng gói dịch vụ</span>
                        </div>
                        <div>30/09/2020</div>
                    </div>

                    {/* my procedure */}
                    <Link
                        href="my-profile/my-procedure"
                        className="
                            flex justify-between items-center
                            py-4
                            border-b-[1px] border-solid border-[#EBEDF3] border-opacity-50
                        "
                    >
                        <div className="flex items-center">
                            <img
                                className="mr-3"
                                src="https://ttpl.vn/assets/images/mobile/regulation.png"
                            />
                            <span>Thủ tục của tôi</span>
                        </div>
                        <div>
                            <img src="https://ttpl.vn/assets/images/mobile/carret-right.png" />
                        </div>
                    </Link>

                    {/* turn on notification */}
                    <div
                        className="
                            flex justify-between items-center
                            py-4
                            border-b-[1px] border-solid border-[#EBEDF3] border-opacity-50
                        "
                    >
                        <div className="flex items-center">
                            <img
                                className="mr-3"
                                src="https://ttpl.vn/assets/images/mobile/Icon-feather-bell.png"
                            />
                            <span>Bật thông báo</span>
                        </div>

                        <Switch
                            defaultChecked
                            onChange={onChange}
                            // style={{ backgroundColor: "#DEDEDE" }}
                        />
                    </div>

                    {/* change password */}
                    <Link
                        href="my-profile/change-password"
                        className="
                            flex justify-between items-center
                            py-4
                        "
                    >
                        <div className="flex items-center">
                            <img
                                className="mr-3"
                                src="https://ttpl.vn/assets/images/mobile/Icon-feather-key.png"
                            />
                            <span>Đổi mật khẩu</span>
                        </div>
                        <div>
                            <img src="https://ttpl.vn/assets/images/mobile/carret-right.png" />
                        </div>
                    </Link>
                </div>

                <button
                    className="
                        flex items-center justify-center
                        w-full
                        mt-10 mb-[50px]
                        py-3
                        text-base text-[#4755D4] font-medium
                        bg-[#4755D4] bg-opacity-10
                        rounded-3xl
                    "
                >
                    Đăng xuất
                </button>
            </div>

            <Footer />
        </div>
    );
}

export default Index;
