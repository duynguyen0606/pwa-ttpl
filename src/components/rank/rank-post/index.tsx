import { Button } from 'antd';
import Image from 'next/image';
import ImageLegacy from 'next/legacy/image';
import './style.scss';

function RankPost() {
  return (
    <div
      id='rank-post'
      className='flex gap-2 items-center bg-white p-4 rounded-lg'
    >
      <div className='text-xl font-semibold'>#1</div>
      <div>
        <div className='flex justify-between items-center pb-2 border-b-[2px] border-solid border-slate-100'>
          <div className='flex gap-2'>
            <div className='w-10'>
              <Image
                src='https://ttpl.vn/files/profile_images/_file60efb3760fc90-avatar.png'
                alt='avatar'
                width={40}
                height={40}
                className='rounded-full'
              />
            </div>
            <div>
              <div className='font-semibold'>Trần Mỹ Dung</div>
              <div style={{ color: 'var(--description-color)' }}>
                708 ngày trước
              </div>
            </div>
          </div>
          <Button>Theo dõi</Button>
        </div>
        <div className='flex gap-4 py-4'>
          <div className='flex-1'>
            <h2 className='font-semibold text-xl'>Biểu cam kết WTO</h2>
            <p
              className='dot-4 rank-post-desc'
              dangerouslySetInnerHTML={{
                __html:
                  ' Việt Nam gia nhập WTO là một trong những nguyên nhân giúp đất nước ta thu hút được nhiều vốn đầu tư nước ngoài hơn. Vậy tại sao như thế? mọi người cùng Legalzone tìm hiểu về tầm quan trọng và ý nghĩa của biểu cam kết ra saoBIỂU CAM KẾT WTOĐàm phán mở cửa thị trường dịch vụ trong khuôn khổ đàm phán gia nhập Tổ chức thương mại thế giới (WTO) được tiến hành theo các nguyên tắc của Hiệp định chung về thương mại dịch vụ (GATS).Dựa trên những nguyên tắc này, các quốc gia hay vùng lãnh thổ chưa là Thành viên WTO tiến hành đàm phán mở cửa thị trường với các Thành viên WTO căn cứ theo yêu cầu đàm phán mà các Thành viên này đưa ra.Kết quả đàm phán cuối cùng được thể hiện trong Biểu cam kết cụ thể về thương mại dịch vụ (xin gọi tắt là Biểu cam kết dịch vụ)Nội dung của Biểu cam kết dịch vụBiểu cam kết dịch vụ gồm 3 phần:cam kết chung;cam kết cụ thể ;và danh mục các biện pháp miễn trừ đối xử tối huệ quốc (MFN).Phần cam kết chung:Bao gồm các cam kết được áp dụng chung cho tất cả các ngành và phân ngành dịch vụ đưa vào Biểu cam kết dịch vụ.  Phần này chủ yếu đề cập tới những vấn đề kinh tế - thương mại tổng quát như các quy định về chế độ đầu tư, hình thức thành lập doanh nghiệp, thuê đất, các biện pháp về thuế, trợ cấp cho doanh nghiệp trong nước v.v…Phần cam kết cụ thể:Bao gồm các cam kết được áp dụng cho từng dịch vụ đưa vào Biểu cam kết dịch vụ.Mỗi dịch vụ đưa ra trong Biểu cam kết như dịch vụ viễn thông, dịch vụ bảo hiểm, dịch vụ ngân hàng, dịch vụ vận tải, v..v sẽ có nội dung cam kết cụ thể áp dụng riêng cho dịch vụ đó.Nội dung cam kết thể hiện mức độ mở cửa thị trường đối với từng dịch vụ và mức độ đối xử quốc gia dành cho nhà cung cấp dịch vụ nước ngoài trong dịch vụ đó.Danh mục các biện pháp miễn trừ đối xử tối huệ quốc liệt kê các biện pháp:Được duy trì để bảo lưu việc vi phạm nguyên tắc MFN đối với những dịch vụ có duy trì biện pháp miễn trừ. Theo quy định của GATS, một thành viên được vi phạm nguyên tắc MFN nếu thành viên đó đưa biện pháp vi phạm vào danh mục các biện pháp miễn trừ đối xử tối huệ quốc và được các Thành viên WTO chấp thuận.Cấu trúc của Biểu cam kết dịch vụBiểu cam kết dịch vụ gồm 4 cột:cột mô tả ngành/phân ngành;cột hạn chế về tiếp cận thị trường;cột hạn chế về đối xử quốc gia vàcột cam kết bổ sung.Cột mô tả ngành/phân ngành thể hiện tên dịch vụ cụ thể được đưa vào cam kết.Theo danh mục phân loại ngành dịch vụ của Ban Thư ký WTO, có tất cả 11 ngành và 155 phân ngành dịch vụ được các Thành viên WTO tiến hành đàm phán.Mỗi ngành hoặc phân ngành trong danh mục phân loại được xác định tương ứng với mã số của Bảng phân loại sản phẩm trung tâm (CPC).Kiểu xác định này cũng tương tự như xác định mã phân loại hàng hoá (HS) trong biểu thuế xuất nhập khẩu.Ví dụ, một thành viên muốn đưa ra một bản chào hoặc một cam kết đối với phân ngành dịch vụ bảo hiểm nhân thọ. Trong danh mục của Ban thư ký WTO (W/120), dịch vụ này thuộc phần có tiêu đề chung gọi là "Dịch vụ bảo hiểm". Thông qua việc tham chiếu đến CPC, dịch vụ bảo hiểm nhân thọ có số phân loại CPC tương ứng là 8129.Cột hạn chế về tiếp cận thị trường liệt kê các biện pháp duy trì đối với các nhà cung cấp dịch vụ nước ngoài.GATS quy định 6 loại biện pháp hạn chế bao gồm:1) hạn chế về số lượng nhà cung cấp dịch vụ;2) hạn chế về tổng giá trị của các giao dịch hoặc tài sản;3) hạn chế về tổng số hoạt động dịch vụ hoặc số lượng dịch vụ cung cấp;4) hạn chế về số lượng lao động;5) hạn chế hình thức thành lập doanh nghiệp;6) hạn chế góp vốn của nước ngoài.Biểu cam kết nào liệt kê càng nhiều biện pháp nói trên thì mức độ mở cửa thị trường cho các nhà cung cấp dịch vụ nước ngoài càng hẹp. Cột hạn chế về đối xử quốc gia liệt kê các biện pháp nhằm duy trì sự phân biệt đối xử giữa nhà cung cấp dịch vụ trong nước với nhà cung cấp dịch vụ nước ngoài.Biểu cam kết nào liệt kê càng nhiều biện pháp trong cột hạn chế về đối xử quốc gia thì sự phân biệt đối xử giữa các nhà cung cấp dịch vụ trong nước với các nhà cung cấp dịch vụ nước ngoài càng lớn.Cột cam kết bổ sung liệt kê các biện pháp ảnh hưởng đến hoạt động cung cấp và tiêu dùng dịch vụ nhưng không thuộc về hạn chế tiếp cận thị trường hay hạn chế về đối xử quốc gia.Cột này mô tả những quy định liên quan đến trình độ, tiêu chuẩn kỹ thuật, các yêu cầu hoặc thủ tục về việc cấp phép v.v…Phương pháp "chọn - bỏ" và "chọn - cho"Phương pháp "chọn - bỏ" (negative approach) là cam kết theo dạng "được làm tất cả những gì không bị hạn chế". Phương pháp "chọn - cho" (positive approach) là cam kết theo dạng "chỉ được làm những gì được phép làm".WTO sử dụng phương pháp chọn - cho khi xác định phạm vi cam kết, tức là các dịch vụ được đưa vào Biểu cam kết dịch vụ. Theo đó, bên cam kết chỉ cam kết mở cửa thị trường cho các dịch vụ xuất hiện trong Biểu.Với những dịch vụ không xuất hiện trong Biểu, bên cam kết không có nghĩa vụ nào cả. Trong trường hợp của Việt Nam, những dịch vụ như quản lý bất động sản, in ấn, xuất bản v..v không xuất hiện trong Biểu cam kết dịch vụ. Điều đó có nghĩa là Việt Nam không cam kết gì cho những ngành này, ngoại trừ nghĩa vụ áp dụng các quy tắc chung của GATS.Phương pháp chọn - bỏ được sử dụng:Khi đưa ra cam kết đối với các dịch vụ được đưa vào Biểu. Theo đó, bên cam kết sẽ liệt kê toàn bộ các biện pháp hạn chế áp dụng cho dịch vụ có liên quan. Ngoài các biện pháp này, sẽ không áp dụng bất kỳ biện pháp hạn chế nào khác. Nguyên tắc là như vậy nhưng một vài Thành viên WTO, khi đi vào từng ngành cụ thể, thỉnh thoảng vẫn áp dụng phương pháp chọn - cho. Vì vậy, hai cụm từ "không hạn chế, ngoại trừ" và "chưa cam kết, ngoại trừ" (được giải thích dưới đây) thường được đưa thêm vào Biểu để khẳng định phương pháp tiếp cận tại một phương thức cung cấp dịch vụ nào đó là chọn - bỏ hay chọn - cho.Các phương thức cung cấp dịch vụ GATS quy định 4 phương thức cung cấp dịch vụ, bao gồm:1) cung cấp qua biên giới;2) tiêu dùng ngoài lãnh thổ;3) hiện diện thương mại;4) hiện diện thể nhân.Phương thức cung cấp qua biên giới (gọi tắt là Phương thức 1)Là phương thức theo đó dịch vụ được cung cấp từ lãnh thổ của một Thành viên này sang lãnh thổ của một Thành viên khác, tức là không có sự di chuyển của người cung cấp và người tiêu thụ dịch vụ sang lãnh thổ của nhau.Ví dụ, các dịch vụ tư vấn có thể cung cấp theo phương thức này.Phương thức tiêu dùng ngoài lãnh thổ (gọi tắt là Phương thức 2)Là phương thức theo đó người tiêu dùng của một Thành viên di chuyển sang lãnh thổ của một Thành viên khác để tiêu dùng dịch vụ.Ví dụ, khách du lịch nước ngoài sang Việt Nam.Phương thức hiện diện thương mại (gọi tắt là Phương thức 3)Là phương thức theo đó nhà cung cấp dịch vụ của một Thành viên thiết lập các hình thức hiện diện như công ty 100% vốn nước ngoài, công ty liên doanh, chi nhánh v.v…trên lãnh thổ của một Thành viên khác để cung cấp dịch vụ.Ví dụ, ngân hàng Hoa Kỳ thành lập chi nhánh để kinh doanh tại Việt Nam.Phương thức hiện diện thể nhân (gọi tắt là Phương thức 4)Là phương thức theo đó thể nhân cung cấp dịch vụ của một Thành viên di chuyển sang lãnh thổ của một Thành viên khác để cung cấp dịch vụ.Ví dụ, các nghệ sĩ nước ngoài sang Việt Nam biểu diễn nghệ thuật.Cam kết được đưa ra cho từng phương thức từ 1 đến 4 trong hai cột hạn chế về tiếp cận thị trường và hạn chế về đối xử quốc gia.Mức độ cam kếtDo các điều kiện được sử dụng trong Biểu cam kết của mỗi Thành viên sẽ tạo ra các cam kết có tính ràng buộc pháp lý nên cần chính xác trong việc thể hiện có hay không có các hạn chế về tiếp cận thị trường và về đối xử quốc gia.Phụ thuộc vào mức độ hạn chế mà mỗi Thành viên có thể đưa ra, thường có bốn trường hợp sau:Cam kết toàn bộ Các Thành viên không đưa ra bất cứ hạn chế nào về tiếp cận thị trường hay đối xử quốc gia đối với một hoặc nhiều dịch vụ hay đối với một hoặc nhiều phương thức cung cấp dịch vụ.Khi đó, các Thành viên sẽ thể hiện trong Biểu cam kết của mình cụm từ “Không hạn chế” vào các cột và phương thức cung cấp dịch vụ thích hợp.Tuy vậy, các hạn chế được liệt kê trong phần cam kết chung vẫn được áp dụng.Cam kết kèm theo những hạn chếCác Thành viên chấp nhận mở cửa thị trường cho một hoặc nhiều ngành dịch vụ nhưng liệt kê tại các cột tương ứng của Biểu cam kết các biện pháp hạn chế áp dụng cho nhà cung cấp dịch vụ nước ngoài.Khi đó, các Thành viên sẽ thể hiện trong Biểu cam kết của mình các cụm từ như “Không hạn chế, ngoại trừ ….” hoặc “Chưa cam kết, ngoại trừ….”.Xuất phát từ nguyên tắc chọn - bỏ, nếu chỉ liệt kê biện pháp mà không kèm theo một trong hai cụm từ trên thì đương nhiên hiểu là "Không hạn chế, ngoại trừ ..".Không cam kếtCác Thành viên có thể duy trì khả năng đưa ra mọi biện pháp hạn chế tiếp cận thị trường và đối xử quốc gia đối với một hoặc nhiều phương thức cung cấp dịch vụ cụ thể. Khi đó, các Thành viên sẽ thể hiện trong Biểu cam kết cụm từ “Chưa cam kết”. Trong trường hợp này, các cam kết liệt kê trong phần cam kết chung vẫn được áp dụng.Không cam kết vì không có tính khả thi kỹ thuậtTrong một số trường hợp, một phương thức cung cấp dịch vụ có thể là không khả thi về mặt kỹ thuật. Ví dụ, dịch vụ xây nhà cung cấp qua biên giới.Khi đó, các Thành viên sẽ thể hiện cụm từ “Chưa cam kết" nhưng ghi chú là "do không khả thi về mặt kỹ thuật"./.Biểu WTO dùng để làm gì?Là kết quả đàm phán giữa Việt Nam với các thành viên khác của WTO nhằm mở cửa thị trường dịch vụ khi gia nhập WTO. Biểu cam kết của Việt Nam khi gia nhập WTO gồm 3 phần: cam kết chung, cam kết cụ thể và danh mục các biện pháp miễn trừ đối xử tối hệ quốc (MFN). Biểu cam kết WTO khi Việt Nam là thành viên, cam kết mở cửa của Việt Nam đối với các ngành trong đây ( và tùy theo mức độ mở cửa của Việt Nam đối với các mã ngành sẽ có điều kiện riêng đối với từng mã ngành trong biểu, và phương thức hiện diện được Việt Nam cam kết)Vai trò của biểu cam kếtLà kết quả đàm phán cuối cùng của các thành viên được thể hiện trong Biểu cam kết cụ thể về thương mại dịch vụ. Biểu cam kết thể hiện mức độ mở cửa, phương thức hiện diện,..của các nhà đầu tư nước ngoài khi tham gia nhập vào thị trường của các nước thành viên khác trong biểu.Mã CPC trong bi…',
              }}
            />
          </div>
          <div style={{ width: 148 }}>
            <Image
              src='https://ttpl.vn/files/timeline_files/timeline_post_file61f345e84affa-1w--3-.jpg.webp'
              alt='image'
              width={148}
              height={148}
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex'>
            <Image
              src='/images/icons/like-circle.png'
              alt='like icon'
              width={20}
              height={20}
            />
            8
          </div>
          <div className='flex gap-2'>
            <span>84 lượt xem</span>
            <span>0 bình luận</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RankPost;
