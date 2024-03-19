import { memo } from "react";
import Link from "next/link";
import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";

const data = [
    {
        title: "Thủ tục đã lưu",
        href: "/mobile/profile/loadListProcedureByType/follower",
    },
    {
        title: "Thủ tục đã xem",
        href: "/mobile/profile/loadListProcedureByType/watching",
    },
    {
        title: "Thủ tục đã sửa",
        href: "/mobile/profile/loadListProcedureByType/need",
    },
];

function Index() {
    return (
        <CanBackLayout back="/mobile/homepage/user" title="Thủ tục của tôi">
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
                        <div></div>
                    </>
                ))}
            </div>
        </CanBackLayout>
    );
}

export default memo(Index);
