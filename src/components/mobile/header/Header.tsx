"use client";

import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "@/src/redux/hooks";
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
                        <img
                            src="/images/icons/menu.png"
                            width={22}
                            height={22}
                        />
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
                            src="/images/icons/Search.png"
                            className="w-6 h-5"
                        />
                    </div>

                    {/* Notification */}
                    <Link href="/mobile/thong-bao" className="absolute right-4">
                        <img src="/images/icons/notification.png" width={22} height={22} />
                    </Link>
                </>
            )}
        </div>
    );
}

export default Header;
