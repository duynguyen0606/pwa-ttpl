import { useState } from "react";
import Image from "next/image";
import { Row, Col, Typography, Button, Input, Form, Select } from "antd";
import { useAppSelector } from "@/src/redux/hooks";
import dynamic from "next/dynamic";
import ModalEditContactInfo from "@/src/components/modal/ModalEditContactInfo";
import { ButtonAdd } from "@/src/components/common/custom-button";
// import CustomEditor from "@/src/components/common/customer-editor";

function LawEnterpriseInfomation() {
    const { user } = useAppSelector((state) => state.authState);
    const [editIntroduce, setEditIntroduce] = useState(false);
    const [editContactInfo, setEditContactInfo] = useState(false);

    const CustomEditor = dynamic(
        () => import("../../../common/customer-editor"),
        { ssr: false }
    );

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
                                    src="https://ttpl.vn/assets/images/myprofile/Location1.png"
                                    alt="address"
                                    width={22}
                                    height={22}
                                />
                                <span className="mx-1">Địa chỉ:</span>
                            </div>
                            <span className="font-bold ">{user?.address}</span>
                        </div>

                        <div className="my-2 flex items-center">
                            <div className="flex">
                                <Image
                                    src="https://ttpl.vn/assets/images/myprofile/phone1.png"
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
                                    src="https://ttpl.vn/assets/images/myprofile/Call.png"
                                    alt="alternative_phone"
                                    width={22}
                                    height={22}
                                />
                                <span className="mx-1">Fax:</span>
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
                                    src="https://thutucphapluat.com/assets/images/icon/icon_send.png"
                                    alt="email"
                                    width={22}
                                    height={22}
                                />
                                <span className="mx-1">Website:</span>
                            </div>
                            <span className="font-bold ">{user?.website}</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span={16}>
                <div className="mb-4 p-4 bg-white rounded-lg flex flex-col">
                    <div className="flex items-center justify-between">
                        <Typography.Title level={3}>
                            Giới thiệu công ty
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
                            onClick={() => setEditIntroduce(true)}
                        />
                    </div>
                    {editIntroduce && (
                        <div className="mt-1">
                            <CustomEditor />
                            <div className="flex items-center justify-center mt-4">
                                <button
                                    className="rounded px-4 py-2 mx-2 font-semibold text-black bg-[#F7F7F7] "
                                    onClick={() => setEditIntroduce(false)}
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
                        </div>
                    )}
                </div>

                {/* Ngành nghề */}
                <Career />

                {/* Sản phẩm dịch vụ */}
                <ServiceProduct />
            </Col>

            <ModalEditContactInfo
                open={editContactInfo}
                onCancel={() => setEditContactInfo(false)}
            />
        </Row>
    );
}

function Career() {
    const [isEdit, setIsEdit] = useState(false);
    const [showInput, setShowInput] = useState(false);
    return (
        <div className="mb-4 p-4 bg-white rounded-lg">
            <div className=" flex items-center justify-between">
                <Typography.Title level={3}>Ngành nghề</Typography.Title>
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
                    onClick={() => setIsEdit(true)}
                />
            </div>

            <div className="flex justify-between">
                <Input
                    size="large"
                    variant={isEdit ? "outlined" : "borderless"}
                    defaultValue={"Luật sư"}
                    disabled={!isEdit}
                    style={{ color: "#000" }}
                />
                {isEdit && (
                    <Button
                        type="link"
                        icon={
                            <Image
                                src="/images/icons/trash.png"
                                alt="delete"
                                width={22}
                                height={22}
                            />
                        }
                    />
                )}
            </div>

            {isEdit && (
                <>
                    {showInput && (
                        <div className="my-4">
                            <Input
                                size="large"
                                placeholder="Nhập tên ngành nghề"
                                disabled={!isEdit}
                            />
                        </div>
                    )}

                    <ButtonAdd
                        title="Thêm lĩnh vực"
                        onClick={() => setShowInput(true)}
                    />

                    <div className="flex items-center justify-center mt-4">
                        <button
                            className="rounded px-4 py-2 mx-2 font-semibold text-black bg-[#F7F7F7]"
                            onClick={() => setIsEdit(false)}
                        >
                            Hủy
                        </button>
                        <button className="rounded px-4 py-2 mx-2 font-semibold text-white bg-[#F58533]">
                            Lưu
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

function ServiceProduct() {
    const [edit, setEdit] = useState(false);
    const [addServiece, setAddService] = useState(false);
    const [addCategory, setAddCategory] = useState(false);
    return (
        <div className="mb-4 p-4 bg-white rounded-lg">
            <div className=" flex items-center justify-between">
                <Typography.Title level={3}>Sản phẩm dịch vụ</Typography.Title>
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
                    onClick={() => setEdit(true)}
                />
            </div>

            {edit && (
                <div>
                    <Form layout="vertical">
                        <Form.Item label="Danh mục sản phẩm dịch vụ">
                            <Select />
                        </Form.Item>

                        <Form.Item label="Tên sản phẩm dịch vụ">
                            <Input
                                size="large"
                                placeholder="Nhập tên sản phẩm dịch vụ"
                                style={{ marginBottom: 16 }}
                            />
                            {addServiece && (
                                <Input
                                    size="large"
                                    placeholder="Nhập tên sản phẩm dịch vụ"
                                />
                            )}
                        </Form.Item>
                        <ButtonAdd
                            title="Thêm sản phẩm dịch vụ"
                            onClick={() => setAddService(true)}
                            style={{marginBottom: 24}}
                        />

                        <Form.Item label="Danh mục khác">
                            <Input
                                size="large"
                                placeholder="Nhập tên danh mục"
                                style={{ marginBottom: 16 }}
                            />
                            {addCategory && (
                                <Input
                                    size="large"
                                    placeholder="Nhập tên danh mục"
                                />
                            )}
                        </Form.Item>
                        <ButtonAdd
                            title="Thêm danh mục"
                            onClick={() => setAddCategory(true)}
                        />
                    </Form>

                    <div className="flex items-center justify-center mt-4">
                        <button
                            className="rounded px-4 py-2 mx-2 font-semibold text-black bg-[#F7F7F7]"
                            onClick={() => setEdit(false)}
                        >
                            Hủy
                        </button>
                        <button className="rounded px-4 py-2 mx-2 font-semibold text-white bg-[#F58533]">
                            Lưu
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LawEnterpriseInfomation;
