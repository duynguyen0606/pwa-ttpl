"use client";

import Link from "next/link";
import Image from "next/image";
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
                            <Image
                                className="rounded-full object-fit"
                                src="/images/logo.png"
                                alt="logo-legalzone"
                                width={40}
                                height={40}
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
                        <Image
                            src="/images/icons/menu.png"
                            alt=""
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
                        <Image
                            src="/images/icons/Search.png"
                            alt=""
                            width={24}
                            height={20}
                        />
                    </div>

                    {/* Notification */}
                    <Link href="/mobile/thong-bao" className="absolute right-4">
                        <Image
                            src="/images/icons/notification.png"
                            alt=""
                            width={22}
                            height={22}
                        />
                    </Link>
                </>
            )}
        </div>
    );
}

export default Header;
