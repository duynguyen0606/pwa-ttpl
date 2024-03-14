import { useAppSelector } from "@/src/redux/hooks";
import { Button, Input, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
    ModalAddCertificate,
    ModalAddEducation,
    ModalAddPrize,
    ModalAddWorkspace,
} from "../../modal";

function LawyerInfomation() {
    const { user } = useAppSelector((state) => state.authState);
    return (
        <div className="pb-10">
            <div className="my-4 p-4 bg-white rounded-lg">
                <Typography.Title level={4}>Liên hệ</Typography.Title>
                <InfoContact lawyer={user} />
            </div>
            <div className="my-4 p-4 bg-white rounded-lg">
                <div className="w-full flex justify-between">
                    <Typography.Title level={4}>
                        Giới thiệu về Luật sư
                    </Typography.Title>
                    <Button
                        type="text"
                        icon={
                            <Image
                                src="/images/icons/pencil.png"
                                alt="pencil"
                                width={24}
                                height={24}
                            />
                        }
                    />
                </div>
            </div>
            <div className="my-4 p-4 bg-white rounded-lg">
                <div className="w-full flex justify-between">
                    <Typography.Title level={4}>
                        Hình ảnh và video
                    </Typography.Title>
                    <Button
                        type="text"
                        icon={
                            <Image
                                src="/images/icons/pencil.png"
                                alt="pencil"
                                width={24}
                                height={24}
                            />
                        }
                    />
                </div>
            </div>
            <div className="my-4 p-4 bg-white rounded-lg">
                <Typography.Title level={4}>
                    Thông tin về luật sư
                </Typography.Title>
                <InfoLawyer lawyer={user} />
            </div>
            <div className="my-4 p-4 bg-white rounded-lg">
                <Typography.Title level={4}>Mức phí</Typography.Title>
                <InfoCharge lawyer={user} />
            </div>
        </div>
    );
}

function InfoContact({ lawyer }: { lawyer: any }) {
    return (
        <div className="flex pt-4">
            <div
                style={{
                    width: "50%",
                    height: 244,
                    backgroundColor: "red",
                }}
            >
                Google Map
            </div>
            <div className="ml-8">
                <div className="flex mb-4 text-base">
                    <label className="font-semibold text-black mr-1">
                        Địa chỉ văn phòng/ Công ty:
                    </label>
                    <p>{lawyer?.address}</p>
                </div>
                <div className="flex mb-4 text-base">
                    <label className="font-semibold text-black mr-1">
                        Điện thoại:
                    </label>
                    <p>{lawyer?.phone}</p>
                </div>
                <div className="flex mb-4 text-base">
                    <label className="font-semibold text-black mr-1">
                        Email:
                    </label>
                    <p>{lawyer?.email}</p>
                </div>
                <div className="flex mb-4 text-base">
                    <label className="font-semibold text-black mr-1">
                        Website:
                    </label>
                    <p>{lawyer?.website}</p>
                </div>
                <Link
                    href={`tel:${lawyer?.phone}`}
                    className="bg-[--primary-color] rounded-3xl flex justify-center items-center w-[160px] py-2"
                >
                    <Image
                        src="https://ttpl.vn/assets/images/myprofile/phone.png"
                        alt="phone"
                        width={24}
                        height={24}
                    />
                    <span className="text-lg text-white font-semibold ml-2">
                        {lawyer?.phone}
                    </span>
                </Link>
            </div>
        </div>
    );
}

function InfoLawyer({ lawyer }: { lawyer: any }) {
    const [openModalAddCertificate, setOpenModalAddCertificate] =
        useState(false);
    const [openModalAddPrize, setOpenModalAddPrize] = useState(false);
    const [openModalAddWorkspace, setOpenModalAddWorkspace] = useState(false);
    const [openModalAddEducation, setOpenModalAddEducation] = useState(false);

    const basicInfo = [
        {
            id: 1,
            name: "Công ty Luật đang làm việc",
            onclick: () => {},
        },
        {
            id: 2,
            name: "Chứng chỉ",
            data: Array<any>,
            onclick: () => setOpenModalAddCertificate(true),
        },
        {
            id: 3,
            name: "Giải thưởng",
            onclick: () => setOpenModalAddPrize(true),
        },
        {
            id: 4,
            name: "Nơi làm việc",
            onclick: () => setOpenModalAddWorkspace(true),
        },
        {
            id: 5,
            name: "Học vấn",
            onclick: () => setOpenModalAddEducation(true),
        },
    ];
    return (
        <div className="pt-4">
            {basicInfo.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center justify-between pb-5 my-2 border-b-[1px] border-[#F2F2F2]"
                >
                    <label className="font-semibold">{item.name}</label>
                    <Button
                        type="text"
                        icon={
                            <Image
                                src="/images/icons/pencil.png"
                                alt="pencil"
                                width={24}
                                height={24}
                            />
                        }
                        onClick={item.onclick}
                    />
                </div>
            ))}

            <ModalAddCertificate
                open={openModalAddCertificate}
                onCancel={() => setOpenModalAddCertificate(false)}
            />
            <ModalAddPrize
                open={openModalAddPrize}
                onCancel={() => setOpenModalAddPrize(false)}
            />
            <ModalAddWorkspace
                open={openModalAddWorkspace}
                onCancel={() => setOpenModalAddWorkspace(false)}
            />
            <ModalAddEducation
                open={openModalAddEducation}
                onCancel={() => setOpenModalAddEducation(false)}
            />
        </div>
    );
}

function InfoCharge({ lawyer }: { lawyer: any }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(lawyer?.price);
    // const [save, setSave] = useState(isEditing)

    // const handleEdit = () => {
    //     setIsEditing(true);
    // };

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <div className="flex items-center">
                <label className="w-1/4">Giá trực tiếp</label>
                <Input
                    variant="borderless"
                    value={value}
                    disabled={!isEditing}
                    onChange={handleChange}
                    color="black"
                />
                <Button
                    type="link"
                    icon={
                        <Image
                            src="/images/icons/pencil.png"
                            alt="pencil"
                            width={24}
                            height={24}
                        />
                    }
                    onClick={() => setIsEditing(true)}
                />
            </div>
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
                        onClick={() => setIsEditing(false)}
                    >
                        Lưu
                    </button>
                </div>
            )}
        </div>
    );
}

export default LawyerInfomation;
