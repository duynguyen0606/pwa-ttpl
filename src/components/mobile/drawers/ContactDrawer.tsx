import Link from "next/link";
import Image from "next/image";
import { Drawer, DrawerProps } from "antd";

function ContactDrawer(props: DrawerProps) {
    const { open, onClose } = props;

    return (
        <Drawer
            open={open}
            onClose={onClose}
            closeIcon={
                <Image
                    src="/images/icons/left-arrow.png"
                    alt=""
                    width={18}
                    height={18}
                />
            }
            title="Liên hệ"
            width="100%"
            placement="left"
        >
            <div className="text-[#262C41]">
                <div className="text-[20px] font-semibold mb-3">
                    Thông tin liên hệ
                </div>

                {/* Item */}
                <div>
                    {/* Title item */}
                    <div className="text-sm font-bold mb-2">Giờ làm việc</div>

                    {/* Content item */}
                    <div className="text-sm text-[#686E7E]">
                        <ul className="list-disc pl-5 mb-2">
                            <li>8:00 đến 17:30</li>
                            <li>Từ thứ 2 đến thứ 6 hàng tuần</li>
                            <li>Hotline tư vấn: 0984 171 182</li>
                        </ul>
                    </div>
                </div>

                <div>
                    {/* Title item */}
                    <div className="text-sm font-bold mb-2">
                        Địa chỉ trụ sở chính
                    </div>

                    {/* Content item */}
                    <div className="text-sm text-[#686E7E]">
                        <ul className="list-disc pl-5 mb-2">
                            <li>
                                Số 23, ngõ 55, đường Thanh Lân, quận Hoàng Mai,
                                Hà Nội
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    {/* Title item */}
                    <div className="text-sm font-bold mb-2">Email</div>

                    {/* Content item */}
                    <div className="text-sm text-[#686E7E]">
                        <ul className="list-disc pl-5 mb-2">
                            <li>support@legalzone.com</li>
                        </ul>
                    </div>
                </div>

                <div>
                    {/* Title item */}
                    <div className="text-sm font-bold mb-2">Điện thoại</div>

                    {/* Content item */}
                    <div className="text-sm text-[#686E7E]">
                        <ul className="list-disc pl-5 mb-2">
                            <li>0888 889 366</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Link
                href="tel: 0888888888"
                className="fixed bottom-16 left-4 z-[2] "
            >
                <div
                    className="
                            flex items-center justify-left
                            pl-2
                            w-28 h-9 
                            bg-[--primary-color] 
                            rounded-3xl  
                        "
                >
                    <Image
                        src="/images/introduce/phone.png"
                        alt="phone"
                        width={20}
                        height={16}
                        className="pr-1"
                    />
                    <span className="text-white text-xs">0888888888</span>
                </div>
            </Link>
        </Drawer>
    );
}

export default ContactDrawer;
