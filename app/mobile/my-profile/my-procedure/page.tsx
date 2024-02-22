import { memo } from "react";
import Link from "next/link";
import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";
import BlogItem from "@/src/components/mobile/procedure-item/ProcedureItem";

const data = [
    {
        title: "Thủ tục đã lưu",
        href: "my-procedure/saved",
    },
    {
        title: "Thủ tục đã xem",
        href: "my-procedure/watched",
    },
    {
        title: "Thủ tục đã sửa",
        href: "my-procedure/repaired",
    },
];

function Index() {
    return (
        <CanBackLayout back="/mobile/my-profile" title="Thủ tục của tôi">
            <div className="py-5 px-4">
                {data.map((row, index) => (
                    <>
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

                        {/* first blog in list */}
                        <div>
                            <BlogItem
                                organ="Cục Lãnh sự - Bộ Ngoại giao"
                                field="Xuất nhập khẩu"
                            />
                        </div>
                    </>
                ))}
            </div>
        </CanBackLayout>
    );
}

export default memo(Index);
