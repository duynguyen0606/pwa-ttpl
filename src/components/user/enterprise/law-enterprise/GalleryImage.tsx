"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, Form, Input, Modal, ModalProps, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function GalleryImage() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="mb-4 p-4 bg-white rounded-lg">
            <button
                className="flex bg-[--primary-color] rounded-lg p-2"
                onClick={() => setShowModal(true)}
            >
                <Image
                    src="https://thutucphapluat.com/files/icon/action/PlusBox.png"
                    alt="add album"
                    width={24}
                    height={24}
                />
                <span className="text-white ml-1">Tạo album mới</span>
            </button>

            <CreateAlbum
                open={showModal}
                onCancel={() => setShowModal(false)}
            />
        </div>
    );
}

function CreateAlbum(props: ModalProps) {
    const { open, onCancel } = props;
    const [form] = Form.useForm()
    const [addImage, setAddImage] = useState(false);

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <Modal open={open} onCancel={onCancel} footer={null}>
            <p className="mb-8 text-2xl font-semibold">Tạo album</p>

            <Form form={form} layout="vertical">
                <Form.Item label="Tên album">
                    <Input placeholder="Nhập tên album" size="large" />
                </Form.Item>

                {addImage && (
                    <Form.Item
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload action="/upload.do" listType="picture-card">
                            <button
                                style={{ border: 0, background: "none" }}
                                type="button"
                            >
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </button>
                        </Upload>
                    </Form.Item>
                )}

                <button
                    className="flex items-center p-2 mt-5 mb-20"
                    style={{
                        backgroundColor: "rgba(245, 133, 51, 0.2)",
                        borderRadius: 8,
                        width: "25%",
                    }}
                    onClick={() => setAddImage(true)}
                >
                    <Image
                        src="/images/icons/orange-upload.png"
                        alt="Upload"
                        width={20}
                        height={20}
                    />
                    <span className="text-[--primary-color] ml-1">
                        Tải file lên
                    </span>
                </button>

                <Form.Item className="flex justify-center">
                    <button
                        className="rounded px-12 py-2 font-semibold text-white bg-[#F58533]"
                        type="submit"
                    >
                        Lưu
                    </button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default GalleryImage;
