"use client";

import { usePageAuth } from "@/src/utils/hook";
import UserProfilePage from "@/src/components/user";

function Index() {
    usePageAuth();
    return <UserProfilePage />;
}

export default Index;
