"use client";

import { useState } from "react";
import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";
import BasicContent from "@/src/components/premium/BasicContent";
import FreeContent from "@/src/components/premium/FreeContent";
import Pro1Content from "@/src/components/premium/Pro1Content";
import DiamondContent from "@/src/components/premium/DiamondContent";
import { Drawer, DrawerProps } from "antd";
import Image from "next/image";

const tabs = [
    {
        id: 1,
        name: "Gói Free",
        dataContent: <FreeContent />,
    },
    {
        id: 2,
        name: "Gói Basic",
        dataContent: <BasicContent />,
    },
    {
        id: 3,
        name: "LGZ PRO 1",
        dataContent: <Pro1Content />,
    },
    {
        id: 4,
        name: "LGZ Diamond",
        dataContent: <DiamondContent />,
    },
];

function Index() {
    const [activeTab, setActiveTab] = useState(1);
    const [showModal, setShowModal] = useState(false);

    return (
        <CanBackLayout back="/mobile/homepage/user" title="Các gói dịch vụ">
            <div className="px-3">
                {/* nav tabs */}
                <div className="flex justify-center items-center text-sm">
                    {tabs.map((tab) => (
                        <nav
                            key={tab.name}
                            className="mx-2 py-1.5 uppercase border-b-4 font-medium"
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                color:
                                    tab.id === activeTab
                                        ? "var(--secondary-color)"
                                        : "#B5B9C7",
                                borderColor:
                                    tab.id === activeTab
                                        ? "var(--secondary-color)"
                                        : "#FFF",
                            }}
                        >
                            {tab.name}
                        </nav>
                    ))}
                </div>
                <div className="mt-4 pb-16">
                    {tabs[activeTab - 1]?.dataContent}
                </div>
            </div>

            {/* button */}
            <div
                className="
                    fixed
                    bottom-0 left-0
                    flex items-center justify-center
                    w-full h-[104px]
                    bg-white
                "
            >
                <button
                    className="
                        w-[90%] h-[56px]
                        bg-[#4755D4] 
                        text-base text-[#FCFCFE] font-bold
                        rounded-lg
                    "
                    onClick={() => setShowModal(true)}
                >
                    Đăng ký gói
                </button>
            </div>

            <ModalBuyPremium
                open={showModal}
                onClose={() => setShowModal(false)}
            />
        </CanBackLayout>
    );
}

function ModalBuyPremium(props: DrawerProps) {
    const { open, onClose } = props;
    const [active, setActive] = useState(false);
    const [guide, setGuide] = useState(false);
    return (
        <Drawer
            open={open}
            onClose={onClose}
            closeIcon={null}
            placement="bottom"
            title={
                guide
                    ? "Hướng dẫn cách mua gói"
                    : "Bạn muốn áp dụng gói cho công ty nào ?"
            }
            className="rounded-t-[40px]"
        >
            {guide ? (
                <ShoppingGuide onClickBack={() => setGuide(false)} />
            ) : (
                <div className="flex flex-col items-center mb-4 text-base">
                    <div
                        className="flex items-center text-base w-full p-2 rounded-lg"
                        style={{
                            color: active ? "var(--secondary-color)" : "black",
                            backgroundColor: active ? "#F0F1FC" : "white",
                            border: active ? "1px solid #E6E7EA" : "none,",
                        }}
                        onClick={() => setActive(!active)}
                    >
                        <Image
                            className="mr-3 rounded-full"
                            width={40}
                            height={40}
                            src="https://ttpl.vn/files/system/_file64b792e27abc0-site-logo.png"
                            alt=""
                        />
                        <span className="uppercase">Công ty mẫu</span>
                    </div>

                    <div className="flex mt-4">
                        <button className="text-white font-semibold bg-[--secondary-color] w-[162px] h-[56px] rounded-xl mx-1.5">
                            Đăng ký gói
                        </button>
                        <button
                            className="text-black font-semibold bg-[#EBEDF3] w-[162px] h-[56px] rounded-xl mx-1.5"
                            onClick={() => setGuide(true)}
                        >
                            Hướng dẫn mua
                        </button>
                    </div>
                </div>
            )}
        </Drawer>
    );
}

function ShoppingGuide({ onClickBack }: { onClickBack: () => void }) {
    return (
        <div>
            <p className="mb-3">
                Bước 1: Truy cập vào <br></br>
                <a>https://thutucphapluat.com/mobile/premium</a>
            </p>
            <p className="mb-3">
                Bước 2: Chọn <strong>gói Free</strong>
            </p>
            <p className="mb-3">
                Bước 3: Chọn <strong>Đăng ký gói</strong>
            </p>
            <p className="mb-3">Bước 4: Chọn Công ty muốn áp dụng</p>
            <button
                className=" mt-10 flex justify-center items-center w-full"
                onClick={onClickBack}
            >
                <Image
                    src="/images/icons/left-arrow.png"
                    alt="back"
                    width={24}
                    height={24}
                />
            </button>
        </div>
    );
}

export default Index;
