"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Button, Form, Select, Input } from "antd";

import ImageLegacy from "next/legacy/image";
import ContentFAQ from "./ContentFAQ";
import ContenUserQ from "./ContentUserQ";

enum TypeQA {
    QA_FAQ = 1,
    QA_USER,
    QA_FREE,
    QA_VIP,
}
const navbarArr = [
    { name: "Danh sách câu hỏi", tabActive: 1 },
    { name: "Đặt câu hỏi với luật sư", tabActive: 2 },
];

function Index() {
    const [form] = Form.useForm();
    const [activeNav, setActiveNav] = useState(1);

    const [childTabs, setChildTabs] = useState([
        {
            name: "Câu hỏi FAQ",
            tabActive: TypeQA.QA_FAQ,
        },
        {
            name: "Câu hỏi người dùng",
            tabActive: TypeQA.QA_USER,
        },
    ]);
    const [activeQuesListChildTab, setActiveQuesListChildTab] = useState(0);
    const [activeQuesToLawyerChildTab, setActiveQuesToLawyerChildTab] =
        useState(0);

    const handleChangeNav = (tabActive: number) => {
        setActiveNav(tabActive);

        if (tabActive === 1) {
            setChildTabs([
                {
                    name: "Câu hỏi FAQ",
                    tabActive: TypeQA.QA_FAQ,
                },
                {
                    name: "Câu hỏi người dùng",
                    tabActive: TypeQA.QA_USER,
                },
            ]);
        } else if (tabActive === 2) {
            setChildTabs([
                {
                    name: "Đặt câu hỏi miễn phí",
                    tabActive: TypeQA.QA_FREE,
                },
                {
                    name: "Đặt câu hỏi VIP",
                    tabActive: TypeQA.QA_VIP,
                },
            ]);
        }
    };

    const renderContent = useMemo(() => {
        if (activeNav === 1) {
            switch (activeQuesListChildTab) {
                case TypeQA.QA_FAQ:
                    return <ContentFAQ />;
                case TypeQA.QA_USER:
                    return <ContenUserQ />;
            }
        } else if (activeNav === 2) {
            switch (activeQuesToLawyerChildTab) {
                case TypeQA.QA_FREE:
                    return (
                        <div className="w-full">
                            <Form
                                form={form}
                                name="validateOnly"
                                layout="vertical"
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="title"
                                    label="Tiêu đề câu hỏi"
                                    rules={[{ required: true }]}
                                >
                                    <Input size="large" />
                                </Form.Item>
                                <Form.Item
                                    name="content"
                                    label="Nội dung câu hỏi"
                                    rules={[{ required: true }]}
                                >
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item
                                    name="major"
                                    label="Lĩnh vực quan tâm"
                                    rules={[{ required: true }]}
                                >
                                    <Select
                                        size="large"
                                        defaultValue="Chọn lĩnh vực"
                                        options={[
                                            {
                                                value: "Chọn lĩnh vực",
                                                label: "Chọn lĩnh vực",
                                            },
                                            {
                                                value: "Lao động - Tiền lương",
                                                label: "Lao động - Tiền lương",
                                            },
                                            {
                                                value: "Quyền dân sự",
                                                label: "Quyền dân sự",
                                            },
                                            {
                                                value: "Vi phạm hành chính",
                                                label: "Vi phạm hành chính",
                                            },
                                        ]}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="address"
                                    label="Bạn muốn tìm luật sư ở khu vực nào"
                                    rules={[{ required: true }]}
                                >
                                    <Select
                                        size="large"
                                        defaultValue="Tỉnh/Thành phố"
                                        options={[
                                            {
                                                value: "Tỉnh/Thành phố",
                                                label: "Tỉnh/Thành phố",
                                            },
                                            { value: "hni", label: "Hà Nội" },
                                            {
                                                value: "hcm",
                                                label: "Hồ Chí Minh",
                                            },
                                            {
                                                value: "ang",
                                                label: "An Giang",
                                            },
                                        ]}
                                    />
                                </Form.Item>
                                <Form.Item className="pt-10">
                                    <div className="flex items-center flex-col gap-4">
                                        <Button
                                            style={{
                                                height: "54px",
                                                width: "100%",
                                                borderRadius: "30px",
                                                color: "white",
                                                backgroundColor: "#4755D4",
                                            }}
                                            size="large"
                                        >
                                            Gửi câu hỏi
                                        </Button>
                                        <Button
                                            style={{
                                                height: "54px",
                                                width: "100%",
                                                borderRadius: "30px",
                                                color: "white",
                                                backgroundColor: "#4755D4",
                                            }}
                                            size="large"
                                        >
                                            Hướng dẫn sử dụng
                                        </Button>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    );
                case TypeQA.QA_VIP:
                    return (
                        <div>
                            <div
                                className="relative"
                                style={{ paddingTop: "62.5%" }}
                            >
                                <ImageLegacy
                                    src="https://ttpl.vn/assets/images/icon/icon_nang_cap.png"
                                    alt="upgrade"
                                    layout="fill"
                                    className="absolute"
                                />
                            </div>
                            <div className="text-center my-4">
                                <p className="text-sm mt-1">
                                    Bạn vui lòng nâng cấp tài khoản để sử dụng
                                    tính năng này!
                                </p>
                                <Link href="/mobile/premium">
                                    <Button
                                        style={{
                                            height: "48px",
                                            borderRadius: "24px",
                                            color: "#fff",
                                            backgroundColor: "#4755D4",
                                            margin: 4,
                                            fontWeight: "600",
                                        }}
                                        size="large"
                                    >
                                        Nâng cấp tài khoản
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    );
            }
        }
    }, [activeNav, activeQuesListChildTab, activeQuesToLawyerChildTab]);

    return (
        <div>
            {/* Contact */}
            <a href="tel: 0888888888" className="fixed bottom-6 left-4 z-[2] ">
                <div className="flex w-28 h-9 bg-[--primary-color] rounded-3xl items-center justify-left pl-2">
                    <Image
                        src="/images/introduce/phone.png"
                        alt="phone"
                        className="pr-1"
                        width={20}
                        height={16}
                    />
                    <span className="text-white text-xs">0888888888</span>
                </div>
            </a>

            {/* Header */}
            <div
                className="
                    p-4 
                    flex items-center 
                    text-xl font-bold text-[#262C41]
                    border-b-[1px] border-solid border-[#F1F1F1]
                "
            >
                <Link href="/mobile">
                    <Image
                        className="mr-2"
                        src="/images/icons/left-arrow.png"
                        alt=""
                        width={20}
                        height={20}
                    />
                </Link>
                Hỏi đáp pháp luật
            </div>

            {/* Content */}
            <>
                {/* nav tab */}
                <div
                    className="
                        p-4 
                        text-sm font-bold
                        flex items-center justify-between 
                        border-solid border-b-[1px] border-[#F1F1F1]
                    "
                >
                    {navbarArr.map((item) => (
                        <nav
                            key={item.name}
                            className="rounded-lg py-2 px-4 flex items-center"
                            onClick={() => handleChangeNav(item.tabActive)}
                            style={{
                                color:
                                    activeNav === item.tabActive
                                        ? "#4755D4"
                                        : "#262C41",
                                backgroundColor:
                                    activeNav === item.tabActive
                                        ? "rgba(71, 85, 212, 0.1)"
                                        : "#F4F5F8",
                            }}
                        >
                            {item.name}
                        </nav>
                    ))}
                </div>

                {/* child nav tab */}
                <div
                    className="
                        px-7 
                        text-sm font-bold text-[#B5B9C7]
                        flex items-center justify-between
                    "
                >
                    {childTabs.map((item) => (
                        <nav
                            key={item.name}
                            className="py-2 flex items-center border-b-4 border-solid rounded-sm"
                            onClick={() => {
                                activeNav === 1
                                    ? setActiveQuesListChildTab(item.tabActive)
                                    : setActiveQuesToLawyerChildTab(
                                          item.tabActive
                                      );
                            }}
                            style={{
                                color:
                                    activeQuesListChildTab === item.tabActive ||
                                    activeQuesToLawyerChildTab ===
                                        item.tabActive
                                        ? "#4755D4"
                                        : "#B5B9C7",
                                borderColor:
                                    activeQuesListChildTab === item.tabActive ||
                                    activeQuesToLawyerChildTab ===
                                        item.tabActive
                                        ? "#4755D4"
                                        : "#fff",
                            }}
                        >
                            {item.name}
                        </nav>
                    ))}
                </div>
            </>

            <div className="qa-list p-4">{renderContent}</div>
        </div>
    );
}

export default Index;
