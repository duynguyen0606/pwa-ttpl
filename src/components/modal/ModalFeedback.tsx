import { Modal, ModalProps } from "antd";
import Link from "next/link";

function ModalFeedback(props: ModalProps) {
    const { open, onCancel } = props;

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            footer={null}
            closeIcon={null}
            width={300}
            style={{
                fontSize: 14,
                color: "#4755D4",
            }}
            centered
        >
            <div
                className="
                    flex flex-col 
                    items-center justify-center 
                    w-full 
                    pb-4
                    text-xs text-[#262C41]
                "
            >
                <div className="text-base font-semibold mb-1">Phản hồi!</div>
                <span>Bạn muốn phản hồi với chúng tôi qua Zalo ?</span>
            </div>

            <Link
                href="https://zalo.me/0984171182"
                className="flex items-center justify-center py-2 border-t-2 "
            >
                Đồng ý
            </Link>

            <button
                className="flex items-center justify-center w-full pt-2 border-t-2 font-bold"
                onClick={onCancel}
            >
                Không, cảm ơn!
            </button>
        </Modal>
    );
}

export default ModalFeedback;
