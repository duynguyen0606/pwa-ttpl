import { useMemo, useState } from "react";
import Image from "next/image";
import ImageLegacy from "next/legacy/image";
import { Button, Rate } from "antd";

import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import {
    setListFollower,
    setListWatching,
} from "@/src/redux/feature/userSlice";

import LawyerInfomation from "./LawyerInfomation";
import LawyerEvaluation from "../general/ProfileEvaluation";
import ProfileProcedure from "../general/ProfileProcedure";
import ProfilePost from "../general/ProfilePost";
import ProfileVideo from "../general/ProfileVideo";
import ProfileFollow from "../general/ProfileFollow";

import ModalProtectAccount from "../../modal/ModalProtectAccount";
import ModalUpdateInfor from "../../modal/ModalUpdateInfor";
import LawyerAnswer from "./LawyerAnswer";

interface NavItem {
    key: number;
    name: string;
    content: JSX.Element;
}

function LawyerProfile() {
    const [keyActive, setKeyActive] = useState(1);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const [openModalProtect, setOpenModalProtect] = useState(false);
    const [typeFollowTab, setTypeFollowTab] = useState("");

    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.authState);
    const { listMyPost, listFollower, listWatching, listMyVideo } =
        useAppSelector((state) => state.userState);

    const mapObjNav: { [key: number]: NavItem } = useMemo(() => {
        return {
            1: {
                key: 1,
                name: "Thông tin",
                content: <LawyerInfomation />,
            },
            2: {
                key: 2,
                name: "Đánh giá",
                content: <LawyerEvaluation />,
            },
            3: {
                key: 3,
                name: "Câu trả lời pháp lý",
                content: <LawyerAnswer />,
            },
            4: {
                key: 4,
                name: "Thủ tục của tôi",
                content: <ProfileProcedure />,
            },
            5: {
                key: 5,
                name: "Bài viết",
                content: (
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
                content: <ProfileVideo listVideo={listMyVideo} />,
            },
            7: {
                key: 7,
                name: "Theo dõi",
                content: (
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
        };
    }, [user, keyActive]);
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
                                        {user?.price ? user?.price : "Liên hệ"}
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
                    <div className="flex gap-4 justify-center border-t border-gray-200 py-2">
                        {Object.values(mapObjNav).map((item) => (
                            <div
                                key={item.key}
                                style={{
                                    borderBottom:
                                        keyActive === item.key
                                            ? "2px solid var(--primary-color)"
                                            : "none",
                                }}
                            >
                                <Button
                                    onClick={() => setKeyActive(item.key)}
                                    size="large"
                                    type="text"
                                    style={{
                                        fontWeight: "600",
                                        color:
                                            keyActive === item.key
                                                ? "var(--primary-color)"
                                                : "#000",
                                    }}
                                >
                                    {item.name}
                                </Button>
                            </div>
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
            <div className="my-4">{mapObjNav[keyActive]?.content}</div>
        </div>
    );
}

export default LawyerProfile;
