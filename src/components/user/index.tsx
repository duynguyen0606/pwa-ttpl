import { useMemo, useState } from "react";
import Image from "next/image";
import ImageLegacy from "next/legacy/image";
import { Button, Rate } from "antd";

import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";

import ModalProtectAccount from "../modal/ModalProtectAccount";
import ModalUpdateInfor from "../modal/ModalUpdateInfor";
import {
    setListFollower,
    setListWatching,
} from "@/src/redux/feature/userSlice";
import {
    ProfileVideo,
    ProfileFollow,
    ProfilePost,
    ProfileProcedure,
    ProfileManagement,
    ProfileEvaluation
} from "./general";
import ProfilePremium from "./personal/ProfilePremium";
import ProfileQA from "./personal/ProfileQA";
import LawyerInfomation from "./lawyer/LawyerInfomation";
import LawyerAnswer from "./lawyer/LawyerAnswer";
import LawCompanyInfomation from "./enterprise/law-company/LawCompanyInfomation";
import LawCompanyPost from "./enterprise/law-company/LawCompanyPost";
import EnterpriseVertification from "./enterprise/EnterpriseVertification";
import ListLawyer from "./enterprise/law-company/ListLawyer";
import LawEnterpriseInfomation from "./enterprise/law-enterprise/LawEnterpriseInfomation";
import LawEnterprisePost from "./enterprise/law-enterprise/LawEnterprisePost";
import LawEnterpriseProfile from "./enterprise/law-enterprise/LawEnterpriseProfile";
import GalleryImage from "./enterprise/law-enterprise/GalleryImage";

interface NavItem {
    key: number;
    name: string;
    dataContent: JSX.Element;
}

const generalNav: { [key: number]: NavItem } = {
    1: {
        key: 1,
        name: "Bài viết",
        dataContent: <></>,
    },
    2: {
        key: 2,
        name: "Video",
        dataContent: <></>,
    },
    3: {
        key: 3,
        name: "Quản lý",
        dataContent: <></>,
    },
};

function UserProfilePage() {
    const { user } = useAppSelector((state) => state.authState);
    const dispatch = useAppDispatch();
    const { listMyPost, listFollower, listWatching, listMyVideo } =
        useAppSelector((state) => state.userState);

    const [typeFollowTab, setTypeFollowTab] = useState("");
    const [openModalProtect, setOpenModalProtect] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);

    const [keyActive, setKeyActive] = useState(1);


    const mapObjNav: { [key: number]: NavItem } = useMemo(() => {
        switch (user?.user_type as string) {
            case "personal":
            case "state_cadres":
                return {
                    1: {
                        key: 1,
                        name: "Bài viết",
                        dataContent: (
                            <ProfilePost
                                showPost={true}
                                listPost={listMyPost}
                                listFollower={listFollower}
                                listWatching={listWatching}
                                onTransferFollower={(typeTab) => {
                                    setKeyActive(4);
                                    setTypeFollowTab(typeTab);
                                }}
                                onSetMapFollower={(newListFollower) =>
                                    dispatch(setListFollower(newListFollower))
                                }
                                onSetMapFollowing={(newListWatching) =>
                                    dispatch(setListWatching(newListWatching))
                                }
                            />
                        ),
                    },
                    2: {
                        key: 2,
                        name: "Video",
                        dataContent: <ProfileVideo listVideo={listMyVideo} />,
                    },
                    3: {
                        key: 3,
                        name: "Thủ tục của tôi",
                        dataContent: <ProfileProcedure />,
                    },
                    4: {
                        key: 4,
                        name: "Theo dõi",
                        dataContent: (
                            <ProfileFollow
                                listFollower={listFollower}
                                listWatching={listWatching}
                                activeKey={typeFollowTab}
                                onSetMapFollower={(newListFollower) => {
                                    dispatch(setListFollower(newListFollower));
                                }}
                                onSetMapFollowing={(newListWatching) =>
                                    dispatch(setListWatching(newListWatching))
                                }
                            />
                        ),
                    },
                    5: {
                        key: 5,
                        name: "Hỏi đáp pháp luật",
                        dataContent: <ProfileQA />,
                    },
                    6: {
                        key: 6,
                        name: "Gói Premium",
                        dataContent: <ProfilePremium />,
                    },
                    7: {
                        key: 7,
                        name: "Quản lý",
                        dataContent: <ProfileManagement />,
                    },
                };
            case "lawyer":
                return {
                    1: {
                        key: 1,
                        name: "Thông tin",
                        dataContent: <LawyerInfomation />,
                    },
                    2: {
                        key: 2,
                        name: "Đánh giá",
                        dataContent: <ProfileEvaluation />,
                    },
                    3: {
                        key: 3,
                        name: "Câu trả lời pháp lý",
                        dataContent: <LawyerAnswer />,
                    },
                    4: {
                        key: 4,
                        name: "Thủ tục của tôi",
                        dataContent: <ProfileProcedure />,
                    },
                    5: {
                        key: 5,
                        name: "Bài viết",
                        dataContent: (
                            <ProfilePost
                                showPost={true}
                                listPost={listMyPost}
                                listFollower={listFollower}
                                listWatching={listWatching}
                                onTransferFollower={(typeTab) => {
                                    setKeyActive(7);
                                    setTypeFollowTab(typeTab);
                                }}
                                onSetMapFollower={(newListFollower) =>
                                    dispatch(setListFollower(newListFollower))
                                }
                                onSetMapFollowing={(newListWatching) =>
                                    dispatch(setListWatching(newListWatching))
                                }
                            />
                        ),
                    },
                    6: {
                        key: 6,
                        name: "Video",
                        dataContent: <ProfileVideo listVideo={listMyVideo} />,
                    },
                    7: {
                        key: 7,
                        name: "Theo dõi",
                        dataContent: (
                            <ProfileFollow
                                listFollower={listFollower}
                                listWatching={listWatching}
                                activeKey={typeFollowTab}
                                onSetMapFollower={(newListFollower) => {
                                    dispatch(setListFollower(newListFollower));
                                }}
                                onSetMapFollowing={(newListWatching) =>
                                    dispatch(setListWatching(newListWatching))
                                }
                            />
                        ),
                    },
                    8: {
                        key: 8,
                        name: "Quản lý",
                        dataContent: <ProfileManagement />,
                    },
                };
            case "enterprise":
                return {
                    1: {
                        key: 1,
                        name: "Thông tin",
                        dataContent: <LawEnterpriseInfomation />,
                    },
                    2: {
                        key: 2,
                        name: "Bài viết",
                        dataContent: (
                            <LawEnterprisePost listPost={listMyPost} />
                        ),
                    },
                    3: {
                        key: 3,
                        name: "Video",
                        dataContent: <ProfileVideo listVideo={listMyVideo} />,
                    },
                    4: {
                        key: 4,
                        name: "Thư viện hình ảnh",
                        dataContent: <GalleryImage />,
                    },
                    5: {
                        key: 5,
                        name: "Hồ sơ công ty",
                        dataContent: <LawEnterpriseProfile />,
                    },
                    6: {
                        key: 6,
                        name: "Đánh giá",
                        dataContent: <ProfileEvaluation />,
                    },
                    7: {
                        key: 7,
                        name: "Xác thực doanh nghiệp",
                        dataContent: <EnterpriseVertification />,
                    },
                };
            case "company":
                return {
                    1: {
                        key: 1,
                        name: "Thông tin",
                        dataContent: (
                            <LawCompanyInfomation />
                        ),
                    },
                    2: {
                        key: 2,
                        name: "Bài viết",
                        dataContent: (
                            <LawCompanyPost listPost={listMyPost} />
                        ),
                    },
                    3: {
                        key: 3,
                        name: "Video",
                        dataContent: <ProfileVideo listVideo={listMyVideo} />,
                    },
                    4: {
                        key: 4,
                        name: "Đánh giá",
                        dataContent: <ProfileEvaluation />,
                    },
                    5: {
                        key: 5,
                        name: "Danh sách luật sư",
                        dataContent: <ListLawyer />,
                    },
                    6: {
                        key: 6,
                        name: "Quản lý",
                        dataContent: <ProfileManagement />,
                    },
                    7: {
                        key: 7,
                        name: "Xác thực doanh nghiệp",
                        dataContent: <EnterpriseVertification />,
                    },
                };
            default:
                return generalNav;
        }
    }, [
        user?.user_type,
        listFollower,
        listWatching,
        listMyPost,
        typeFollowTab,
        keyActive,
    ]);


    return (
        <div>
            <div className="bg-white rounded-b-lg">
                <div className="relative" style={{ paddingTop: "37.5%" }}>
                    <ImageLegacy
                        src="https://ttpl.vn/assets/images/myprofile/anh-bia.png"
                        layout="fill"
                        className="absolute"
                    />
                </div>
                <div className="p-6 pb-2 relative">
                    <div
                        style={{ width: 150 }}
                        className="absolute rounded-full overflow-hidden bottom-full right-1/2 translate-y-1/4 translate-x-1/2 border-4 border-white"
                    >
                        <ImageLegacy
                            src={user?.image}
                            layout="responsive"
                            width={150}
                            height={150}
                            className="bg-white"
                        />
                    </div>
                    {user?.user_type === "lawyer" ? (
                        <div className="flex flex-col items-center py-4">
                            <div className="font-semibold text-2xl pb-4">
                                Luật sư {user?.full_name}
                            </div>
                            <div className="flex items-center justify-between w-4/5">
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <Image
                                            src="https://ttpl.vn/assets/images/mobile/marker.png"
                                            alt="marker"
                                            width={18}
                                            height={18}
                                        />
                                        <span className="ml-2">
                                            {user?.district +
                                                ", " +
                                                user?.province_city}
                                        </span>
                                    </div>

                                    <div className="flex">
                                        <Image
                                            src="https://ttpl.vn/assets/images/myprofile/Wallet.png"
                                            alt="wallet"
                                            width={19}
                                            height={17}
                                        />
                                        <span className="ml-2">
                                            Mức phí:{" "}
                                            {user?.price
                                                ? user?.price
                                                : "Liên hệ"}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div>
                                        <Rate
                                            disabled
                                            allowHalf
                                            defaultValue={4.5}
                                        />
                                    </div>
                                    <span className="text-[#4061AB] font-medium">
                                        0 đánh giá
                                    </span>
                                </div>
                                <Button
                                    className="button-primary"
                                    onClick={() => setOpenModalProtect(true)}
                                >
                                    Bảo mật tài khoản
                                </Button>
                            </div>
                            <div className="absolute right-6 top-6">
                                <div className="flex justify-end mt-2">
                                    <Button
                                        type="text"
                                        icon={
                                            <Image
                                                src="/images/icons/pencil.png"
                                                alt="pencil"
                                                width={30}
                                                height={30}
                                            />
                                        }
                                        onClick={() => setOpenModalUpdate(true)}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center py-4">
                            <div className="font-semibold text-2xl pb-4">
                                {user?.full_name}
                            </div>
                            {(user?.user_type === "personal" ||
                                user?.user_type === "state_cadres") && (
                                <div className="flex gap-2 items-center justify-center">
                                    <div>
                                        Điểm thưởng:{" "}
                                        <span
                                            style={{
                                                fontWeight: "600",
                                                color: "var(--primary-color)",
                                            }}
                                        >
                                            {user?.point}
                                        </span>
                                    </div>
                                    <Image
                                        src="/images/icons/info.png"
                                        alt="info"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            )}
                            <div className="absolute right-6 top-6">
                                <Button
                                    className="button-primary"
                                    onClick={() => setOpenModalProtect(true)}
                                >
                                    Bảo mật tài khoản
                                </Button>
                                {user?.user_type !== "enterprise" &&
                                    user?.user_type !== "company" && (
                                        <div className="flex justify-end mt-2">
                                            <Button
                                                type="text"
                                                icon={
                                                    <Image
                                                        src="/images/icons/pencil.png"
                                                        alt="pencil"
                                                        width={30}
                                                        height={30}
                                                    />
                                                }
                                                onClick={() =>
                                                    setOpenModalUpdate(true)
                                                }
                                            />
                                        </div>
                                    )}
                            </div>
                        </div>
                    )}
                    <div className="flex gap-4 justify-center border-t border-gray-200 py-2">
                        {Object.values(mapObjNav).map((item) => (
                            <Button
                                onClick={() => setKeyActive(item.key)}
                                size="large"
                                type="text"
                                key={item.key}
                                style={{
                                    color:
                                        keyActive === item.key
                                            ? "var(--primary-color)"
                                            : "#000",
                                    fontWeight: "600",
                                    fontSize: 18,
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </div>
                    <ModalProtectAccount
                        open={openModalProtect}
                        onCancel={() => setOpenModalProtect(false)}
                    />
                    <ModalUpdateInfor
                        open={openModalUpdate}
                        onCancel={() => setOpenModalUpdate(false)}
                    />
                </div>
            </div>
            <div className="my-4">{mapObjNav[keyActive]?.dataContent}</div>
        </div>
    );
}

export default UserProfilePage;
