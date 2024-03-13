"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "antd";
import Sider from "antd/es/layout/Sider";

import { apiGetListMostViewArticle } from "@/src/api/home-page";
import { Article } from "../common";
import FreeContent from "./FreeContent";
import BasicContent from "./BasicContent";
import Pro1Content from "./Pro1Content";
import DiamondContent from "./DiamondContent";
import CrownIcon from "../common/icons/CrownIcon";

const dataPremium = [
    {
        id: 1,
        title: "Xem toàn bộ thủ tục hành chính Online",
        bgColor: "#83C340",
        name: "Gói Free",
        promotional_price: 0,
        cost: 0,
        dataContent: <FreeContent />,
    },
    {
        id: 2,
        title: "Thành viên Basic được nhận các quyền lợi của thành viên Free và thêm",
        bgColor: "#E18A00",
        name: "Gói Basic",
        promotional_price: 80000,
        cost: 100000,
        dataContent: <BasicContent />,
    },
    {
        id: 3,
        title: "Thành viên LZ PRO 1 được nhận các quyền lợi của thành viên BASIC và thêm",
        bgColor: "#83C340",
        name: "LGZ Pro 1",
        promotional_price: 0,
        cost: 200000,
        dataContent: <Pro1Content />,
    },
    {
        id: 4,
        title: "Thành viên LGZ DIAMON được nhận các quyền lợi của thành viên LGZ PRO 1 và thêm",
        bgColor: "#83C340",
        name: "LGZ Diamond",
        promotional_price: 0,
        cost: 510000,
        dataContent: <DiamondContent />,
    },
];

function PremiumPage() {
    const [listArticle, setListArticle] = useState<Array<any>>([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        (async () => {
            const dataRes = await apiGetListMostViewArticle();
            if (dataRes.status) {
                setListArticle(dataRes.data);
            }
        })();
    }, []);

    return (
        <>
            <div className="bg-white rounded-lg mx-4 w-full p-4">
                <Link href="/">
                    <div className="flex items-center pt-2 pb-4">
                        <Image
                            src="/images/icons/left-arrow.png"
                            alt="back"
                            width={28}
                            height={28}
                        />
                        <span className="ml-3 text-3xl text-black hover:text-black font-semibold">
                            Gói Premium
                        </span>
                    </div>
                </Link>

                <Row gutter={16}>
                    {dataPremium.map((item) => (
                        <Col
                            key={item.id}
                            span={6}
                            onClick={() => setActiveTab(item.id)}
                            className="cursor-pointer"
                        >
                            <div
                                className="w-full h-60 text-white p-4 rounded-lg relative"
                                style={{ background: item.bgColor }}
                            >
                                <div className="absolute bottom-4 left-4">
                                    <CrownIcon
                                        bgColor="#fff"
                                        width="37px"
                                        height="37px"
                                    />
                                    <span className="font-semibold uppercase text-2xl">
                                        {item.name}
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    color:
                                        activeTab === item.id
                                            ? "black"
                                            : "#A1A5AC",
                                }}
                                className="line-clamp-2"
                            >
                                {item.title}
                            </div>

                            {/* price */}
                            <div className="flex text-base mt-1 hover:text-[#F58533]">
                                <span
                                    className="mr-1 font-bold"
                                    style={{
                                        color:
                                            activeTab === item.id
                                                ? "var(--primary-color)"
                                                : "#A1A5AC",
                                    }}
                                >
                                    {item.promotional_price}vnd
                                </span>
                                <span
                                    className="text-sm line-through"
                                    style={{ color: "#898A8D" }}
                                >
                                    {item.cost}vnd
                                </span>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="px-4">{dataPremium[activeTab - 1]?.dataContent}</div>
            </div>

            <Sider
                width={320}
                style={{
                    backgroundColor: "#fff",
                    position: "sticky",
                }}
                className="h-full px-4 py-2 rounded-lg fixed-height"
            >
                <div className="font-medium text-lg">
                    Bài viết được xem nhiều nhất
                </div>
                {listArticle.length > 0 &&
                    listArticle.map((item) => (
                        <Article article={item} key={item.id} />
                    ))}
            </Sider>
        </>
    );
}

export default PremiumPage;
