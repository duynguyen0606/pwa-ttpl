import { CollapseProps, Collapse } from "antd";
import { Question, Answer } from "@/src/components/mobile/law-qa";

const items_USER: CollapseProps["items"] = [
    {
        key: "1",
        label: (
            <Question
                user={{ name: "Lê Minh Thọ" }}
                type="Tài nguyên - Môi trường"
                title="Thủ tục xin phép khai thác cát ở chân đập thủy điện"
                description="Doanh nghiệp bên mình liên hệ ban quản lý đập thủy điện tại Đa Krông, Quảng Trị để xin phép hợp tác khai thác cát vùng chân đập làm vật liệu xây dựng. Họ nói phải xin phép theo thủ tục. Nhờ hướng dẫn giúp mình. Đập thủy điện này chỉ nằm trong địa phận quản lý của Quảng Trị."
            />
        ),
        children: (
            <Answer
                user={undefined}
                content="Căn cứ quy định tại Khoản 1, Điểm a Khoản 3 Điều 21 Nghị định 114/2018/NĐ-CP thì chân đập thủy điện được xác định thuộc phạm vi bảo vệ đập, hồ chứa nước cụ thể là thuộc vùng phụ cận.
                Điểm c Khoản 1 Điều 22 Nghị định này đồng thời quy định:                
                Trong phạm vi bảo vệ đập, hồ chứa nước các hoạt động phải có giấy phép của cơ quan quản lý nhà nước có thẩm quyền bao gồm: Khoan, đào khảo sát địa chất; thăm dò, khai thác khoáng sản, vật liệu xây dựng, khai thác nước dưới đất;...                
                Như vậy, theo quy định này, trường hợp đơn vị anh muốn khai thác cát làm vật liệu xây dựng tại vùng chân đập thủy điện, phải tiến hành thủ tục xin cấp phép khai thác.                
                Về thủ tục xin cấp giấy phép được thực hiện theo quy định tại Chương IV Nghị định 67/2018/NĐ-CP. Cụ thể như sau:                
                Hồ sơ xin cấp giấy phép được quy định tại Điều 22 bao gồm:                
                1. Đơn đề nghị cấp giấy phép theo mẫu quy định tại Phụ lục III ban hành kèm theo Nghị định 67/2018/NĐ-CP;
                2. Bản vẽ thiết kế thi công đối với trường hợp quy định tại Khoản 1, Khoản 2, Khoản 3, Khoản 10 Điều 13 Nghị định 67/2018/NĐ-CP;
                3. Sơ họa vị trí khu vực tiến hành các hoạt động đề nghị cấp phép;
                4. Đánh giá ảnh hưởng của hoạt động đến việc vận hành và an toàn công trình thủy lợi;
                5. Văn bản thỏa thuận của tổ chức, cá nhân khai thác công trình thủy lợi;
                6. Văn bản thỏa thuận về sử dụng đất lâu dài hoặc có thời hạn với chủ sử dụng đất hợp pháp.
                Nơi nộp hồ sơ: Ủy ban nhân dân tỉnh Quảng Trị (Khoản 2 Điều 16 Nghị định 67/2018/NĐ-CP);
                Thời hạn giải quyết: Trong thời hạn 25 ngày làm việc, kể từ ngày nhận đủ hồ sơ hợp lệ, cơ quan có thẩm quyền cấp giấy phép tổ chức thẩm định hồ sơ, nếu đủ điều kiện thì cấp giấy phép; trường hợp không đủ điều kiện thì thông báo lý do không cấp giấy phép.
                Doanh nghiệp bên anh căn cứ quy định trên để thực hiện thủ tục xin cấp giấy phép khai thác cát tại chân đập thủy điện. 
                Trân trọng!"
            />
        ),
    },
    {
        key: "2",
        label: (
            <Question
                user={{ name: "Lê Minh Thọ" }}
                type="Lĩnh vực khác"
                title="Quy định về các biện pháp làm việc với điện cao áp"
                description="Không rõ thời gian tới đây có quy định thế nào về các biện pháp khi làm việc với điện cao áp? Nhờ giúp đỡ"
            />
        ),
        children: (
            <Answer
                user={undefined}
                content="Theo Khoản 25 Tiểu mục II.III Mục II Quy chuẩn kỹ thuật quốc
                gia về an toàn điện QCVN 01:2020/BCT (Có hiệu lực từ
                01/06/2021) quy định về các biện pháp làm việc với điện cao
                áp như sau: - Khi làm việc với điện cao áp như kiểm tra, sửa
                chữa và vệ sinh phần có điện hoặc sứ cách điện (vật liệu
                cách điện khác), nhân viên đơn vị công tác sử dụng các trang
                bị, dụng cụ cho làm việc có điện, trong trường hợp này
                khoảng cách cho phép nhỏ nhất đối với các phần có điện xung
                quanh khác (nếu chưa được bọc cách điện) phải bảo đảm tương
                ứng theo cấp điện áp công tác của mạch điện quy định ở bảng
                sau: Cấp điện áp đường dây (kV)Từ 01 đến 35 Khoảng cách cho
                phép nhỏ nhất (m) 0,6, trên 35 đến 110 là 1,0; 220 là
                2,0;500 là 4,0 - Khi chuyển các dụng cụ hoặc chi tiết bằng
                kim loại lên cột phải bảo đảm cho chúng không đến gần dây
                dẫn với khoảng quy định tại khoản 25.1. Trân trọng!"
            />
        ),
    },
    {
        key: "3",
        label: (
            <Question
                user={{ name: "Lê Minh Thọ" }}
                type="Trách nhiệm hình sự"
                title="Quyết định truy nã bị can có bắt buộc phải có ảnh hay không?"
                description="Xin hỏi trường hợp ra quyết định truy nã bị can thì quyết định này có bắt buộc phải có ảnh bị can hay không?"
            />
        ),
        children: (
            <Answer
                user={{ name: "Lê Minh Thọ" }}
                content="Căn cứ Khoản 2 Điều 231 Bộ luật Tố tụng Hình sự 2015 quy định về quyết định truy nã bị can như sau:
                Quyết định truy nã ghi rõ họ tên, ngày, tháng, năm sinh, nơi cư trú của bị can, đặc điểm để nhận dạng bị can, tội phạm mà bị can đã bị khởi tố 
                và các nội dung quy định tại khoản 2 Điều 132 của Bộ luật này; kèm theo ảnh bị can (nếu có).
                Quyết định truy nã bị can được gửi cho Viện kiểm sát cùng cấp và thông báo công khai để mọi người phát hiện, bắt người bị truy nã.               
                Theo quy định này thì quyết định truy nã bị can không bắt buộc phải có ảnh bị can.              
                Trân trọng!"
            />
        ),
    },
    {
        key: "4",
        label: (
            <Question
                user={{ name: "Lê Minh Thọ" }}
                type="Quyền dân sự"
                title="Thời gian vừa rồi em bị ng ta hành hung và bắt nhốt em sau đó họ bắt e đứng ra trả góp mua ip12 rồi"
                description="Em muốn kiện"
            />
        ),
        children: (
            <Answer
                user={{
                    name: "Trần Đức Thành",
                    img: "https://ttpl.vn/files/profile_images/_file619b54e9cbeab-avatar.png",
                }}
                content="
                    Rất tiếc về những gì bạn đã trải qua. Để kiện cáo hành vi hành hung và giam giữ trái phép, cũng như ép buộc mua hàng trả góp mà bạn không đồng ý, bạn cần thực hiện các bước sau:
                    Liên hệ với cơ quan công an:
                    Điện thoại hoặc trực tiếp đến địa chỉ công an phường, quận nơi bạn sinh sống hoặc nơi xảy ra vụ việc để báo cáo sự việc.
                    Cung cấp thông tin cá nhân, mô tả chi tiết về sự việc, thời gian, địa điểm xảy ra, và danh tính (nếu biết) của người đã hành hung bạn.
                    Làm đơn trình báo:
                    Yêu cầu hỗ trợ từ cán bộ công an để biết cách viết đơn trình báo. Đơn này cần bao gồm thông tin cá nhân của bạn, thông tin chi tiết về sự việc, và yêu cầu của bạn đối với cơ quan chức năng (điều tra, xử lý, bảo vệ, v.v.).
                    Trong trường hợp bạn cảm thấy khó khăn trong việc viết đơn, hãy nhờ sự giúp đỡ từ người thân, bạn bè, hoặc luật sư.
                    Sưu tập chứng cứ:
                    Những bằng chứng như tin nhắn, cuộc gọi, video, hình ảnh, hoặc chứng cứ khác có liên quan đến vụ việc có thể giúp củng cố lập luận của bạn.
                    Nếu có vết thương hoặc thương tích, bạn nên đến cơ sở y tế để được kiểm tra và lưu giữ hồ sơ y tế làm bằng chứng.
                    Tìm kiếm sự hỗ trợ pháp lý:
                    Nếu có khả năng, bạn nên tìm sự hỗ trợ từ luật sư để được tư vấn chi tiết và chuẩn bị cho quá trình pháp lý sắp tới.
                    Đối với những người có hoàn cảnh khó khăn, có thể tìm hỗ trợ pháp lý miễn phí từ các tổ chức xã hội.
                    Bảo vệ bản thân và tinh thần:
                    Trong quá trình này, hãy chú ý đến sức khỏe tinh thần và an ninh cá nhân của bản thân. Đừng ngần ngại tìm kiếm sự giúp đỡ từ gia đình, bạn bè, hoặc chuyên gia tâm lý.
                    Nhớ rằng bạn không cô đơn trong cuộc chiến này và luôn có quyền lợi được bảo vệ theo pháp luật. Chúc bạn sớm khắc phục được sự việc và tìm được công lý."
            />
        ),
    },
    {
        key: "5",
        label: (
            <Question
                user={{ name: "Lê Minh Thọ" }}
                type="Đầu tư"
                title="Chủ trương đầu tư xây dựng sân gôn 18 lỗ từ năm 2021 do ai chấp thuận?"
                description="Sang năm 2021, bên em đang có ý định đầu tư xây dựng sân gôn 18 lỗ, dự kiến khoảng 80 ha thì chủ trương đầu tư xây dựng dự án sân gôn này do cơ quan nào chấp thuận?"
            />
        ),
        children: <Answer user={undefined} content={undefined} />,
    },
];

function ContenUserQ({page}: {page: number}) {
    const renderIcon = (isActive?: boolean) => {
        return (
            <div className="mt-20 rounded-full w-7 h-7 p-1 overflow-hidden bg-[#4755D4]">
                <img
                    src={
                        !!isActive
                            ? "/images/icons/up.png"
                            : "/images/icons/down.png"
                    }
                    alt="expand icon"
                />
            </div>
        );
    };

    return (
        <Collapse
            className={`bg-[#f1f5ff]`}
            collapsible="icon"
            ghost
            items={items_USER}
            expandIconPosition="end"
            expandIcon={({ isActive }) => renderIcon(isActive)}
        />
    );
}

export default ContenUserQ;