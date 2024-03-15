import { useState } from "react";
import { Avatar, Button, ConfigProvider, Menu } from "antd";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { apiFollowUser } from "@/src/api/home-page";
import { setOpenModalLogin } from "@/src/redux/feature/authSlice";

const dataNavs = [
    {
        label: "Người theo dõi",
        key: "follower",
    },
    {
        label: "Đang theo dõi",
        key: "watching",
    },
];

function ProfileFollow({
    listFollower,
    listWatching,
    activeKey = "follower",
    onSetMapFollower,
    onSetMapFollowing,
}: {
    listFollower: Array<any>;
    listWatching: Array<any>;
    activeKey: string;
    onSetMapFollower: (newListFollower: Array<any>) => void;
    onSetMapFollowing: (newListWatching: Array<any>) => void;
}) {
    const [typeNav, setTypeNav] = useState(activeKey || "follower");

    const { token } = useAppSelector((state) => state.authState);
    const dispatch = useAppDispatch();

    const handleInFollow = async (id: string, type: "follow" | "unfollow") => {
        if (id && token) {
            const dataRes = await apiFollowUser({ id, token, type });
            if (dataRes.status) {
                onSetMapFollower(
                    listFollower.map((item) => {
                        if (item?.id_customer_follows == id) {
                            return {
                                ...item,
                                follow: +dataRes.action === 1 ? "0" : "1",
                            };
                        }
                        return item;
                    })
                );
            }
        } else {
            dispatch(setOpenModalLogin(true));
        }
    };

    const handleInWatching = async (
        id: string,
        type: "follow" | "unfollow"
    ) => {
        if (id && token) {
            const dataRes = await apiFollowUser({ id, token, type });
            if (dataRes.status) {
                onSetMapFollowing(
                    listWatching.map((item) => {
                        if (item?.id_customer.toString() == id) {
                            return {
                                ...item,
                                follow: +dataRes.action === 1 ? "0" : "1",
                            };
                        }
                        return item;
                    })
                );
            }
        } else {
            dispatch(setOpenModalLogin(true));
        }
    };

    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "var(--primary-color)",
                    },
                    components: {
                        Menu: {
                            horizontalItemSelectedColor: "var(--primary-color)",
                        },
                    },
                }}
            >
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={[typeNav]}
                    selectedKeys={[typeNav]}
                    items={dataNavs.map((item) => {
                        return {
                            key: item.key,
                            label: item.label,
                        };
                    })}
                    style={{
                        justifyContent: "center",
                        fontSize: 16,
                        color: "#a1a5ac",
                    }}
                    onSelect={({ item, key }) => {
                        setTypeNav(key);
                    }}
                />
            </ConfigProvider>
            <div className="bg-white">
                <div className="w-1/2 m-auto p-4">
                    {typeNav === "follower" ? (
                        <div className="grid grid-cols-2 gap-4" key={1}>
                            {listFollower.length &&
                                listFollower?.map((item) => (
                                    <div
                                        key={item.avatar_user_answer}
                                        className="flex items-center justify-between p-2 rounded-lg border border-gray-300"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Avatar
                                                src={item?.avatar_user_follow}
                                                size="large"
                                            />
                                            <div>{item?.name_user_follow}</div>
                                        </div>
                                        <Button
                                            className={
                                                item?.follow == 1
                                                    ? "button-primary"
                                                    : ""
                                            }
                                            onClick={() =>
                                                handleInFollow(
                                                    item?.id_customer_follows.toString(),
                                                    item?.follow == 1
                                                        ? "unfollow"
                                                        : "follow"
                                                )
                                            }
                                        >
                                            {item?.follow == 1
                                                ? "Bỏ theo dõi"
                                                : "Theo dõi"}
                                        </Button>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4" key={2}>
                            {listWatching.length &&
                                listWatching?.map((item) => (
                                    <div
                                        key={item.avatar_user_answer}
                                        className="flex items-center justify-between p-2 rounded-lg border border-gray-300"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Avatar
                                                src={item?.avatar_user_watching}
                                                size="large"
                                            />
                                            <div>
                                                {item?.name_user_watching}
                                            </div>
                                        </div>
                                        <Button
                                            className={
                                                item?.follow == 1
                                                    ? "button-primary"
                                                    : ""
                                            }
                                            onClick={() =>
                                                handleInWatching(
                                                    item?.id_customer.toString(),
                                                    item?.follow == 1
                                                        ? "unfollow"
                                                        : "follow"
                                                )
                                            }
                                        >
                                            {item?.follow == 1
                                                ? "Bỏ theo dõi"
                                                : "Theo dõi"}
                                        </Button>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileFollow;
