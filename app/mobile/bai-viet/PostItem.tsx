import { DislikeIcon, LikeIcon, LikedIcon } from "@/src/assests/icons";

function PostItem() {
    return ( 
        <div className="px-4 pt-4 mb-2 bg-white ">
            <header className="flex justify-between mb-2">
                <div className="flex">
                    <img src="https://ttpl.vn/assets/images/logo/logo-legalzone.png" className="w-10 h-10 object-cover rounded-full" alt="avatar"/>
                    <div className="flex flex-col ml-2 justify-center">
                        <a href="#" className="text-sm font-bold text-[#262C41]">
                            {`Phạm Diễm Thư`}
                        </a>
                        <p className="text-xs text-[#B5B9C7]">
                            {`${18} ngày trước`}
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center ">
                    <div className="rounded py-[6px] px-[10px] text-xs font-medium text-[#262C41] bg-[#F4F5F8]">
                        Theo dõi
                    </div>
                </div>
            </header>

            <div>
                <div className="overflow-hidden">
                    <img loading="lazy" src="https://drive.google.com/thumbnail?id=1Rjt7q0xvL0JFWcoTql-stBdJSAJnguVU&amp;sz=s1000" alt="Bài viết" />
                </div>
                <div className="mt-2">
                    <a href="#" className="text-sm font-bold text-[#262C41] overflow-hidden">
                        {`Mức tạm ứng tiền lương của người lao động là bao nhiêu?`}
                    </a>
                    <p className="text-xs text-[#686E7E] my-1 line-clamp-3">
                        {`Khi xét về mức tạm ứng tiền lương của người lao động, việc hiểu rõ quy định và các trường hợp được đề cập trong Bộ luật Lao động 2019 là vô cùng quan trọng. Việc này không chỉ đảm bảo quyền lợi cho người lao động mà còn tạo ra sự minh bạch và công bằng trong quy trình trả lương. Cùng Thủ tục pháp luật điểm qua các quy định chi tiết về mức tạm ứng tiền lương dựa trên từng trường hợp cụ thể.1. Quy định về trả lương cho người lao động. Quy định về việc trả lương cho người lao động không chỉ là một điều cần thiết để bảo vệ quyền lợi của họ mà còn là nền tảng quan trọng của môi trường lao động công bằng và minh bạch. Căn cứ theo Điều 95 Bộ luật Lao động 2019 quy định về trả lương cho người lao động như sau:- Người sử dụng lao động trả lương cho người lao động căn cứ vào tiền lương đã thỏa thuận, năng suất lao động và chất lượng thực hiện công việc.- Tiền lương ghi trong hợp đồng lao động và tiền lương trả cho người lao động bằng tiền Đồng Việt Nam, trường hợp người lao động là người nước ngoài tại Việt Nam thì có thể bằng ngoại tệ.- Mỗi lần trả lương, người sử dụng lao động phải thông báo bảng kê trả lương cho người lao động, trong đó ghi rõ tiền lương, tiền lương làm thêm giờ, tiền lương làm việc vào ban đêm, nội dung và số tiền bị khấu trừ (nếu có).2. Mức tạm ứng tiền lương&nbsp;- Trường hợp hưởng lương theo sản phẩm, theo khoán (khoản 3 Điều 97 Bộ luật Lao động 2019)+ Người lao động hưởng lương theo sản phẩm, theo khoán được trả lương theo thỏa thuận của hai bên; nếu công việc phải làm trong nhiều tháng thì hằng tháng được&nbsp;tạm ứng tiền lương theo khối lượng công việc đã làm trong tháng.- Trường hợp thỏa thuận (khoản 1 Điều 101 Bộ luật Lao động 2019)+ Người lao động được&nbsp;tạm ứng tiền lương theo điều kiện do hai bên thỏa thuận&nbsp;và không bị tính lãi.- Trường hợp thực hiện nghĩa vụ công dân (khoản 2 Điều 101 Bộ luật Lao động 2019)+ Người sử dụng lao động phải cho người lao động tạm ứng tiền lương tương ứng với số ngày người lao động tạm thời nghỉ việc để thực hiện nghĩa vụ công dân từ 01 tuần trở lên nhưng&nbsp;tối đa không quá 01 tháng tiền lương&nbsp;theo hợp đồng lao động và người lao động phải hoàn trả số tiền đã tạm ứng.+ Người lao động nhập ngũ theo quy định của Luật Nghĩa vụ quân sự thì không được tạm ứng tiền lương.- Trường hợp nghỉ hằng năm (khoản 5 Điều 113 Bộ luật Lao động 2019)+ Khi nghỉ hằng năm mà chưa đến kỳ trả lương, người lao động được tạm ứng tiền lương theo quy định tại khoản 3 Điều 101 của Bộ luật này.+ Khoản 3 Điều 101 của Bộ luật này quy định: Khi nghỉ hằng năm, người lao động được tạm ứng một khoản tiền&nbsp;ít nhất bằng tiền lương của những ngày nghỉ.- Trường hợp bị tạm đình chỉ công việc (khoản 2 Điều 128 Bộ luật Lao động 2019)+ Thời hạn tạm đình chỉ công việc không được quá 15 ngày, trường hợp đặc biệt không được quá 90 ngày. Trong thời gian bị tạm đình chỉ công việc, người lao động được tạm ứng&nbsp;50% tiền lương&nbsp;trước khi bị đình chỉ công việc.+ Hết thời hạn tạm đình chỉ công việc, người sử dụng lao động phải nhận người lao động trở lại làm việc.Kết luậnSự cụ thể và minh bạch trong quy định về tạm ứng tiền lương là yếu tố cơ bản đảm bảo quyền lợi cho người lao động. Điều này không chỉ đem lại sự an tâm cho người lao động mà còn tạo ra nền tảng vững chắc cho mối quan hệ giữa người lao động và người sử dụng lao động. Việc áp dụng đúng, minh bạch các quy định này không chỉ là trách nhiệm pháp lý mà còn là nền tảng của một môi trường làm việc hài hòa, công bằng và tích cực.`}
                    </p>
                </div>
            </div>

            <footer>
                <div className="top-footer flex items-center justify-between py-1 text-xs text-[#B5B9C7]">
                    <div className="show-like text-sm flex flex-row">
                        <LikedIcon className="h-[18px] w-[18px] mr-1" />
                        <span>{`1826`}</span>
                    </div>
                    <div className="comment-shared flex flex-row items-center font-medium">
                        <div className="comment">
                            {`${101} bình luận`}
                        </div>
                        <div className="w-1 h-1 mx-[6px] bg-[#A1A5AC] rounded-full"></div>
                        <div className="shared">
                            {`${2} lượt chia sẻ`}
                        </div>
                    </div>
                </div>
                <div className="bottom-footer
                    flex items-center justify-between 
                    border-t-[1px] border-solid border-[#E5E5E5] 
                    flex-wrap 
                    py-2 mt-1
                    text-sm font-medium text-[#686E7E]
                ">
                    <div className="flex flex-row items-center">
                        <LikeIcon className="h-[18px] w-[18px]" />
                        <span className="ml-2">Like</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <DislikeIcon className="h-[18px] w-[18px]" />
                        <span className="ml-2">Dislike</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className="" src="https://ttpl.vn/assets/images/icon/Comment.png" alt="comment" />
                        <span className="ml-2">Comment</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className="" src="https://ttpl.vn/assets/images/icon/Share.png" alt="share" />
                        <span className="ml-2">Share</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default PostItem;