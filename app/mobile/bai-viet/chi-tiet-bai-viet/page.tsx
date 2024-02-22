"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { BackIcon } from "@/src/assests/icons";
import FooterPostItem from "@/src/components/mobile/post-item/FooterPost";
import "./detailPostItem.scss";
import HeaderPostItem from "@/src/components/mobile/post-item/HeaderPost";

function Index() {
    const [isBlack, setIsBlack] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsBlack(window.scrollY >= 10);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="flex-1 px-4">
            <div className="fixed top-3">
                <Link href="/mobile/bai-viet">
                    <BackIcon color={`${isBlack ? "black" : "white"}`} />
                </Link>
            </div>

            {/* timeline & image */}
            <div className="mb-4" style={{ margin: "0 -16px" }}>
                <a href="https://ttpl.vn/assets/images/logo/logo-legalzone.png">
                    <img
                        loading="lazy"
                        className="w-full object-contain"
                        src="https://drive.google.com/thumbnail?id=1Rjt7q0xvL0JFWcoTql-stBdJSAJnguVU&amp;sz=s1000"
                        alt="timeline_post_file65a3a38001991-LG--33-.png"
                    />
                </a>
            </div>

            {/* title  */}
            <div className="mt-5">
                <a href="#" className="text-base text-[#444] font-bold">
                    Mức tạm ứng tiền lương của người lao động là bao nhiêu?
                </a>
            </div>

            {/* description */}
            <div className="description text-sm">
                <p>
                    Khi xét về mức tạm ứng tiền lương của người lao động, việc
                    hiểu rõ quy định và các trường hợp được đề cập trong Bộ luật
                    Lao động 2019 là vô cùng quan trọng. Việc này không chỉ đảm
                    bảo quyền lợi cho người lao động mà còn tạo ra sự minh bạch
                    và công bằng trong quy trình trả lương. Cùng{" "}
                    <a href="https://ttpl.vn/">Thủ tục pháp luật</a> điểm qua
                    các quy định chi tiết về mức tạm ứng tiền lương dựa trên
                    từng trường hợp cụ thể.
                </p>
                <p>
                    <strong>1. Quy định về trả lương cho người lao động</strong>
                </p>
                <p>
                    Quy định về việc trả lương cho người lao động không chỉ là
                    một điều cần thiết để bảo vệ quyền lợi của họ mà còn là nền
                    tảng quan trọng của môi trường lao động công bằng và minh
                    bạch. Căn cứ theo Điều 95{" "}
                    <a href="https://ttpl.vn/bai-viet/6240">
                        Bộ luật Lao động 2019
                    </a>{" "}
                    quy định về trả lương cho người lao động như sau:
                </p>
                <p>
                    - Người sử dụng lao động trả lương cho người lao động căn cứ
                    vào tiền lương đã thỏa thuận, năng suất lao động và chất
                    lượng thực hiện công việc.
                </p>
                <p>
                    - Tiền lương ghi trong hợp đồng lao động và tiền lương trả
                    cho người lao động bằng tiền Đồng Việt Nam, trường hợp người
                    lao động là người nước ngoài tại Việt Nam thì có thể bằng
                    ngoại tệ.
                </p>
                <p>
                    - Mỗi lần trả lương, người sử dụng lao động phải thông báo
                    bảng kê trả lương cho người lao động, trong đó ghi rõ tiền
                    lương, tiền lương làm thêm giờ, tiền lương làm việc vào ban
                    đêm, nội dung và số tiền bị khấu trừ (nếu có).
                </p>
                <p>
                    <strong>2. Mức tạm ứng tiền lương&nbsp;</strong>
                </p>
                <p>
                    <i>
                        - Trường hợp hưởng lương theo sản phẩm, theo khoán
                        (khoản 3 Điều 97{" "}
                    </i>
                    <a href="https://ttpl.vn/bai-viet/6240">
                        <i>Bộ luật Lao động 2019</i>
                    </a>
                    <i>)</i>
                </p>
                <p>
                    + Người lao động hưởng lương theo sản phẩm, theo khoán được
                    trả lương theo thỏa thuận của hai bên; nếu công việc phải
                    làm trong nhiều tháng thì hằng tháng được&nbsp;tạm ứng tiền
                    lương theo khối lượng công việc đã làm trong tháng.
                </p>
                <p>
                    <i>
                        - Trường hợp thỏa thuận (khoản 1 Điều 101 Bộ luật Lao
                        động 2019)
                    </i>
                </p>
                <p>
                    + Người lao động được&nbsp;tạm ứng tiền lương theo điều kiện
                    do hai bên thỏa thuận&nbsp;và không bị tính lãi.
                </p>
                <p>
                    <i>
                        - Trường hợp thực hiện nghĩa vụ công dân (khoản 2 Điều
                        101 Bộ luật Lao động 2019)
                    </i>
                </p>
                <p>
                    + Người sử dụng lao động phải cho người lao động tạm ứng
                    tiền lương tương ứng với số ngày người lao động tạm thời
                    nghỉ việc để thực hiện nghĩa vụ công dân từ 01 tuần trở lên
                    nhưng&nbsp;tối đa không quá 01 tháng tiền lương&nbsp;theo
                    hợp đồng lao động và người lao động phải hoàn trả số tiền đã
                    tạm ứng.
                </p>
                <p>
                    + Người lao động nhập ngũ theo quy định của Luật Nghĩa vụ
                    quân sự thì không được tạm ứng tiền lương.
                </p>
                <p>
                    <i>
                        - Trường hợp nghỉ hằng năm (khoản 5 Điều 113 Bộ luật Lao
                        động 2019)
                    </i>
                </p>
                <p>
                    + Khi nghỉ hằng năm mà chưa đến kỳ trả lương, người lao động
                    được tạm ứng tiền lương theo quy định tại khoản 3 Điều 101
                    của Bộ luật này.
                </p>
                <p>
                    + Khoản 3 Điều 101 của Bộ luật này quy định: Khi nghỉ hằng
                    năm, người lao động được tạm ứng một khoản tiền&nbsp;ít nhất
                    bằng tiền lương của những ngày nghỉ.
                </p>
                <p>
                    <i>
                        - Trường hợp bị tạm đình chỉ công việc (khoản 2 Điều 128
                        Bộ luật Lao động 2019)
                    </i>
                </p>
                <p>
                    + Thời hạn tạm đình chỉ công việc không được quá 15 ngày,
                    trường hợp đặc biệt không được quá 90 ngày. Trong thời gian
                    bị tạm đình chỉ công việc, người lao động được tạm
                    ứng&nbsp;50% tiền lương&nbsp;trước khi bị đình chỉ công
                    việc.
                </p>
                <p>
                    + Hết thời hạn tạm đình chỉ công việc, người sử dụng lao
                    động phải nhận người lao động trở lại làm việc.
                </p>
                <p>Kết luận</p>
                <p>
                    Sự cụ thể và minh bạch trong quy định về tạm ứng tiền lương
                    là yếu tố cơ bản đảm bảo quyền lợi cho người lao động. Điều
                    này không chỉ đem lại sự an tâm cho người lao động mà còn
                    tạo ra nền tảng vững chắc cho mối quan hệ giữa người lao
                    động và người sử dụng lao động. Việc áp dụng đúng, minh bạch
                    các quy định này không chỉ là trách nhiệm pháp lý mà còn là
                    nền tảng của một môi trường làm việc hài hòa, công bằng và
                    tích cực.
                </p>{" "}
            </div>

            <div className="mt-7 mb-2">
                <HeaderPostItem data={{ user: "Pham Diem Thu", publishAt: 4 }} />
            </div>
            <div className="mt-0.5">
                <FooterPostItem data={{ like: 161, share: 9 }} />
            </div>
        </div>
    );
}

export default Index;
