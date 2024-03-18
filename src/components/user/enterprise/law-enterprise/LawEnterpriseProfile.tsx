import Image from "next/image";
import { Button, Typography } from "antd";
import { useAppSelector } from "@/src/redux/hooks";

function LawEnterpriseProfile() {
    const { user } = useAppSelector((state) => state.authState);
    const infoEnterprise = [
        {
            name: "Tên công ty",
            value: user?.full_name,
        },
        {
            name: "Loại hình công ty",
            value: user?.first_name,
        },
        {
            name: "Thị trường chính",
            value: user?.first_name,
        },
        {
            name: "Mã số thuế",
            value: user?.first_name,
        },
        {
            name: "Năm thành lập",
            value: user?.first_name,
        },
        {
            name: "Người đại diện",
            value: user?.first_name,
        },
        {
            name: "Số điện thoại liên hệ",
            value: user?.first_name,
        },
    ];

    return (
        <div className="mb-4 p-4 bg-white rounded-lg">
            <div className="flex justify-between items-center">
                <Typography.Title level={4}>Hồ sơ công ty</Typography.Title>
                <Button
                    type="text"
                    icon={
                        <Image
                            src="/images/icons/pencil.png"
                            alt="edit"
                            width={24}
                            height={24}
                        />
                    }
                />
            </div>

            <ul className="list-disc list-inside">
                {infoEnterprise.map((item: any) => (
                    <li key={item.name}>
                        <span className="text-[#8A8A8A] font-bold">
                            {item.name}
                        </span>
                        <span className="mr-2">:</span>
                        <span>{item.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LawEnterpriseProfile;
