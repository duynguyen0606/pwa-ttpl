"use client";

import { memo } from "react";
import Link from "next/link";
import { useAppSelector } from "@/src/redux/hooks";
import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";
import ProcedureItem from "@/src/components/mobile/procedure-item/ProcedureItem";

function Index() {
    const { listProcedureSaved, listProcedureEdited, listProcedureWatched } =
        useAppSelector((state) => state.procedureState);

    const data = [
        {
            key: 1,
            title: "Thủ tục đã lưu",
            href: "/mobile/profile/loadListProcedureByType/follower",
            firstItem: listProcedureSaved[0],
        },
        {
            key: 2,
            title: "Thủ tục đã xem",
            href: "/mobile/profile/loadListProcedureByType/watching",
            firstItem: listProcedureWatched[0],
        },
        {
            key: 3,
            title: "Thủ tục đã sửa",
            href: "/mobile/profile/loadListProcedureByType/need",
            firstItem: listProcedureEdited[0],
        },
    ];

    return (
        <CanBackLayout back="/mobile/homepage/user" title="Thủ tục của tôi">
            <div className="py-5 px-4">
                {data.map((row) => (
                    <div key={row.key}>
                        <div
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
                            {row?.firstItem && (
                                <ProcedureItem procedure={row.firstItem} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </CanBackLayout>
    );
}

export default memo(Index);
