import Link from "next/link";

function Index() {
    return (
        <div className="h-[100vh]  relative">
            {/* Profile */}
            <div
                className="
                    relative
                    h-[222px]
                    py-8 px-4
                    rounded-br-[30px]
                    text-white
                    bg-[#4755D4]
                "
            >
                {/* Close button */}
                <Link
                    href="/mobile"
                    className="
                        absolute
                        top-4 right-5
                        text-2xl font-semibold
                    "
                >
                    x
                </Link>

                {/* Avatar */}
                <div
                    className="
                        absolute
                        w-[100px] h-[100px]
                        bottom-0 right-8
                    "
                >
                    <img
                        className="my-2 w-full h-full rounded-3xl"
                        src="https://ttpl.vn/assets/images/logo/logo-legalzone.png"
                    />
                </div>

                {/* Name */}
                <div className="mt-6 text-2xl font-bold">Phó Đức Thành</div>

                {/* Email */}
                <div className="text-sm">ducthanh@gmail.com</div>
            </div>

            {/* List options */}
            <div className="bg-[#4755D4] mb-[70px]">
                <div
                    className="
                        pt-5 px-8
                        rounded-tl-[30px] 
                        bg-white 
                    "
                >
                    {/* Law QA */}
                    <Link
                        href="/mobile/cau-hoi/"
                        className="flex items-center mb-5"
                    >
                        <img src="https://ttpl.vn/assets/images/mobile/question.png" />
                        <div className="ml-5 text-base text-[#262C41] font-bold">
                            Hỏi đáp pháp luật
                        </div>
                    </Link>

                    {/* Các gói dịch vụ */}
                    <Link
                        href="/mobile/premium"
                        className="flex items-center mb-5"
                    >
                        <img src="https://ttpl.vn/assets/images/mobile/box.jpg" />
                        <div className="ml-5 text-base text-[#262C41] font-bold">
                            Các gói dịch vụ
                        </div>
                    </Link>

                    {/* Giới thiệu */}
                    <div className="flex items-center mb-5">
                        <img src="https://ttpl.vn/assets/images/mobile/invitation.jpg" />
                        <div className="ml-5 text-base text-[#262C41] font-bold">
                            Giới thiệu
                        </div>
                    </div>

                    {/* Liên hệ */}
                    <Link
                        href="/mobile/lien-he"
                        className="flex items-center mb-5"
                    >
                        <img src="https://ttpl.vn/assets/images/mobile/contacts.png" />
                        <div className="ml-5 text-base text-[#262C41] font-bold">
                            Liên hệ
                        </div>
                    </Link>

                    {/* Phản hồi */}
                    <div className="flex items-center mb-5">
                        <img src="https://ttpl.vn/assets/images/mobile/back.png" />
                        <div className="ml-5 text-base text-[#262C41] font-bold">
                            Phản hồi
                        </div>
                    </div>

                    {/* Đánh giá */}
                    <div className="flex items-center mb-5">
                        <img src="https://ttpl.vn/assets/images/mobile/review.png" />
                        <div className="ml-5 text-base text-[#262C41] font-bold">
                            Đánh giá
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer sidebar */}
            <div
                className="
                    text-[#B5B9C7]
                    px-8 pt-10
                "
            >
                {/* border */}
                <div className="mb-10 mx-3 border-t-2" />

                {/* Company profile */}
                <div className="flex items-center mb-5">
                    <img src="https://ttpl.vn/assets/images/mobile/logo-legalzone.png" />
                    <span className="ml-5 text-base ">
                        Công ty TNHH Legalzone
                    </span>
                </div>

                {/* Address */}
                <div className="flex items-center mb-3">
                    <img src="https://ttpl.vn/assets/images/mobile/marker.png" />
                    <span className="ml-5 text-xs">
                        Phòng 1603, Sảnh A3, Toà nhà Ecolife, 58 Tố Hữu, Trung
                        Văn, Nam Từ Liêm, Hà Nội
                    </span>
                </div>

                {/* Phone */}
                <Link href="tel:0888889366" className="flex items-center mb-3">
                    <img src="https://ttpl.vn/assets/images/mobile/Icon-feather-phone.png" />
                    <span className="ml-5 text-xs">0888889366</span>
                </Link>

                {/* Mail to */}
                <Link
                    href="mailto:support@legalzone.vn"
                    className="flex items-center mb-3"
                >
                    <img src="https://ttpl.vn/assets/images/mobile/Icon-feather-mail.png" />
                    <span className="ml-5 text-xs">support@legalzone.vn</span>
                </Link>
            </div>
        </div>
    );
}

export default Index;
