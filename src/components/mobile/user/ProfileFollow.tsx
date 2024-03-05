import Image from "next/image";

function ProfileFollow({
    layout,
    dataList,
}: {
    layout: "grid" | "vertical";
    dataList: Array<any>;
}) {
    return (
        <div className="mt-2">
            {dataList.length > 0 ? (
                <>
                    {layout === "grid" ? (
                        <div className="grid grid-cols-2 gap-3 pb-1">
                            {dataList.map((item) => (
                                <div
                                    key={item?.id}
                                    className="flex items-center justify-between p-2 rounded-lg border border-gray-300"
                                >
                                    <div className="flex items-center gap-2">
                                        <Image
                                            className="rounded-full object-fit"
                                            src={
                                                item?.avatar_user_follow ||
                                                item?.avatar_user_watching
                                            }
                                            alt=""
                                            width={22}
                                            height={22}
                                        />
                                        <div className="text-[8px]">
                                            {item?.name_user_follow ||
                                                item?.name_user_watching}
                                        </div>
                                    </div>
                                    <button
                                        className="rounded py-[6px] px-[10px] text-[8px] font-medium"
                                        style={{
                                            color: item?.is_follow
                                                ? "#FFF"
                                                : "#262C41",
                                            backgroundColor: item?.is_follow
                                                ? "#F58533"
                                                : "#F4F5F8",
                                        }}
                                    >
                                        Theo dõi
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Vertical layout
                        <div className="flex flex-col">
                            {dataList.map((item) => (
                                <div
                                    key={item?.id}
                                    className="flex items-center justify-between p-2 mt-0.5"
                                >
                                    <div className="flex items-center gap-2">
                                        <Image
                                            className="rounded-full object-fit"
                                            src={
                                                item?.avatar_user_follow ||
                                                item?.avatar_user_watching
                                            }
                                            alt=""
                                            width={22}
                                            height={22}
                                        />
                                        <div className="text-[8px]">
                                            {item?.name_user_follow ||
                                                item?.name_user_watching}
                                        </div>
                                    </div>
                                    <button
                                        className="rounded py-[6px] px-[10px] text-[8px] font-medium"
                                        onClick={() => {}}
                                        style={{
                                            color: item?.is_follow
                                                ? "#FFF"
                                                : "#262C41",
                                            backgroundColor: item?.is_follow
                                                ? "#F58533"
                                                : "#F4F5F8",
                                        }}
                                    >
                                        Theo dõi
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                undefined
            )}
        </div>
    );
}

export default ProfileFollow;
