import { Modal, ModalProps } from "antd";

function ModalInfoRate(props: ModalProps) {
    const { open, onCancel } = props;

    const scoringRules = [
        {
            level: 1,
            score: 0,
            badge: "Không có huy hiệu",
            tick: "",
            addition: "",
        },
        {
            level: 2,
            score: 15,
            badge: "Không có huy hiệu",
            tick: "",
            addition: "",
        },
        {
            level: 3,
            score: 75,
            badge: "Không có huy hiệu",
            tick: "",
            addition: "",
        },
        {
            level: 4,
            score: 250,
            badge: "Huy hiệu 1 sao",
            tick: "",
            addition: "",
        },
        {
            level: 5,
            score: 500,
            badge: "Huy hiệu 2 sao",
            tick: "",
            addition: "",
        },
        {
            level: 6,
            score: 1500,
            badge: "Huy hiệu 3 sao",
            tick: "",
            addition: "",
        },
        {
            level: 7,
            score: 5000,
            badge: "Huy hiệu 4 sao",
            tick: "",
            addition: "",
        },
        {
            level: 8,
            score: 15000,
            badge: "Huy hiệu 5 sao",
            tick: "",
            addition: "",
        },
        {
            level: 9,
            score: 50000,
            badge: "Huy hiệu 6 sao",
            tick: "",
            addition: "",
        },
        {
            level: 10,
            score: 100000,
            badge: "Huy hiệu 7 sao",
            tick: "",
            addition: "",
        },
        {
            level: 11,
            score: 200000,
            badge: "Huy hiệu 7 sao",
            tick: "Tick V Cam",
            addition: "",
        },
        {
            level: 12,
            score: 500000,
            badge: "Huy hiệu 7 sao",
            tick: "Tick V Cam",
            addition: "Ký hợp đồng/ Trả lương theo thoả thuận",
        },
    ];

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            footer={null}
            style={{
                top: 5,
                overflowY: "auto",
                maxHeight: "calc(100vh - 170px)",
                borderRadius: "8px",
            }}
            title="Đánh giá"
        >
            <h1 className="flex justify-center uppercase text-[#4472C4] my-2">
                Hệ thống tính điểm thủ tục pháp luật
            </h1>

            <table className="mb-5">
                <thead className="bg-[#5b9bd5] text-white text-center font-bold">
                    <tr>
                        <td className="p-2.5">Cấp</td>
                        <td className="p-2.5">Điểm</td>
                        <td className="p-2.5">Huy hiệu</td>
                        <td className="p-2.5"></td>
                        <td className="p-2.5"></td>
                    </tr>
                </thead>
                <tbody>
                    {scoringRules.map((_rule) => (
                        <tr
                            key={_rule.level}
                            className={
                                _rule.level % 2 === 1
                                    ? "bg-[#DEEAF6]"
                                    : "border-solid border-y-[1px] border-[#9CC2E5]"
                            }
                        >
                            <td className="p-2.5 font-bold">{`Cấp ${_rule.level}`}</td>
                            <td className="p-2.5">{`${_rule.score} điểm`}</td>
                            <td className="p-2.5">{`${_rule.badge}`}</td>
                            <td className="p-2.5">{`${_rule.tick}`}</td>
                            <td className="p-2.5">{`${_rule.addition}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table>
                <thead className="text-white text-center bg-[#5472BE] text-lg font-bold">
                    <tr>
                        <td className="p-2.5">
                            Đóng góp cho thủ tục pháp luật
                        </td>
                        <td className="p-2.5">Công ty Luật</td>
                        <td className="p-2.5">Cá nhân</td>
                        <td className="p-2.5">Doanh nghiệp</td>
                        <td className="p-2.5">Luật sư</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map((_d, index) => (
                        <tr
                            key={index}
                            className={
                                index % 2 === 1
                                    ? "bg-[#D9E2F3]"
                                    : "border-solid border-y-[1px] border-[#8EAADB]"
                            }
                        >
                            <td className="p-2.5 font-bold">{`${_d.contribution}`}</td>
                            <td className="p-2.5">{`${_d.rule}`}</td>
                            <td className="p-2.5">{`${_d.personal}`}</td>
                            <td className="p-2.5">{`${_d.business}`}</td>
                            <td className="p-2.5">{`${_d.lawyer}`}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </Modal>
    );
}

export default ModalInfoRate;
