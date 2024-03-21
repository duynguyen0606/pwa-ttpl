"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal, ModalProps, Select } from "antd";

function ListLawyer() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="mb-4 p-4 bg-white rounded-lg">
            {/*  */}
            <div className="grid grid-cols-2 gap-2"></div>

            <div>
                <button
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 20,
                        width: "40%",
                        borderRadius: 8,
                        border: "dashed var(--primary-color) 1px",
                        backgroundColor: "rgba(245, 133, 51, 0.2)",
                    }}
                    onClick={() => setShowModal(true)}
                >
                    <Image
                        src="/images/icons/orange-plus.png"
                        alt="Upload"
                        width={20}
                        height={20}
                    />
                    <span className="text-[--primary-color] ml-1">
                        Thêm thành viên
                    </span>
                </button>
            </div>

            <ModalAddLawyer
                open={showModal}
                onCancel={() => setShowModal(false)}
            />
        </div>
    );
}

function ModalAddLawyer(props: ModalProps) {
    const { open, onCancel } = props;
    // const [listLawyer, setListLawyer] = useState<Array<any>>([])
    
    const listLawyer = [
        { value: "5645", label: "Jack" },
        { value: "2716", label: "Lucy" },
        { value: "9283", label: "yiminghe" },
        { value: "0000", label: "Disabled", disabled: true },
    ];
    

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <Modal open={open} onCancel={onCancel} footer={null}>
            <p className="mb-8 text-2xl font-semibold">Thêm thành viên</p>

            <Select
                mode="multiple"
                variant="filled"
                allowClear
                style={{ width: "100%" }}
                placeholder="Thêm luật sư"
                onChange={handleChange}
                options={listLawyer}
            />

            <div className="flex items-center justify-center mt-4">
                <button
                    className="rounded px-4 py-2 mx-2 font-semibold text-black bg-[#F7F7F7]"
                    onClick={onCancel}
                >
                    Hủy
                </button>
                <button
                    className="rounded px-4 py-2 mx-2 font-semibold text-white bg-[#F58533]"
                    type="submit"
                >
                    Gửi yêu cầu
                </button>
            </div>
        </Modal>
    );
}

export default ListLawyer;
