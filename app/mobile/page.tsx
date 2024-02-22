"use client";

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/src/redux/hooks";
import Header from "@/src/components/mobile/header/Header";
import Slider from "@/src/components/mobile/slider/Slider";
import Blog from "@/src/components/mobile/blog/Blog";
import Footer from "@/src/components/mobile/footer/Footer";

function Index() {
    const { user } = useAppSelector((state) => state.authState);
    const router = useRouter();
    const data = [
        {
            id: 0,
            img: "https://ttpl.vn/assets/images/banner/slide_home_mobile.png.webp",
        },
        {
            id: 1,
            img: "https://ttpl.vn/assets/images/banner/slide_home_mobile.png.webp",
        },
        {
            id: 2,
            img: "https://ttpl.vn/assets/images/banner/slide_home_mobile.png.webp",
        },
    ];
    
    return (
        <>
            <Header />

            {/* Content legalzone */}
            <div className="m-4 mt-0 pt-[100px]">
                {/* Search component */}
                <div className="flex relative w-full h-10 mb-4">
                    <img
                        src="https://ttpl.vn/assets/images/header/Search.png"
                        className="absolute w-4 h-4 left-4 top-3"
                    />
                    <input
                        placeholder="Tìm kiếm"
                        className="w-full h-full text-sm bg-[#F4F5F8]"
                        style={{ paddingLeft: 48, borderRadius: "5px" }}
                    />
                </div>

                <Slider data={data} />

                {/* Thủ tục mới nhất */}
                <div className="p-2 mt-2">
                    <div
                        className="
                            flex justify-between items-center 
                            text-base font-bold text-[#262C41]
                            pb-5
                        "
                    >
                        Thủ tục mới nhất
                    </div>
                    <Slider data={data} />
                </div>

                {/* Danh sách thủ tục */}
                <div className="p-2 pb-28">
                    <div
                        className="
                            flex justify-between items-center 
                            text-base font-bold text-[#262C41]
                        "
                    >
                        Danh sách thủ tục
                        <div
                            className="text-sm text-[--primary-color]"
                            onClick={() => router.push("/mobile/thu-tuc")}
                        >
                            Xem tất cả
                        </div>
                    </div>
                    <Blog />
                </div>

                <a
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
                </a>
            </div>

            <Footer />
        </>
    );
}

export default Index;
