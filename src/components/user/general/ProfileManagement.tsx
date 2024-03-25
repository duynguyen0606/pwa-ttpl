import { ConfigProvider, Menu } from "antd";
import { useMemo, useState } from "react";
import { HistoryTransaction, WalletManagement } from "./management-tab";

interface NavItem {
    key: string;
    label: string;
    dataContent: JSX.Element;
}

function ProfileManagement() {
    const [nav, setNav] = useState("wallet");
    const dataNavs: { [key: string]: NavItem } = useMemo(() => {
        return {
            wallet: {
                key: "wallet",
                label: "Quản lý Ví",
                dataContent: <WalletManagement />,
            },
            history: {
                key: "history",
                label: "Lịch sử giao dịch",
                dataContent: <HistoryTransaction />,
            },
        };
    }, []);
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
                    items={Object.values(dataNavs).map((item) => {
                        return {
                            key: item.key,
                            label: item.label,
                        };
                    })}
                    style={{
                        justifyContent: "center",
                        fontSize: 16,
                        color: "#a1a5ac",
                        fontWeight: "400",
                    }}
                    onSelect={({ item, key }) => {
                        setNav(key);
                    }}
                />
            </ConfigProvider>
            <div>{dataNavs[nav]?.dataContent}</div>
        </div>
    );
}

export default ProfileManagement;
