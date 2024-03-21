"use client";

import { useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/src/redux/hooks";
import { Row, Col, Typography, Button, Input } from "antd";

import { Post } from "@/src/components/common";
import ArticleModel from "@/src/models/Article";
import ModalPost from "@/src/components/modal/ModalPost";
import UserPost from "@/src/components/common/home-page/UserPost";
import {
    ModalEditContactInfo,
    ModalEditFieldActivity,
} from "@/src/components/modal";

function LawCompanyPost({
    listPost,
    showPost = true,
    onLoadMore,
}: {
    listPost: Array<ArticleModel>;
    showPost?: boolean;
    onLoadMore?: () => void;
}) {
    const { user, token } = useAppSelector((state) => state.authState);
    const [openModalPost, setOpenModalPost] = useState(false);
    const [editContactInfo, setEditContactInfo] = useState(false);
    const [editFieldActivity, setEditFieldActivity] = useState(false);

    return (
        <Row gutter={16}>
            <Col span={8}>
                <div className="mb-4 p-4 bg-white rounded-lg">
                    <Typography.Title level={5}>
                        Tìm kiếm công ty Luật/ Doanh nghiệp
                    </Typography.Title>
                    <Input
                        prefix={
                            <Image
                                src="/images/icons/search.png"
                                alt="search"
                                width={20}
                                height={20}
                            />
                        }
                        width={"100%"}
                        placeholder="Tìm kiếm"
                    />
                </div>

                <div className="mb-4 p-4 bg-white rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-col font-semibold text-lg">
                            Thông tin liên hệ
                        </div>
                        <Button
                            type="text"
                            icon={
                                <Image
                                    src="/images/icons/pencil.png"
                                    alt="edit"
                                    width={24}
                                    height={24}
                                />
                            }
                            onClick={() => setEditContactInfo(true)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="my-2 flex items-center">
                            <div className="flex">
                                <Image
                                    src="https://ttpl.vn/assets/images/myprofile/Call.png"
                                    alt="phone"
                                    width={22}
                                    height={22}
                                />
                                <span className="mx-1">Điện thoại:</span>
                            </div>
                            <span className="font-bold ">{user?.phone}</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <div className="flex">
                                <Image
                                    src="https://ttpl.vn/assets/images/myprofile/phone1.png"
                                    alt="alternative_phone"
                                    width={22}
                                    height={22}
                                />
                                <span className="mx-1">Di động:</span>
                            </div>
                            <span className="font-bold ">
                                {user?.alternative_phone}
                            </span>
                        </div>
                        <div className="my-2 flex items-center">
                            <div className="flex">
                                <Image
                                    src="https://ttpl.vn/assets/images/myprofile/Message.png"
                                    alt="email"
                                    width={22}
                                    height={22}
                                />
                                <span className="mx-1">Email:</span>
                            </div>
                            <span className="font-bold ">{user?.email}</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <div className="flex">
                                <Image
                                    src="https://ttpl.vn/assets/images/myprofile/Location1.png"
                                    alt="address"
                                    width={22}
                                    height={22}
                                />
                                <span className="mx-1">Địa chỉ:</span>
                            </div>
                            <span className="font-bold ">{user?.address}</span>
                        </div>
                    </div>
                </div>

                <div className="mb-4 p-4 bg-white rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-col font-semibold text-lg">
                            Lĩnh vực hoạt động
                        </div>
                        <Button
                            type="text"
                            icon={
                                <Image
                                    src="/images/icons/pencil.png"
                                    alt="edit"
                                    width={24}
                                    height={24}
                                />
                            }
                            onClick={() => setEditFieldActivity(true)}
                        />
                    </div>
                </div>
            </Col>
            <Col span={16}>
                {showPost && (
                    <div className="mb-4 p-4 bg-white rounded-lg">
                        <UserPost onOpenModal={() => setOpenModalPost(true)} />
                    </div>
                )}
                <div className="p-4 rounded-lg">
                    {listPost?.length > 0 && (
                        <>
                            {listPost.map((item) => (
                                <Post
                                    post={new ArticleModel(item)}
                                    key={item.title}
                                />
                            ))}
                            <div className="flex items-center justify-center py-5">
                                <button
                                    className="
                                        py-2 px-3
                                        text-[var(--primary-color)] 
                                        font-bold 
                                        bg-[#FFF0E6] 
                                    "
                                    onClick={onLoadMore}
                                >
                                    Xem thêm
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </Col>

            <ModalPost
                open={openModalPost}
                onCancel={() => setOpenModalPost(false)}
            />

            <ModalEditContactInfo
                open={editContactInfo}
                onCancel={() => setEditContactInfo(false)}
            />
            <ModalEditFieldActivity
                open={editFieldActivity}
                onCancel={() => setEditFieldActivity(false)}
            />
        </Row>
    );
}

export default LawCompanyPost;
