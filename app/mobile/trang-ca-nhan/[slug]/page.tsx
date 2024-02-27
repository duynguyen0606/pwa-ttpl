"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Divider, Input, Skeleton } from "antd";
import Image from "next/image";
import { ModalInfoRate } from "@/src/components/modal";
import PostItem from "@/src/components/mobile/post-item/PostItem";
import ArticleModel from "@/src/models/Article";
// import { apiGetPostByUser } from "@/src/api/user";

const tabs = [
    { name: "Bài viết", tabActive: 1 },
    { name: "Video", tabActive: 2 },
    { name: "Theo dõi", tabActive: 3 },
];

const followTabs = [
    { name: "Người theo dõi", childTabActive: 1 },
    { name: "Đang theo dõi", childTabActive: 2 },
];

function Index({ params }: { params: { slug: string } }) {
    // Lấy ID user
    const { slug } = params;

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [listPost, setListPost] = useState<Array<ArticleModel>>([]);

    // useEffect(() => {
    //     (async () => {
    //         const dataRes = await apiGetPostByUser({ page: 1, userID: slug });
    //         console.log(dataRes);

    //         if (dataRes.status) {
    //             setListPost(dataRes.data);
    //         }
    //     })();
    // }, []);

    const [showInfoRate, setShowInfoRate] = useState(false);
    const [activeTab, setActiveTab] = useState(1);
    const [childTab, setChildTab] = useState(1);

    const renderContent = useMemo(() => {
        if (activeTab === 1) {
            return (
                <div>
                    {/* Search container */}
                    <div
                        className="
                            mb-3 
                            py-3 px-2 
                            bg-white 
                            rounded-lg
                        "
                    >
                        <span className="text-xs text-[#444] font-bold">
                            Tìm kiếm công ty Luật/ Doanh nghiệp
                        </span>

                        <div className="flex justify-center pt-2">
                            <Input
                                size="middle"
                                placeholder="Tìm kiếm"
                                prefix={
                                    <Image
                                        src="/images/icons/search.png"
                                        alt="search-icon"
                                        width={20}
                                        height={20}
                                    />
                                }
                                alt="search-icon"
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>

                    {/* Follower container */}
                    <div
                        className="
                            flex justify-between items-center 
                            py-3 px-2 
                            mb-3 
                            bg-white 
                            rounded-lg
                        "
                    >
                        <div>
                            <div className="text-xs text-[#444] font-bold">
                                Người theo dõi
                            </div>
                            <div className="text-[10px] text-[#898A8D]">
                                0 người
                            </div>
                        </div>
                        <div
                            className="text-[10px] text-[#898A8D]"
                            onClick={() => {
                                setActiveTab(3);
                                setChildTab(1);
                            }}
                        >
                            Xem tất cả
                        </div>
                    </div>

                    {/* Following container */}
                    <div
                        className="
                            flex justify-between items-center 
                            py-3 px-2 
                            mb-3 
                            bg-white 
                            rounded-lg
                        "
                    >
                        <div>
                            <div className="text-xs text-[#444] font-bold">
                                Đang theo dõi
                            </div>
                            <div className="text-[10px] text-[#898A8D]">
                                0 người
                            </div>
                        </div>
                        <div
                            className="text-[10px] text-[#898A8D]"
                            onClick={() => {
                                setActiveTab(3);
                                setChildTab(2);
                            }}
                        >
                            Xem tất cả
                        </div>
                    </div>

                    {/* Post container */}
                    <div className="py-2 bg-[#F4F5F8]">
                        {listPost.length > 0 ? (
                            listPost.map((post) => (
                                <PostItem key={post.id} post={post} />
                            ))
                        ) : (
                            <h2>Chưa có bài viết để hiển thị</h2>
                        )}
                    </div>
                </div>
            );
        } else if (activeTab === 2) {
            return (
                <div className="flex bg-white rounded-lg">
                    <h2 className="p-4">Chưa có video để hiển thị</h2>
                </div>
            );
        } else if (activeTab === 3) {
            return (
                <div className="bg-white">
                    <div
                        className="
                            flex 
                            text-[10px] font-bold
                            bg-white 
                            rounded-lg
                        "
                    >
                        {followTabs.map((item) => (
                            <nav
                                key={item.childTabActive}
                                className="flex justify-center items-center w-full h-8"
                                onClick={() => setChildTab(item.childTabActive)}
                                style={{
                                    color:
                                        childTab === item.childTabActive
                                            ? "var(--primary-color)"
                                            : "#A1A5AC",
                                    backgroundColor:
                                        childTab === item.childTabActive
                                            ? "#FCF3EC"
                                            : "#FFF",
                                }}
                            >
                                {item.name}
                            </nav>
                        ))}
                    </div>

                    {childTab === 1 && <div>follower</div>}

                    {childTab === 2 && <div>following</div>}
                </div>
            );
        }
    }, [listPost, activeTab, childTab]);

    return (
        <div className="flex-1 px-3 flex w-full h-[100vh] flex-col bg-[#F7F7F7]">
            {/* Top content */}
            <div className="bg-white">
                {/* background */}
                <div className="relative text-center">
                    <img
                        className="w-full object-cover max-h-[340px]"
                        src="https://ttpl.vn/assets/images/myprofile/anh-bia.png"
                        alt="anh bia"
                    />

                    {/* avatar */}
                    <div
                        className="
                            w-24 h-24 
                            flex justify-center items-center 
                            absolute 
                            right-1/2 translate-x-2/4 
                            bg-white 
                            rounded-full
                        "
                        style={{ bottom: "-1.2rem" }}
                    >
                        <img
                            className="w-20 h-20"
                            src="https://ttpl.vn/assets/images/logo/logo-legalzone.png"
                            alt="avatar"
                        />
                    </div>
                </div>

                {/* name & rating */}
                <div className="relative text-center mt-5 py-2 border-b-[1px] border-solid">
                    <span
                        className="
                            inline-flex items-center 
                            text-xl font-bold text-[#444]
                        "
                    >
                        Phạm Diễm Thư
                    </span>
                    <div className="mt-1 flex items-center justify-center text-[#4061AB]">
                        <span>Điểm thưởng:</span>
                        <span className="text-sm font-bold mx-1">200</span>
                        <button
                            className="bg-white"
                            onClick={() => setShowInfoRate(true)}
                        >
                            <img src="https://ttpl.vn/assets/images/myprofile/Info-Circle.png" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Middle-header */}
            <div className="bg-white rounded-b-lg">
                {/* nav tabs */}
                <div className="flex justify-center items-center">
                    {tabs.map((tab) => (
                        <nav
                            key={tab.tabActive}
                            className="text-xs font-bold p-2.5"
                            onClick={() => setActiveTab(tab.tabActive)}
                            style={{
                                color:
                                    activeTab === tab.tabActive
                                        ? "var(--primary-color)"
                                        : "#A1A5AC",
                            }}
                        >
                            {tab.name}
                        </nav>
                    ))}
                </div>
            </div>

            <ModalInfoRate
                open={showInfoRate}
                onCancel={() => setShowInfoRate(false)}
            />

            {/* Content */}
            <div className="mt-2">{renderContent}</div>
        </div>
    );
}

export default Index;