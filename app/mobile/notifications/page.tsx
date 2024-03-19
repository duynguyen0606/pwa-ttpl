'use client'

import { Avatar } from "antd";
import { useAppSelector } from "@/src/redux/hooks";
import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";

function Index() {
    const { listNotification } = useAppSelector((state) => state.userState);
    return (
        <CanBackLayout back="/mobile" title="Thông báo">
            <div className="p-4">
                {listNotification?.length > 0 ? (
                    <>
                        {listNotification?.map((item) => (
                            <div
                                key={item.avatar_create_by}
                                className="flex items-start gap-2 py-2"
                            >
                                <Avatar
                                    src={item.avatar_create_by}
                                    size="large"
                                />
                                <div>
                                    <span className="font-semibold text-lg">
                                        {item.name_create_by}
                                    </span>{" "}
                                    <span>{item.name_type}</span>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No notification found.</p>
                )}
            </div>
        </CanBackLayout>
    );
}

export default Index;
