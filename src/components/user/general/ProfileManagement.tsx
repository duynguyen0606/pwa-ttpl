import { ConfigProvider, Menu } from "antd";
import { useState } from "react";

const dataNavs = [
    {
        label: "Quản lý Ví",
        key: "wallet",
    },
    {
        label: "Lịch sử giao dịch",
        key: "history",
    },
];

function ProfileManagement() {
    const [nav, setNav] = useState('wallet')
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
                    defaultSelectedKeys={[nav]}
                    selectedKeys={[nav]}
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
                        fontWeight: '400',
                    }}
                    onSelect={({ item, key }) => {
                        setNav(key);
                    }}
                />
            </ConfigProvider>
        </div>
    );
}

export default ProfileManagement