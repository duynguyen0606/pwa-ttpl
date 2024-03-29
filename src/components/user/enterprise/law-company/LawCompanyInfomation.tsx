import { useAppSelector } from "@/src/redux/hooks";
import { Row, Col, Typography, Button, Input } from "antd";
import Image from "next/image";

function LawCompanyInfomation() {
    const { user } = useAppSelector((state) => state.authState);

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
                        />
                    </div>
                </div>
            </Col>
            <Col span={16}>
                <div className="mb-4 p-4 bg-white rounded-lg flex items-center justify-between">
                    <Typography.Title level={3}>
                        Giới thiệu
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
                <div className="mb-4 p-4 bg-white rounded-lg flex items-center justify-between">
                    <Typography.Title level={3}>
                        Kinh nghiệm
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
            </Col>
        </Row>
    );
}

export default LawCompanyInfomation;
