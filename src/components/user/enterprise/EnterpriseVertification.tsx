import { Button, Select, Typography } from "antd";
import Image from "next/image";

function EnterpriseVertification() {
    return (
        <div className="mb-4 p-4 bg-white rounded-lg">
            <Typography.Title level={4}>
                Xác thực theo tên đăng ký kinh doanh
            </Typography.Title>
            <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#a1a5ac] mb-4">
                        Hướng dẫn
                    </span>
                    <div>
                        Tài liệu tải lên phải là ảnh chụp/scan từ bản gốc. Không
                        chấp nhận các tài liệu photo, kể cả bản công chứng. Tài
                        liệu cần rõ ràng, không bị mờ. Định dạng JPG, PNG, PDF.
                        Dung lượng tập tin tối đa 5MB. Có thể tải lên nhiều tài
                        liệu cùng lúc.
                        <br></br>
                        Thông tin trên CMND/CCCD/Hộ chiếu phải khớp với thông
                        tin của người đại diện trên Giấy đăng ký doanh nghiệp.
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold text-[#a1a5ac] mb-4">
                        Tài liệu yêu cầu
                    </span>
                    <div>
                        {/* form */}
                        <div className="flex flex-col mb-4">
                            <span className="font-bold">
                                1. Giấy đăng ký doanh nghiệp
                            </span>
                            <button
                                className="flex items-center p-2 mt-5"
                                style={{
                                    backgroundColor: "rgba(245, 133, 51, 0.2)",
                                    borderRadius: 8,
                                    width: "30%",
                                }}
                            >
                                <Image
                                    src="/images/icons/orange-upload.png"
                                    alt="Upload"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-[--primary-color]">
                                    Tải file lên
                                </span>
                            </button>
                        </div>
                        <div className="flex flex-col pt-5">
                            <Select
                                labelInValue
                                defaultValue={"2. Hộ chiếu"}
                                options={[
                                    {
                                        value: 1,
                                        label: "2. Hộ chiếu",
                                    },
                                    {
                                        value: 2,
                                        label: "2. CMND hoặc CCCD",
                                    },
                                ]}
                            />
                            <button
                                className="flex items-center p-2 mt-5"
                                style={{
                                    backgroundColor: "rgba(245, 133, 51, 0.2)",
                                    borderRadius: 8,
                                    width: "30%",
                                }}
                            >
                                <Image
                                    src="/images/icons/orange-upload.png"
                                    alt="Upload"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-[--primary-color]">
                                    Tải file lên
                                </span>
                            </button>
                        </div>

                        <button className="bg-[var(--primary-color)] text-white mt-14  py-2 px-4 font-bold rounded">
                            Gửi xác thực
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EnterpriseVertification;
