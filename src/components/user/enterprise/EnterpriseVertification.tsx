import Image from "next/image";
import { Form, Select, Typography, Upload } from "antd";

function EnterpriseVertification() {
    const [form] = Form.useForm();
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
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

                    {/* form */}
                    <Form form={form} layout="vertical">
                        <Form.Item
                            label="1. Giấy đăng ký doanh nghiệp"
                            name="giay-dang-ky"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload action="/upload.do" listType="picture">
                                <button
                                    className="flex items-center p-2 mt-5"
                                    style={{
                                        backgroundColor:
                                            "rgba(245, 133, 51, 0.2)",
                                        borderRadius: 8,
                                        width: "100%",
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
                            </Upload>
                        </Form.Item>

                        <Form.Item
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
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
                            <Upload action="/upload.do" listType="picture">
                                <button
                                    className="flex items-center p-2 mt-5"
                                    style={{
                                        backgroundColor:
                                            "rgba(245, 133, 51, 0.2)",
                                        borderRadius: 8,
                                        width: "100%",
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
                            </Upload>
                        </Form.Item>

                        <Form.Item>
                            <button
                                className="bg-[var(--primary-color)] text-white mt-14  py-2 px-4 font-bold rounded"
                                type="submit"
                            >
                                Gửi xác thực
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default EnterpriseVertification;
