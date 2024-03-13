import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function DiamondContent() {
    const [isMobileClient, setIsMobileClient] = useState(false);
    const isMobileUI = useMediaQuery({
        query: "(max-width: 600px)",
    });
    useEffect(() => {
        setIsMobileClient(isMobileUI);
    }, [isMobileUI]);

    return (
        <div
            className={`${
                isMobileClient ? "text-sm px-1 mobile-client" : "mt-8 mb-16"
            }`}
        >
            <div
                className={`${
                    isMobileClient
                        ? "text-[--secondary-color] font-bold mb-4 leading-6"
                        : "text-center font-semibold mb-0.5 text-lg"
                }`}
            >
                Thành viên LGZ DIAMON được nhận các quyền lợi của thành viên LGZ
                PRO 1 và thêm
            </div>
            {!isMobileClient && (
                <div className="text-center mb-2">Có thể tra cứu:</div>
            )}
            <div className="mt-4 flex flex-wrap">
                <ul
                    className={`list-disc
                    ${isMobileClient ? "" : "grid grid-cols-2 gap-3"}`}
                >
                    <li>Được tặng 500 điểm là: Admin</li>
                    <li>
                        Hiển thị bảng điều khiển : Vào làm, và Ra về, hiển thị
                        quy trình hoạt động , tình trạng hỗ trợ khách hàng,
                        thống kê hoá đơn
                    </li>
                    <li>
                        Hiển thị KPI, hiện % của KPI, &nbsp;hiện phiếu lương, có
                        thể thêm phiếu lương, có thể sửa phiếu lương, xoá phiếu
                        lương,
                    </li>
                    <li>
                        Hiển thị nghỉ phép : Hiển thị theo tháng, hiển thị theo
                        năm, hiển thị chi phí.
                    </li>
                    <li>Có thể quản lý cài đặt</li>
                    <li>
                        Hiển thị thủ tục hành chính : Tab thủ tục, có thể xem
                        các nội dung thủ tục, có thể xem thực tế thực hiện, thêm
                        thực tế thực hiện, xem lược đồ, thêm lược đồ,
                    </li>
                    <li>
                        Có thể thêm nội dung thủ tục, sửa nội dung thủ tục. hiển
                        thị tab lĩnh vực, có thể thêm lĩnh vực. Hiển thị tab đối
                        tượng thực hiện, có thể thêm đối tượng thực hiện , hiển
                        thị tab cơ quan thực hiện, tab cơ quan thực hiện theo
                        bộ, hiển thị tab cơ quan thực hiện theo tỉnh, có thể
                        thêm cơ quan thực hiện. hiển thị tab cơ quan cơ cấu tổ
                        chức, xem chi tiết cơ cấu tổ chức
                    </li>
                    <li>Có thể truy cập thông tin của khách hàng</li>
                    <li>
                        Hiện khách hàng, thêm khách hàng, hiển thị quy trình,
                        hiển thị hoá đơn, hiển hị báo giá ,hiển thị Chăm sóc
                        khách hàng, hiển thị tài liệu, hiện thị sự kiện
                    </li>
                    <li>
                        Cài đặt nhân viên : Hiển thị nhân viên, có thể thêm và
                        sửa nhân viên, có thể xoá nhân viên, có thể xem chi tiết
                        nhân viên.
                    </li>
                    <li>Hiển thị tài liệu, hiển thị quy trình</li>
                    <li>
                        Hiển thị ngày công theo tháng hoặc theo tuần, có thể sửa
                        ngày công.
                    </li>
                    <li>
                        Cài đặt quyền cho quy trình : có thể tạo quy trình, sửa
                        quy trình, xoá quy trình.
                    </li>
                    <li>
                        Hiển thị khách hàng: Hiển thị mô tả, hiển thị ghi chú,
                        hiển thị lịch sử hoạt động, thông tin tiến độ, hiển thị
                        lịch biểu, hiển thị ghi chú cá nhân.
                    </li>
                    <li>
                        Hiển thị tài liệu, có thể &nbsp;thêm tài liệu, có thể
                        tải xuống tài liệu.
                    </li>
                    <li>
                        Hiển thị bình luận, có thể thêm bình luận, trả lời bình
                        luận.
                    </li>
                    <li>
                        Hiển thị khách hàng nhận xét, có thể trả lời bình luận
                        của khách hàng.
                    </li>
                    <li>Hiển thị KPI, có thể thêm KPI, sửa KPI, xoá KPI</li>
                    <li>
                        Hiển thị các bước thực hiện, thêm các bước thực hiện,
                        sửa các bước thực hiện, tạo nhiệm vụ, sửa nhiệm vụ, có
                        thể comment trên nhiệm vụ.
                    </li>
                    <li>
                        Cài đặt quyền cho tài chính : hiển thị tài chính , hiển
                        thị hoá đơn, xem chi tiết hoá đơn, có thể thêm hoá đơn
                        Item?, có thể sửa hoá đơn Iem?, có thể thêm mới hoá đơn,
                        sửa hoá đơn, xoá hoá đơn, và có thể gửi email hoá đơn,
                        tải xuống hoá đơn, có thể thêm thanh toán,
                    </li>
                    <li>
                        Hiển thị chi phí, cho phép thêm chi phí, cho phép sửa
                        chi phí, xoá chi phí, hiển thị báo giá, xem chi tiết báo
                        giá.
                    </li>
                    <li>
                        Cài đặt quyền cho Chăm sóc khách hàng : hiển thị chăm
                        sóc khách hàng, cho phép thêm yêu cầu hỗ trợ khách hàng,
                        sửa yêu cầu hỗ trợ khách hàng, cho phép thay đổi trạng
                        thái yêu cầu hỗ trợ khách hàng, và xem chi tiết chăm sóc
                        khách hàng, có thể thêm bình luận.
                    </li>
                    <li>
                        Cài đặt quyền cho ngày công : hiện ngày công, hiển thị
                        hằng ngày, hiển thị theo từng giờ làm, thêm ngày công
                    </li>
                    <li>
                        Cài đặt cho quyền nghỉ phép : hiển thị theo chờ phê
                        duyệt , hiển thị tất cả các ngày nghỉ phép, thêm ngày
                        phép, chỉ định ngày phép
                    </li>
                    <li>
                        Cài đặt quyền cho thông báo : &nbsp;hiển thị thông báo,
                        xem chi tiết thông báo, thêm thông báo, sửa thông báo,
                        xoá thông báo.
                    </li>
                    <li>
                        Hiển thị cho khảo sát : hiện khảo sát, thêm khảo sát,
                        sửa khảo sát, xoá khảo sát, xem chi tiết khảo sát.
                    </li>
                    <li>
                        Có thể truy cập vé hỗ trợ khách hàng : OK, tất cả các
                        loại vé hỗ trợ khách hàng, thêm vé hỗ trợ, sửa vé hỗ
                        trợ, xoá vé hỗ trợ
                    </li>
                </ul>
            </div>
            <div className="text-center mt-4">
                Mua gói chỉ có tác dụng với tài khoản công ty luật , doanh
                nghiệp
            </div>
        </div>
    );
}

export default DiamondContent;
