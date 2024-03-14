"use client";

import { usePageAuth } from "@/src/utils/hook";
import { useAppSelector } from "@/src/redux/hooks";
import LawyerProfile from "@/src/components/user/lawyer";
import UserProfile from "@/src/components/user/personal";
import LawEnterprise from "@/src/components/user/enterprise/law-enterprise";
import LawCompany from "@/src/components/user/enterprise/law-company";

function Index() {
    usePageAuth();
    const { user } = useAppSelector((state) => state.authState);
    switch (user?.user_type) {
        case "personal":
            return <UserProfile />;
        case "lawyer":
            return <LawyerProfile />;
        case "state_cadres":
            return <UserProfile />;
        case "enterprise":
            return <LawEnterprise />;
        case "company":
            return <LawCompany />;
    }
}

export default Index;
