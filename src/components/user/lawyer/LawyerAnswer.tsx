import { ConfigProvider, Input, Menu } from "antd";
import { useState } from "react";

const dataNav = [
    {
        label: "Tổng cộng: 0 câu hỏi",
        key: "basicAnswer",
    },
    {
        label: "10 câu hỏi VIP",
        key: "vipAnswer",
    },
];

function LawyerAnswer() {
    const [typeNav, setTypeNav] = useState("basicAnswer");
    return (
        <div className="bg-white my-4 rounded-lg p-4">
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
                    items={dataNav.map((item) => {
                        return {
                            key: item.key,
                            label: item.label,
                        };
                    })}
                    style={{
                        justifyContent: "center",
                        fontSize: 16,
                        color: "#a1a5ac",
                        fontWeight: 500,
                    }}
                    onSelect={({ item, key }) => setTypeNav(key)}
                />
            </ConfigProvider>
            <div>
                <div className="w-1/2 mx-auto my-4 ">
                    <Input.Search
                        size="large"
                        variant="outlined"
                        placeholder="Tìm kiếm"
                    />
                </div>
                <div className="w-2/3 m-auto p-4">
                    {typeNav === "basicAnswer" ? (
                        <div>
                            <p className="text-2xl text-gray-500 pb-10">
                                Câu hỏi đã trả lời
                            </p>
                            <div>Chưa có dữ liệu</div>
                        </div>
                    ) : (
                        <div>
                            <p className="text-2xl text-gray-500 pb-10">
                                Danh sách khách hàng
                            </p>
                            <div>Chưa có dữ liệu</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LawyerAnswer;
