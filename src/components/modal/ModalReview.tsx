import { Modal, ModalProps } from "antd";
import Link from "next/link";

function ModalReview(props: ModalProps) {
    const { open, onCancel } = props;

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            footer={null}
            closeIcon={null}
            width={250}
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
                <div className="text-base font-semibold mb-1">Thông báo</div>
                <span>Bạn muốn đánh giá app ?</span>
            </div>

            <Link
                href="https://apps.apple.com/us/app/th%E1%BB%A7-t%E1%BB%A5c-ph%C3%A1p-lu%E1%BA%ADt/id1562281664"
                className="flex items-center justify-center py-2 border-t-2 "
                target="_blank"
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

export default ModalReview;
