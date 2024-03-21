"use client";

import { useState } from "react";
import { Modal, ModalProps } from "antd";
import CreateFieldActivity from "../common/field-activity/CreateFieldActivity";
import { ButtonAdd } from "../common/custom-button";

function ModalEditFieldActivity(props: ModalProps) {
    const { open, onCancel } = props;
    const [addFieldActivity, setAddFieldActivity] = useState(false);

    return (
        <Modal open={open} onCancel={onCancel} footer={null}>
            <p className="mb-8 text-2xl font-semibold">
                Chỉnh sửa lĩnh vực hoạt động
            </p>
            <div className="flex flex-col justify-center">
                {/* Add field */}
                <CreateFieldActivity />
                {addFieldActivity && <CreateFieldActivity />}

                <div className="flex justify-center">
                    <ButtonAdd
                        title="Thêm lĩnh vực"
                        onClick={() => setAddFieldActivity(true)}
                    />
                </div>

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
                        Lưu
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalEditFieldActivity;
