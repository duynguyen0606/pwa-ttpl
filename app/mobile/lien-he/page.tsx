import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";
import Link from "next/link";

function Index() {
    return ( 
        <CanBackLayout back="/mobile/sidebar" title="Liên hệ">
            <div className="px-4 py-5 text-[#262C41]">
                <div className="text-[20px] font-bold mb-3">
                    Thông tin liên hệ
                </div>

                {/* Item */}
                <div>
                    {/* Title item */}
                    <div className="text-sm font-bold mb-2">
                        Giờ làm việc
                    </div>

                    {/* Content item */}
                    <div className="text-sm text-[#686E7E]">
                        <ul className="list-disc pl-5 mb-2">
                            <li>8:00 đến 17:30</li>
                            <li>Từ thứ 2 đến thứ 6 hàng tuần</li>
                            <li>Hotline tư vấn: 0984 171 182</li>
                        </ul>
                    </div>
                </div>

                <div>
                    {/* Title item */}
                    <div className="text-sm font-bold mb-2">
                        Địa chỉ trụ sở chính
                    </div>

                    {/* Content item */}
                    <div className="text-sm text-[#686E7E]">
                        <ul className="list-disc pl-5 mb-2">
                            <li>Số 23, ngõ 55, đường Thanh Lân, quận Hoàng Mai, Hà Nội</li>
                        </ul>
                    </div>
                </div>

                <div>
                    {/* Title item */}
                    <div className="text-sm font-bold mb-2">
                        Email
                    </div>

                    {/* Content item */}
                    <div className="text-sm text-[#686E7E]">
                        <ul className="list-disc pl-5 mb-2">
                            <li>support@legalzone.com</li>
                        </ul>
                    </div>
                </div>

                <div>
                    {/* Title item */}
                    <div className="text-sm font-bold mb-2">
                        Điện thoại
                    </div>

                    {/* Content item */}
                    <div className="text-sm text-[#686E7E]">
                        <ul className="list-disc pl-5 mb-2">
                            <li>0888 889 366</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Link
                    href="tel: 0888888888"
                    className="fixed bottom-16 left-4 z-[2] "
                >
                    <div
                        className="
                            flex items-center justify-left
                            pl-2
                            w-28 h-9 
                            bg-[--primary-color] 
                            rounded-3xl  
                        "
                    >
                        <img
                            src="https://ttpl.vn/assets/images/icon/phone.png"
                            alt="phone"
                            className="w-5 h-4 pr-1"
                        />
                        <span className="text-white text-xs">0888888888</span>
                    </div>
                </Link>
        </CanBackLayout>
     );
}

export default Index;