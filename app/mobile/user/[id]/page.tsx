"use client";

import { Button } from "antd";
import Image from "next/image";
import ImageLegacy from "next/legacy/image";
import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "@/src/redux/hooks";
import ProfilePost from "@/src/components/user/ProfilePost";
import ProfileVideo from "@/src/components/user/ProfileVideo";
import ProfileFollow from "@/src/components/user/ProfileFollow";
import {
    apiGetOtherFollowerByType,
    apiGetOtherListPost,
    apiGetUserById,
} from "@/src/api/user";
import { ModalInfoRate } from "@/src/components/modal";

interface NavItem {
    name: string;
    key: number;
    dataContent: JSX.Element;
}

function Index({ params }: { params: { id: string } }) {
    // ID của người dùng
    const { id } = params;

    // ID, token của bản thân
    const { user, token } = useAppSelector((state) => state.authState);

    const [keyActive, setKeyActive] = useState(1);
    const [userInfor, setUserInfor] = useState<any>();
    const [listPost, setListPost] = useState<Array<any>>([]);
    const [listWatching, setListWatching] = useState<Array<any>>([]);
    const [listFollower, setListFollower] = useState<Array<any>>([]);
    const [typeFollowTab, setTypeFollowTab] = useState("");
    const [showDetailPoint, setShowDetailPoint] = useState(false);
    const [pagePost, setPagePost] = useState(1);

    useEffect(() => {
        if (id) {
            (async () => {
                const dataFollower = await apiGetOtherFollowerByType({
                    type: "follower",
                    token,
                    user_id: id,
                });
                if (dataFollower.status) {
                    setListFollower(dataFollower.data);
                }

                const dataWatching = await apiGetOtherFollowerByType({
                    type: "watching",
                    token,
                    user_id: id,
                });
                if (dataWatching.status) {
                    setListWatching(dataWatching.data);
                }

                const dataUser = await apiGetUserById({ id: id });
                if (dataUser.status) {
                    setUserInfor(dataUser.data);
                }
            })();
        }
    }, [id, token]);

    useEffect(() => {
        (async () => {
            const dataPost = await apiGetOtherListPost({
                token,
                id: id,
                page: pagePost,
            });

            if (dataPost.status) {
                if (listPost.length > 0) {
                    setListPost((prev) => [...prev, ...dataPost.data]);
                } else {
                    setListPost(dataPost.data);
                }
            }
        })();
    }, [pagePost]);

    const mapObjNav: { [key: number]: NavItem } = useMemo(() => {
        return {
            1: {
                name: "Bài viết",
                key: 1,
                dataContent: (
                    <ProfilePost
                        showPost={false}
                        listPost={listPost}
                        listFollower={listFollower.slice(0, 5)}
                        listWatching={listWatching.slice(0, 5)}
                        onTransferFollower={(typeTab) => {
                            setKeyActive(3);
                            setTypeFollowTab(typeTab);
                        }}
                        onSetMapFollower={(newListFollower) =>
                            setListFollower(newListFollower)
                        }
                        onSetMapFollowing={(newListFollowing) =>
                            setListWatching(newListFollowing)
                        }
                        onLoadMore={() => setPagePost((prev) => prev + 1)}
                    />
                ),
            },
            2: { name: "Video", key: 2, dataContent: <ProfileVideo /> },
            3: {
                name: "Theo dõi",
                key: 3,
                dataContent: (
                    <ProfileFollow
                        listFollower={listFollower}
                        listWatching={listWatching}
                        activeKey={typeFollowTab}
                        onSetMapFollower={(newListFollower) =>
                            setListFollower(newListFollower)
                        }
                        onSetMapFollowing={(newListFollowing) =>
                            setListWatching(newListFollowing)
                        }
                    />
                ),
            },
        };
    }, [listPost, listFollower, listWatching, typeFollowTab]);

    return (
        <div>
            <div className="bg-white rounded-b-lg">
                <div className="relative" style={{ paddingTop: "37.5%" }}>
                    <ImageLegacy
                        src={userInfor?.banner}
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
                            src={userInfor?.image}
                            layout="responsive"
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className="flex flex-col items-center pb-4 pt-4">
                        <div className="font-semibold text-2xl pb-4">
                            {userInfor?.full_name}
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                            <div>
                                Điểm thưởng:
                                <span
                                    className="font-semibold"
                                    style={{ color: "var(--primary-color)" }}
                                >
                                    {" "}
                                    {userInfor?.point}
                                </span>
                            </div>
                            <Image
                                src="/images/icons/info.png"
                                alt="info"
                                width={20}
                                height={20}
                                style={{ cursor: "pointer" }}
                                onClick={() => setShowDetailPoint(true)}
                            />
                            <ModalInfoRate
                                open={showDetailPoint}
                                onCancel={() => setShowDetailPoint(false)}
                            />
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center border-t border-gray-200 pt-2">
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
                                            : " #A1A5AC",
                                    fontWeight: "600",
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="my-4 bg-[#F7F7F7]">
                {mapObjNav[keyActive]?.dataContent}
            </div>
        </div>
    );
}

export default Index;
