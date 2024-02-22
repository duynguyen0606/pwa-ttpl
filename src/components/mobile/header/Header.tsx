"use client";

import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "@/src/redux/hooks";
import { BellIcon } from "@/src/assests/icons";
import SidebarDrawer from "../drawers/SidebarDrawer";

function Header({ title }: { title?: string }) {
    const { user } = useAppSelector((state) => state.authState);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div
            className="
                fixed 
                h-[62px] w-full 
                flex items-center justify-center 
                border-b-2 border-solid border-gray-100 
                bg-white z-50
                "
        >
            {!user ? (
                <>
                    <div className="w-10 h-10 flex items-center left-1 absolute">
                        <Link href="/mobile">
                            <img
                                src="https://ttpl.vn/assets/images/logo/logo-legalzone.png"
                                alt="logo-legalzone"
                            />
                        </Link>
                    </div>

                    <span className="flex text-xl font-bold w-fit">
                        {title ? title : "Thủ tục pháp luật"}
                    </span>
                </>
            ) : (
                <>
                    {/* Tab bar */}
                    <div
                        className="absolute left-4"
                        onClick={() => setShowSidebar(true)}
                    >
                        <img src="https://ttpl.vn/assets/images/icon/menu.png" />
                    </div>
                    <SidebarDrawer
                        open={showSidebar}
                        onClose={() => setShowSidebar(false)}
                    />

                    {/* Title */}
                    <span className="flex text-xl font-bold w-fit">
                        {title ? title : "Thủ tục pháp luật"}
                    </span>

                    {/* Search */}
                    <div className="absolute right-12">
                        <img
                            src="https://ttpl.vn/files/icon/icon-feather-search.png"
                            className="w-5 h-4"
                        />
                    </div>

                    {/* Notification */}
                    <Link href="/mobile/thong-bao" className="absolute right-4">
                        <BellIcon width="1.6rem" height="1.6rem" />
                    </Link>
                </>
            )}
        </div>
    );
}

export default Header;
