import Image from "next/image";
import { Modal, ModalProps } from "antd";
import CreateFieldActivity from "../common/field-activity/CreateFieldActivity";

function ModalEditFieldActivity(props: ModalProps) {
    const { open, onCancel } = props;
    return (
        <Modal open={open} onCancel={onCancel} footer={null}>
            <p className="mb-8 text-2xl font-semibold">
                Chỉnh sửa lĩnh vực hoạt động
            </p>
            <div className="flex flex-col justify-center">
                {/* Add field */}
                <CreateFieldActivity />

                <div className="flex justify-center mx-4">
                    <button
                        className="flex items-center p-2"
                        style={{
                            backgroundColor: "rgba(245, 133, 51, 0.2)",
                            borderRadius: 8,
                            width: "30%",
                        }}
                    >
                        <Image
                            src="/images/icons/orange-plus.png"
                            alt="Upload"
                            width={20}
                            height={20}
                        />
                        <span className="text-[--primary-color] ml-1">
                            Thêm lĩnh vực
                        </span>
                    </button>
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
