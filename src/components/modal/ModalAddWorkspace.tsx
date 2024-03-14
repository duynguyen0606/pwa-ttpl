import { Form, Input, Modal, ModalProps } from "antd";

function ModalAddWorkspace(props: ModalProps) {
    const { open, onCancel } = props;
    return (
        <Modal
            open={open}
            onCancel={onCancel}
            footer={null}
            closeIcon={null}
            width={700}
        >
            <div className="flex justify-between">
                <p className="text-3xl font-semibold mb-7">Thêm nơi làm việc</p>
                <span className="text-2xl" onClick={onCancel}>
                    x
                </span>
            </div>
            <Form layout="vertical">
                <Form.Item label="Nơi làm việc">
                    <Input size="large" placeholder="Nơi làm việc" />
                </Form.Item>
                <Form.Item label="Thời gian làm việc">
                    <Input size="large" placeholder="Thời gian làm việc" />
                </Form.Item>
            </Form>
            <div className="flex items-center justify-center mt-4">
                <button
                    className="rounded px-12 py-3 mx-2 font-semibold text-base text-black bg-[#F7F7F7]"
                    onClick={onCancel}
                >
                    Hủy
                </button>
                <button
                    className="rounded px-12 py-3 mx-2 font-semibold text-base text-white bg-[#F58533] "
                    onClick={onCancel}
                >
                    Lưu
                </button>
            </div>
        </Modal>
    );
}

export default ModalAddWorkspace;
