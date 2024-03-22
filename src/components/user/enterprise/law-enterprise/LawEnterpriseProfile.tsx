"use client";
import { useState } from "react";
import Image from "next/image";
import { Button, Input, Select, Typography } from "antd";
import { useAppSelector } from "@/src/redux/hooks";

function LawEnterpriseProfile() {
    const { user } = useAppSelector((state) => state.authState);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="mb-4 p-4 bg-white rounded-lg">
            <div className="flex justify-between items-center">
                <Typography.Title level={4}>Hồ sơ công ty</Typography.Title>
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
                    onClick={() => setIsEditing(true)}
                />
            </div>

            <ul className="list-disc list-inside">
                <li className={`${isEditing ? "flex justify-between" : ""}`}>
                    <span className="text-[#8A8A8A] font-bold">
                        Tên công ty:
                    </span>
                    <Input
                        placeholder={isEditing ? "Nhập họ và tên" : ""}
                        defaultValue={user?.full_name}
                        disabled={!isEditing}
                        variant={isEditing ? "outlined" : "borderless"}
                        style={{
                            color: "#000",
                            width: "80%",
                            marginBottom: isEditing ? 12 : 0,
                        }}
                    />
                </li>
                <li className={`${isEditing ? "flex justify-between" : ""}`}>
                    <span className="text-[#8A8A8A] font-bold">
                        Loại hình công ty:
                    </span>
                    <Select
                        placeholder={isEditing ? "Thêm loại hình" : ""}
                        // defaultValue={user?.full_name}
                        disabled={!isEditing}
                        variant={isEditing ? "filled" : "borderless"}
                        style={{
                            color: "#000",
                            width: "80%",
                            marginBottom: isEditing ? 12 : 0,
                        }}
                    />
                </li>
                <li className={`${isEditing ? "flex justify-between" : ""}`}>
                    <span className="text-[#8A8A8A] font-bold">
                        Thị trường chính:
                    </span>
                    <Select
                        placeholder={isEditing ? "Thêm thị trường" : ""}
                        // defaultValue={user?.full_name}
                        disabled={!isEditing}
                        variant={isEditing ? "filled" : "borderless"}
                        style={{
                            color: "#000",
                            width: "80%",
                            marginBottom: isEditing ? 12 : 0,
                        }}
                    />
                </li>
                <li className={`${isEditing ? "flex justify-between" : ""}`}>
                    <span className="text-[#8A8A8A] font-bold">
                        Mã số thuế:
                    </span>
                    <Input
                        placeholder={isEditing ? "Nhập mã số thuế" : ""}
                        // defaultValue={user?.full_name}
                        disabled={!isEditing}
                        variant={isEditing ? "outlined" : "borderless"}
                        style={{
                            color: "#000",
                            width: "80%",
                            marginBottom: isEditing ? 12 : 0,
                        }}
                    />
                </li>
                <li className={`${isEditing ? "flex justify-between" : ""}`}>
                    <span className="text-[#8A8A8A] font-bold">
                        Năm thành lập:
                    </span>
                    <Input
                        placeholder={isEditing ? "Nhập năm thành lập" : ""}
                        // defaultValue={user?.full_name}
                        disabled={!isEditing}
                        variant={isEditing ? "outlined" : "borderless"}
                        style={{
                            color: "#000",
                            width: "80%",
                            marginBottom: isEditing ? 12 : 0,
                        }}
                    />
                </li>
                <li className={`${isEditing ? "flex justify-between" : ""}`}>
                    <span className="text-[#8A8A8A] font-bold">
                        Người đại diện:
                    </span>
                    <Input
                        placeholder={isEditing ? "Nhập người đại diện" : ""}
                        // defaultValue={user?.full_name}
                        disabled={!isEditing}
                        variant={isEditing ? "outlined" : "borderless"}
                        style={{
                            color: "#000",
                            width: "80%",
                            marginBottom: isEditing ? 12 : 0,
                        }}
                    />
                </li>
                <li className={`${isEditing ? "flex justify-between" : ""}`}>
                    <span className="text-[#8A8A8A] font-bold">
                        Số điện thoại liên hệ:
                    </span>
                    <Input
                        placeholder={
                            isEditing ? "Nhập số điện thoại liên hệ" : ""
                        }
                        // defaultValue={user?.full_name}
                        disabled={!isEditing}
                        variant={isEditing ? "outlined" : "borderless"}
                        style={{
                            color: "#000",
                            width: "80%",
                            marginBottom: isEditing ? 12 : 0,
                        }}
                    />
                </li>
            </ul>

            {isEditing && (
                <div className="flex items-center justify-center mt-4">
                    <button
                        className="rounded px-4 py-2 mx-2 font-semibold text-black bg-[#F7F7F7] "
                        onClick={() => setIsEditing(false)}
                    >
                        Hủy
                    </button>
                    <button
                        className="rounded px-4 py-2 mx-2 font-semibold text-white bg-[#F58533] "
                        // onClick={() => setIsEditing(false)}
                    >
                        Lưu
                    </button>
                </div>
            )}
        </div>
    );
}

export default LawEnterpriseProfile;
