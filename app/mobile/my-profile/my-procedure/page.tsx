import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";
import Link from "next/link";

const data = [
    {
        title: "Thủ tục đã lưu",
        href: "",
    },
    {
        title: "Thủ tục đã xem",
        href: "",
    },
    {
        title: "Thủ tục đã sửa",
        href: "",
    },
];

function Index() {
    return (
        <CanBackLayout back="/mobile/my-profile" title="Thủ tục của tôi">
            <div className="py-5 px-4">
                {data.map((row, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between mt-5"
                    >
                        <p className="text-base text-[#262C41] font-bold">
                            {row.title}
                        </p>
                        <Link href={row.href}>
                            <span className="text-sm text-[#4755D4] font-bold">
                                Xem tất cả
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </CanBackLayout>
    );
}

export default Index;
