"use client";

import { Switch } from "antd";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { usePageAuth } from "@/src/utils/hook";
import { useAppSelector, useAppDispatch } from "@/src/redux/hooks";
import { authLogout } from "@/src/redux/feature/authSlice";

import Footer from "@/src/components/mobile/footer/Footer";

function Index() {
    usePageAuth();
    const router = useRouter();
    const { user, token } = useAppSelector((state) => state.authState);
    const dispatch = useAppDispatch();

    const infoList = [
        {
            icons: "https://ttpl.vn/assets/images/mobile/Icon-feather-phone.png",
            value: user?.phone,
        },
        {
            icons: "https://ttpl.vn/assets/images/mobile/Icon-feather-mail.png",
            value: user?.email,
        },
        {
            icons: "https://ttpl.vn/assets/images/mobile/marker.png",
            value: user?.address,
        },
    ];

    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    const handleLogout = async () => {
        dispatch(
            authLogout({
                url: "https://thutucphapluat.com/api/login/logout",
                token,
            })
        );

        router.push("/mobile");
    };

    return (
        <>
            {!user ? (
                <div className="flex justify-center">Bạn chưa đăng nhâp</div>
            ) : (
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
                            <Image
                                src="/images/icons/white-left-arrow.png"
                                alt="mui ten"
                                width={25}
                                height={25}
                            />
                        </Link>

                        {/* avatar-user */}
                        <div
                            className="
                                w-[71px] h-[71px] 
                                rounded-full
                                mb-4
                            "
                        >
                            <Image
                                src={
                                    user?.image
                                        ? user.image
                                        : "https://ttpl.vn/assets/images/logo/logo-legalzone.png"
                                }
                                className="w-full h-full"
                                alt=""
                                width={71}
                                height={71}
                            />
                        </div>

                        {/* name */}
                        <div className="text-xl font-bold mb-1">
                            {user?.full_name}
                        </div>

                        {/* email */}
                        <div className="text-sm mb-4">{user?.email}</div>

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
                            Tài khoản: {user?.vip === null ? "Free" : user?.vip}
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
                                href="/mobile/profile/edit_profile"
                                className="
                                    flex items-center justify-center
                                    text-[#4755D4] font-medium 
                                "
                            >
                                Sửa
                                <Image
                                    className="ml-1"
                                    src="https://ttpl.vn/assets/images/mobile/Icon-awesome-pen.png"
                                    alt="pencil"
                                    width={12}
                                    height={12}
                                />
                            </Link>
                        </div>

                        {/* infomations account */}
                        <div className="border-b-[1px] border-solid border-[#EDEBF3]">
                            {infoList.map((item, index) => (
                                <div
                                    key={index}
                                    className="
                                        flex items-center
                                        text-sm text-[#262C41]
                                        mb-5
                                    "
                                >
                                    <Image
                                        src={item.icons}
                                        alt=""
                                        width={19}
                                        height={19}
                                    />
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
                                    <Image
                                        className="mr-3"
                                        src="https://ttpl.vn/assets/images/mobile/Icon-feather-clock.png"
                                        alt=""
                                        width={18}
                                        height={18}
                                    />
                                    <span>Thời hạn sử dụng gói dịch vụ</span>
                                </div>
                                <div>30/09/2020</div>
                            </div>

                            {/* my procedure */}
                            <Link
                                href="/mobile/profile/loadProcedure"
                                className="
                                    flex justify-between items-center
                                    py-4
                                    border-b-[1px] border-solid border-[#EBEDF3] border-opacity-50
                                "
                            >
                                <div className="flex items-center">
                                    <Image
                                        className="mr-3"
                                        src="https://ttpl.vn/assets/images/mobile/regulation.png"
                                        alt=""
                                        width={18}
                                        height={18}
                                    />
                                    <span>Thủ tục của tôi</span>
                                </div>
                                <div>
                                    <Image
                                        src="/images/icons/right.png"
                                        alt=""
                                        width={16}
                                        height={16}
                                    />
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
                                    <Image
                                        className="mr-3"
                                        src="/images/icons/notification.png"
                                        alt="thong bao"
                                        width={18}
                                        height={18}
                                    />
                                    <span>Bật thông báo</span>
                                </div>

                                <div className="bg-[#DEDEDE] rounded-3xl">
                                    <Switch onChange={onChange} />
                                </div>
                            </div>

                            {/* change password */}
                            <Link
                                href="/mobile/profile/change_password"
                                className="flex justify-between items-center py-4"
                            >
                                <div className="flex items-center">
                                    <Image
                                        className="mr-3"
                                        src="https://ttpl.vn/assets/images/mobile/Icon-feather-key.png"
                                        alt=""
                                        width={18}
                                        height={18}
                                    />
                                    <span>Đổi mật khẩu</span>
                                </div>
                                <div>
                                    <Image
                                        src="/images/icons/right.png"
                                        alt=""
                                        width={16}
                                        height={16}
                                    />
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
                            onClick={handleLogout}
                        >
                            Đăng xuất
                        </button>
                    </div>

                    <Footer />
                </div>
            )}
        </>
    );
}

export default Index;
