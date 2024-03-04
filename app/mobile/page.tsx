"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { apiGetListProcedure } from "@/src/api/procedure";

import Header from "@/src/components/mobile/header/Header";
import Slider from "@/src/components/mobile/slider/Slider";
import Footer from "@/src/components/mobile/footer/Footer";

import ProcedureModel from "@/src/models/Procedure";
import ProcedureItem from "@/src/components/mobile/procedure-item/ProcedureItem";
import Link from "next/link";

function Index() {
    const dataSlider = [
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

    const [listArticle, setListArticle] = useState<Array<ProcedureModel>>([]);

    useEffect(() => {
        (async () => {
            const dataRes = await apiGetListProcedure({ page: 1 });
            if (dataRes.status) {
                setListArticle(dataRes.data);
            }
        })();
    }, []);

    return (
        <>
            <Header />

            {/* Content legalzone */}
            <div className="m-4 mt-0 pt-[100px]">
                {/* Search component */}
                <div className="flex relative w-full h-10 mb-4">
                    <img
                        src="/images/icons/Search.png"
                        className="absolute w-5 h-4 left-4 top-3"
                    />
                    <input
                        placeholder="Tìm kiếm"
                        className="w-full h-full text-sm bg-[#F4F5F8]"
                        style={{ paddingLeft: 48, borderRadius: "5px" }}
                    />
                </div>

                <Slider data={dataSlider} />

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
                    <Slider data={dataSlider} />
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
                        <Link
                            href="mobile/thu-tuc"
                            className="text-sm text-[--primary-color]"
                        >
                            Xem tất cả
                        </Link>
                    </div>

                    {listArticle.map((article) => (
                        <ProcedureItem key={article.id} procedure={article} />
                    ))}
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
                            src="/images/introduce/phone.png"
                            alt="phone"
                            className="w-5 h-4 pr-1"
                        />
                        <span className="text-white text-xs">0888888888</span>
                    </div>
                </Link>
            </div>

            <Footer />
        </>
    );
}

export default Index;
