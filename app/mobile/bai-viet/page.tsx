'use client';

import Link from 'next/link';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import PostItem from './PostItem';
import { useState } from 'react';

function Post() {
  const data = [
    {
      id: 0,
      user: 'Phạm Diễm Thư',
      publishAt: 18,
      like: 1423,
      comment: 154,
      share: 213,
      src: 'https://drive.google.com/thumbnail?id=1aspHa-7NRtQHe3nzMIFSBXJY7wWfqQj5&sz=s1000',
      title: 'Vi phạm nồng độ cồn có bị giữ xe không?',
      description:
        'Việc xử lý vi phạm nồng độ cồn của tài xế trên đường là một vấn đề nghiêm trọng đối với an toàn giao thông và sự bảo đảm của người tham gia vào lưu thông. Trong bài viết này, hãy cùng Thủ tục pháp luật đi vào chi tiết về quá trình tạm giữ xe trong trường hợp này và thời hạn được quy định cho việc này.1.Tài xế vi phạm nồng độ cồn có bị giữ xe không?Tài xế vi phạm nồng độ cồn đang lái xe là một hành vi nguy hiểm đối với an toàn giao thông, có khả năng gây ra tai nạn đáng tiếc cho cả người lái và các phương tiện khác tham gia vào giao thông. Vì vậy, việc áp dụng biện pháp tạm giữ xe (hoặc biện pháp tạm giữ phương tiện) là một giải pháp quan trọng để ngăn chặn và đảm bảo xử lý vi phạm hành chính này.Việc tạm giữ xe được quy định tại Điều 82 của Nghị định 100/2019/NĐ-CP, và được sửa đổi bởi Nghị định 123/2021/NĐ-CP. Theo quy định này, Cảnh sát giao thông có quyền tạm giữ phương tiện trước khi đưa ra quyết định xử phạt đối với những trường hợp vi phạm nồng độ cồn. Các điểm cụ thể bao gồm:- Vi phạm về nồng độ cồn đối với người điều khiển xe ô tô tại các điểm c khoản 6, c khoản 8 và điểm 10 Điều 5.- Vi phạm về nồng độ cồn đối với người điều khiển xe máy tại các điểm c khoản 6, c khoản 7 và điểm e khoản 8 Điều 6.- Vi phạm về nồng độ cồn đối với người điều khiển máy kéo, xe máy chuyên dùng tại các điểm c khoản 6, b khoản 7 và a khoản 9 Điều 7.- Vi phạm về nồng độ cồn đối với người điều khiển xe đạp tại các điểm q khoản 1, e khoản 3 và c khoản 4 Điều 8.Tất cả người tham gia giao thông bằng các phương tiện giao thông đường bộ, bao gồm ô tô, xe máy, máy kéo, xe máy chuyên dùng và xe đạp đều có thể bị Cảnh sát giao thông tạm giữ xe nếu vi phạm nồng độ cồn theo các điều khoản quy định.Quy trình tạm giữ xe diễn ra bằng cách lập biên bản tạm giữ phương tiện với 02 bản, có lấy chữ ký của người vi phạm và giao cho họ 01 bản theo quy định tại Điều 125 của Luật Xử lý vi phạm hành chính. Điều này giúp tạo ra bước ngăn chặn ngay lập tức đối với tình huống nguy hiểm này, bảo vệ an toàn cho tất cả người tham gia giao thông và ngăn chặn tiềm năng gây ra tai nạn nghiêm trọng do vi phạm nồng độ cồn.2. Thời hạn tạm giữ xe đối với vi phạm nồng độ cồn:Thời hạn tạm giữ xe khi tài xế vi phạm nồng độ cồn được xác định dựa trên quy định chung về tạm giữ phương tiện theo Điều 125 của Luật Xử lý vi phạm hành chính. Theo quy định này:Thời hạn tạm giữ xe đối với trường hợp vi phạm nồng độ cồn là không quá 07 ngày làm việc, tính từ ngày phương tiện bị tạm giữ thực tế. Điều này đảm bảo rằng phương tiện sẽ được tạm giữ trong khoảng thời gian ngắn nhằm đảm bảo an toàn giao thông và tránh tai nạn do vi phạm nồng độ cồn.Tuy nhiên, thời hạn tạm giữ xe có thể được kéo dài trong các trường hợp sau đây:- Trong trường hợp vụ việc phải chuyển hồ sơ đến người có thẩm quyền xử phạt, thời hạn tạm giữ xe không quá 10 ngày làm việc. Điều này có thể xảy ra khi có sự can thiệp của cơ quan quản lý và xử phạt.- Trong vụ việc mà cá nhân hoặc tổ chức có yêu cầu giải trình hoặc cần xác minh các tình tiết liên quan, thời hạn tạm giữ xe không quá 01 tháng. Điều này áp dụng khi có nhu cầu điều tra thêm hoặc cần rõ các thông tin liên quan đến vi phạm.- Trong trường hợp vụ việc đặc biệt nghiêm trọng, có nhiều tình tiết phức tạp, cần thêm thời gian để xác minh và thu thập chứng cứ, thời hạn tạm giữ xe không quá 02 tháng. Điều này áp dụng khi việc vi phạm nồng độ cồn có tính chất nghiêm trọng và cần phải điều tra kỹ càng trước khi đưa ra quyết định xử lý cuối cùng.Tóm lại, thời hạn tạm giữ xe do vi phạm nồng độ cồn có thể biến đổi tùy theo tình huống cụ thể và các yếu tố liên quan đến việc xử lý vi phạm hành chính.Bên cạnh đó người vi phạm nồng độ cồn bị tạm giữ xe phải đến lấy xe đúng thời hạn được quy định. Nếu quá thời hạn này mà không đến nhận xe, xe máy của người vi phạm có thể bị xử lý theo quy định tại khoản 8 của Điều 1 trong Nghị định 31/2020/NĐ-CP.Theo quy định này, trong khoảng thời gian 03 ngày, tính từ ngày hết thời hạn tạm giữ, nếu người vi phạm không đến nhận mà không có lý do chính đáng, người đã ra quyết định tạm giữ phải thông báo thông tin trên phương tiện cho công chúng thông qua cơ quan trung ương hoặc địa phương nơi tạm giữ phương tiện, và phải niêm yết công khai thông tin này tại trụ sở của cơ quan có thẩm quyền tạm giữ.Sau khi đã qua 30 ngày kể từ ngày thông báo cuối cùng được niêm yết công khai trên phương tiện, nếu người vi phạm không đến nhận hoặc không thể xác định được người vi phạm, người có thẩm quyền sẽ phải ra quyết định tịch thu tang vật, phương tiện vi phạm hành chính để xử lý theo quy định của pháp luật.Khi phương tiện bị tịch thu, nó sẽ được chuyển thành tài sản công và sẽ điều tra, xử lý theo trình tự, thủ tục quy định trong Luật Quản lý và Sử dụng Tài sản Công cộng và các văn bản liên quan.Kết luậnTài xế vi phạm nồng độ cồn đang lái xe không chỉ gây nguy hiểm cho bản thân mình mà còn đe dọa an toàn của những người khác trên đường. Việc tạm giữ xe là một biện pháp cần thiết để ngăn chặn vi phạm này và đảm bảo rằng người vi phạm phải chịu trách nhiệm.&nbsp',
    },
    {
      id: 1,
      user: 'Phạm Diễm Thư',
      publishAt: 19,
      like: 17,
      src: 'https://drive.google.com/thumbnail?id=1Noa1XZ9-ChxwoPj_A4aM5bZGo33KaCUJ&sz=s1000',
      title: 'Xử phạt tàng trữ, không giao nộp vật liệu nổ',
      description:
        'Trong hệ thống quy định về quản lý vũ khí, vật liệu nổ, và công cụ hỗ trợ, nguyên tắc giao nộp vật liệu nổ là một trong những điểm nổi bật nhằm đảm bảo an toàn và sự kiểm soát chặt chẽ đối với các loại vũ khí và vật liệu nguy hiểm. Hãy cùng Thủ tục pháp luật tìm hiểu về nguyên tắc này và hình phạt đối với việc không tuân thủ chúng trong bài viết dưới đây.I. Nguyên tắc giao nộp vật liệu nổTheo Điều 63 của Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ năm 2017, quy định rõ nguyên tắc tiếp nhận, thu gom, phân loại, bảo quản, thanh lý, tiêu hủy vũ khí, vật liệu nổ và công cụ hỗ trợ. Theo quy định này, cơ quan, tổ chức, cá nhân có trách nhiệm trình báo, khai báo, và giao nộp vũ khí, vật liệu nổ, công cụ hỗ trợ cho cơ quan quân sự, cơ quan Công an hoặc Ủy ban nhân dân nơi gần nhất trong trường hợp không thuộc đối tượng được trang bị, sử dụng theo quy định của pháp luật, bất kể nguồn gốc hoặc phát hiện, thu nhặt từ bất kỳ nguồn nào.II. Xử phạt hành chính khi tàng trữ và không giao nộp vật liệu nổTheo khoản 4 Điều 11 Nghị định 144/2021/NĐ-CP, việc xử phạt hành chính đối với hành vi vi phạm quy định về quản lý sử dụng vũ khí, vật liệu nổ, tiền chất thuốc nổ, công cụ hỗ trợ có những quy định cụ thể. Mức phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng áp dụng đối với các hành vi sau đây:Chế tạo, trang bị, tàng trữ, vận chuyển, sửa chữa, sử dụng trái phép vũ khí thô sơ, công cụ hỗ trợ; chi tiết, cụm chi tiết vũ khí, công cụ hỗ trợ hoặc phụ kiện nổ.Chế tạo, tàng trữ, vận chuyển, sử dụng trái phép các loại vũ khí có tính năng, tác dụng tương tự súng săn, vũ khí thô sơ, vũ khí thể thao hoặc các chi tiết, cụm chi tiết để sản xuất, chế tạo vũ khí, công cụ hỗ trợ có tính năng, tác dụng tương tự.Đào bới, tìm kiếm, thu gom trái phép vũ khí, vật liệu nổ, công cụ hỗ trợ, phế liệu, phế phẩm vũ khí, vật liệu nổ, công cụ hỗ trợ.Vận chuyển, tàng trữ trái phép pháo, thuốc pháo hoặc nguyên liệu, phụ kiện để sản xuất pháo.Cưa, cắt, đục hoặc thực hiện các thao tác khác để tháo bom, mìn, đạn, lựu đạn, quả nổ, ngư lôi, thủy lôi và các loại vũ khí khác trái phép.Ngoài mức phạt tiền, việc tàng trữ vật liệu nổ mà không giao nộp còn phải chịu những hình phạt bổ sung và biện pháp khắc phục hậu quả. Cụ thể:Tịch thu tang vật, phương tiện vi phạm hành chính.Buộc nộp lại số lợi bất hợp pháp có được do thực hiện hành vi vi phạm hành chính.Hình phạt và biện pháp khắc phục này cũng được áp dụng đối với các trường hợp cụ thể theo quy định của Nghị định. Mức phạt có thể gấp đôi đối với tổ chức, theo quy định tại Khoản 2 Điều 4 của Nghị định 144/2021/NĐ-CP.Tóm lại, việc tàng trữ và không giao nộp vật liệu nổ vi phạm quy định được xử phạt hành chính với mức phạt tiền và các biện pháp khắc phục hậu quả tùy thuộc vào tính chất của vi phạm và đối tượng vi phạm, nhằm đảm bảo an toàn và quản lý hiệu quả vật liệu nổ.III. Truy cứu trách nhiệm hình sự khi tàng trữ và không giao nộp vật liệu nổDựa vào Điều 305 của Bộ luật Hình sự, việc tàng trữ hoặc không giao nộp vật liệu nổ có thể dẫn đến truy cứu trách nhiệm hình sự với các mức phạt khác nhau. Cụ thể, việc xử phạt hình sự như sau:Phạt tù từ 1 năm đến 5 năm đối với hành vi chế tạo, tàng trữ, vận chuyển, sử dụng, mua bán trái phép hoặc chiếm đoạt vật liệu nổ.Phạt tù từ 3 năm đến 10 năm đối với những trường hợp đặc biệt, bao gồm việc có tổ chức, lượng thuốc nổ từ 10 kilôgam đến dưới 30 kilôgam, sử dụng phụ kiện nổ số lượng lớn, vận chuyển hoặc mua bán qua biên giới, làm chết người, gây thương tích nặng, hoặc gây thiệt hại tài sản từ 100.000.000 đồng đến dưới 500.000.000 đồng.Phạt tù từ 7 năm đến 15 năm đối với các trường hợp nghiêm trọng hơn, như sử dụng lượng thuốc nổ từ 30 kilôgam đến dưới 100 kilôgam, sử dụng phụ kiện nổ số lượng đặc biệt lớn, làm chết ít nhất 2 người, gây thương tích nặng cho ít nhất 2 người, hoặc gây thiệt hại tài sản từ 1.500.000.000 đồng trở xuống.Phạt tù từ 15 năm đến 20 năm hoặc tù chung thân đối với các trường hợp cực kỳ nghiêm trọng, như sử dụng lượng thuốc nổ từ 100 kilôgam trở lên, sử dụng phụ kiện nổ số lượng đặc biệt lớn, làm chết ít nhất 3 người, gây thương tích nặng cho ít nhất 3 người, hoặc gây thiệt hại tài sản từ 1.500.000.000 đồng trở lên.Ngoài các mức phạt tù, người vi phạm còn có thể bị phạt tiền từ 10.000.000 đồng đến 50.000.000 đồng, bị quản chế hoặc cấm cư trú từ 1 năm đến 5 năm, tùy thuộc vào tính chất và mức độ nghiêm trọng của vi phạm.Tóm lại, việc không giao nộp vật liệu nổ hoặc tàng trữ chúng mà không tuân thủ quy định của pháp luật có thể dẫn đến xử phạt hình sự và các hình phạt bổ sung tùy thuộc vào mức độ vi phạm và hậu quả của hành vi đó.Kết luậnNguyên tắc giao nộp vật liệu nổ đã được quy định rõ ràng để đảm bảo sự an toàn và bảo vệ cộng đồng khỏi nguy cơ tiềm ẩn. Việc áp dụng hình phạt hành chính và hình phạt hình sự cho những người vi phạm giúp đặt ra sự nghiêm trọng của việc tuân thủ quy định này. Sự tuân thủ chặt chẽ nguyên tắc này là một phần quan trọng của việc đảm bảo an toàn và sự ổn định trong xã hội.',
    },
    {
      id: 2,
      user: 'Phạm Diễm Thư',
      publishAt: 19,
      comment: 24,
      src: 'https://drive.google.com/thumbnail?id=1Rjt7q0xvL0JFWcoTql-stBdJSAJnguVU&sz=s1000',
      title: 'Mức tạm ứng tiền lương của người lao động là bao nhiêu?',
      description:
        'Khi xét về mức tạm ứng tiền lương của người lao động, việc hiểu rõ quy định và các trường hợp được đề cập trong Bộ luật Lao động 2019 là vô cùng quan trọng. Việc này không chỉ đảm bảo quyền lợi cho người lao động mà còn tạo ra sự minh bạch và công bằng trong quy trình trả lương. Cùng Thủ tục pháp luật điểm qua các quy định chi tiết về mức tạm ứng tiền lương dựa trên từng trường hợp cụ thể.1. Quy định về trả lương cho người lao độngQuy định về việc trả lương cho người lao động không chỉ là một điều cần thiết để bảo vệ quyền lợi của họ mà còn là nền tảng quan trọng của môi trường lao động công bằng và minh bạch. Căn cứ theo Điều 95 Bộ luật Lao động 2019 quy định về trả lương cho người lao động như sau:- Người sử dụng lao động trả lương cho người lao động căn cứ vào tiền lương đã thỏa thuận, năng suất lao động và chất lượng thực hiện công việc.- Tiền lương ghi trong hợp đồng lao động và tiền lương trả cho người lao động bằng tiền Đồng Việt Nam, trường hợp người lao động là người nước ngoài tại Việt Nam thì có thể bằng ngoại tệ.- Mỗi lần trả lương, người sử dụng lao động phải thông báo bảng kê trả lương cho người lao động, trong đó ghi rõ tiền lương, tiền lương làm thêm giờ, tiền lương làm việc vào ban đêm, nội dung và số tiền bị khấu trừ (nếu có).2. Mức tạm ứng tiền lương&nbsp;- Trường hợp hưởng lương theo sản phẩm, theo khoán (khoản 3 Điều 97 Bộ luật Lao động 2019)+ Người lao động hưởng lương theo sản phẩm, theo khoán được trả lương theo thỏa thuận của hai bên; nếu công việc phải làm trong nhiều tháng thì hằng tháng được&nbsp;tạm ứng tiền lương theo khối lượng công việc đã làm trong tháng.- Trường hợp thỏa thuận (khoản 1 Điều 101 Bộ luật Lao động 2019)+ Người lao động được&nbsp;tạm ứng tiền lương theo điều kiện do hai bên thỏa thuận&nbsp;và không bị tính lãi.- Trường hợp thực hiện nghĩa vụ công dân (khoản 2 Điều 101 Bộ luật Lao động 2019)+ Người sử dụng lao động phải cho người lao động tạm ứng tiền lương tương ứng với số ngày người lao động tạm thời nghỉ việc để thực hiện nghĩa vụ công dân từ 01 tuần trở lên nhưng&nbsp;tối đa không quá 01 tháng tiền lương&nbsp;theo hợp đồng lao động và người lao động phải hoàn trả số tiền đã tạm ứng.+ Người lao động nhập ngũ theo quy định của Luật Nghĩa vụ quân sự thì không được tạm ứng tiền lương.- Trường hợp nghỉ hằng năm (khoản 5 Điều 113 Bộ luật Lao động 2019)+ Khi nghỉ hằng năm mà chưa đến kỳ trả lương, người lao động được tạm ứng tiền lương theo quy định tại khoản 3 Điều 101 của Bộ luật này.+ Khoản 3 Điều 101 của Bộ luật này quy định: Khi nghỉ hằng năm, người lao động được tạm ứng một khoản tiền&nbsp;ít nhất bằng tiền lương của những ngày nghỉ.- Trường hợp bị tạm đình chỉ công việc (khoản 2 Điều 128 Bộ luật Lao động 2019)+ Thời hạn tạm đình chỉ công việc không được quá 15 ngày, trường hợp đặc biệt không được quá 90 ngày. Trong thời gian bị tạm đình chỉ công việc, người lao động được tạm ứng&nbsp;50% tiền lương&nbsp;trước khi bị đình chỉ công việc.+ Hết thời hạn tạm đình chỉ công việc, người sử dụng lao động phải nhận người lao động trở lại làm việc.Kết luậnSự cụ thể và minh bạch trong quy định về tạm ứng tiền lương là yếu tố cơ bản đảm bảo quyền lợi cho người lao động. Điều này không chỉ đem lại sự an tâm cho người lao động mà còn tạo ra nền tảng vững chắc cho mối quan hệ giữa người lao động và người sử dụng lao động. Việc áp dụng đúng, minh bạch các quy định này không chỉ là trách nhiệm pháp lý mà còn là nền tảng của một môi trường làm việc hài hòa, công bằng và tích cực.',
    },
    {
      id: 3,
      user: 'Phạm Diễm Thư',
      publishAt: 19,
      share: 4,
      src: 'https://drive.google.com/thumbnail?id=1Oe-cOGcqT3TJWXhOlYxNiP-cr-nVS31u&sz=s1000',
      title: 'Phân biệt giới tính khi tuyển dụng lao động có bị xử phạt không?',
      description:
        'Trong môi trường lao động ngày nay, việc xác định và áp dụng nguyên tắc bình đẳng và không phân biệt giới tính trong quá trình tuyển dụng là vô cùng quan trọng. Điều này không chỉ tạo ra một môi trường công bằng mà còn thúc đẩy sự đa dạng và phát triển bền vững. Hãy cùng Thủ tục pháp luật tìm hiểu rõ hơn vấn đề này.1.&nbsp;Phân biệt đối xử trong lao động là gì?Căn cứ Khoản 8 Điều 3 Bộ luật Lao động 2019 quy định: “Phân biệt đối xử trong lao động&nbsp;là hành vi phân biệt, loại trừ hoặc ưu tiên dựa trên chủng tộc, màu da, nguồn gốc quốc gia hoặc nguồn gốc xã hội, dân tộc, giới tính, độ tuổi, tình trạng thai sản, tình trạng hôn nhân, tôn giáo, tín ngưỡng, chính kiến, khuyết tật, trách nhiệm gia đình hoặc trên cơ sở tình trạng nhiễm HIV hoặc vì lý do thành lập, gia nhập và hoạt động công đoàn, tổ chức của người lao động tại doanh nghiệp có tác động làm ảnh hưởng đến bình đẳng về cơ hội việc làm hoặc nghề nghiệp.”Các hành vi như vậy không chỉ vi phạm nguyên tắc căn bản của công bằng và đạo đức mà còn cản trở sự phát triển bền vững của một môi trường làm việc công bằng và hòa thuận. Để xây dựng một môi trường lao động chân thực và mang tính đa dạng, cần thiết phải loại bỏ mọi hành vi phân biệt và thúc đẩy sự công bằng, tôn trọng và đánh giá người lao động dựa trên năng lực và đóng góp của họ, không phụ thuộc vào bất kỳ điều kiện cá nhân nào khác. Điều này không chỉ tạo điều kiện cho sự phát triển cá nhân mà còn đóng góp vào sự thịnh vượng và tiến bộ của toàn bộ cộng đồng lao động.2. Xử phạt hành vi phân biệt giới tính trong tuyển dụng lao độngHành vi phân biệt giới tính trong quá trình tuyển dụng lao động là một hành vi bị nghiêm cấm, theo quy định của Điều 8 Bộ luật Lao động 2019. Mức độ của vi phạm này trong lĩnh vực lao động và tuyển dụng có thể bị xử lý theo các quy định về xử phạt hành chính liên quan đến bình đẳng giới.Theo đó, hành vi phân biệt giới tính trong tuyển dụng lao động cũng là hành vi phân biệt đối xử trong lao động, do đó hành vi vi phạm hành chính trong lĩnh vực bình đẳng giới liên quan đến lao động sẽ bị xử phạt như sau (căn cứ Điều 8 Nghị định 125/2021/NĐ-CP):- Phạt cảnh cáo đối với hành vi vận động, xúi giục người khác lựa chọn việc làm, nơi làm việc, nghề nghiệp theo định kiến giới.- Phạt tiền từ 10.000.000 đồng đến 15.000.000 đồng đối với một trong các hành vi sau đây:+ Phân biệt đối xử về giới trong bảo đảm an toàn lao động, vệ sinh lao động;+ Ép buộc hoặc nghiêm cấm người khác lựa chọn việc làm, nơi làm việc, nghề nghiệp vì định kiến giới;+ Phân biệt đối xử về giới trong phân công công việc dẫn đến chênh lệch về thu nhập;+ Từ chối tuyển dụng hoặc tuyển dụng hạn chế người lao động thuộc một giới tính nhất định.- Phạt tiền từ 20.000.000 đồng đến 30.000.000 đồng đối với hành vi đặt ra và thực hiện các quy định, quy chế có sự phân biệt đối xử về giới.* Mức phạt tiền quy định đối với hành vi nêu trên được quy định áp dụng đối với cá nhân, trường hợp tổ chức có hành vi vi phạm hành chính như cá nhân thì mức phạt tiền bằng 02 lần mức phạt tiền đối với cá nhân. (khoản 2 Điều 5 Nghị định 125/2021/NĐ-CP)Kết luậnHành vi phân biệt giới tính trong quá trình tuyển dụng lao động không chỉ vi phạm quy định cơ bản mà còn gây hậu quả nghiêm trọng đến cả môi trường làm việc và cộng đồng lao động. Có thể thấy rõ tầm quan trọng của việc loại bỏ mọi hình thức phân biệt giới trong môi trường lao động, việc này không chỉ là vấn đề của cá nhân hay tổ chức mà là vấn đề về bình đẳng, công bằng và tiến bộ cho toàn bộ cộng đồng lao động.&nbsp;',
    },
    {
      id: 4,
      user: 'Phạm Diễm Thư',
      publishAt: 19,
      like: 71,
      share: 4,
      src: 'https://drive.google.com/thumbnail?id=1aXlL5mkF6Mgie_K1LRGDEgcW0L2_DtgB&sz=s1000',
      title: 'Người lao động được đi trễ, về sớm trong trường hợp nào?',
      description:
        'Khi tham gia vào quá trình lao động thì thời giờ làm việc đóng vai trò rất quan trọng. Do đó, để hiểu rõ việc người lao động được đi trễ hoặc về sớm trong những trường hợp cụ thể nào, hãy cùng Thủ tục pháp luật xem xét các quy định liên quan đến thời giờ làm việc và các quyền được đề cập trong pháp luật.1. Thời giờ làm việc là gì?"Thời gian làm việc" hoặc "thời gian làm việc" là khoảng thời gian mà một người làm việc hoặc một doanh nghiệp mở cửa để tiếp nhận khách hàng hoặc một tổ chức làm việc trong khoảng thời gian cố định hàng ngày. Thời gian làm việc thường được xác định trong hợp đồng lao động hoặc theo nội quy lao động của người sử dụng lao động.2. Thời giờ làm việc bình thường của người lao độngCăn cứ theo Điều 105 Bộ luật Lao động 2019 quy định thời giờ làm việc bình thường của người lao động như sau:“1. Thời giờ làm việc bình thường không quá 08 giờ trong 01 ngày và không quá 48 giờ trong 01 tuần.2. Người sử dụng lao động có quyền quy định thời giờ làm việc theo ngày hoặc tuần nhưng phải thông báo cho người lao động biết; trường hợp theo tuần thì thời giờ làm việc bình thường không quá 10 giờ trong 01 ngày và không quá 48 giờ trong 01 tuần.Nhà nước khuyến khích người sử dụng lao động thực hiện tuần làm việc 40 giờ đối với người lao động.3. Người sử dụng lao động có trách nhiệm bảo đảm giới hạn thời gian làm việc tiếp xúc với yếu tố nguy hiểm, yếu tố có hại đúng theo quy chuẩn kỹ thuật quốc gia và pháp luật có liên quan.”Như vậy, việc quy định rõ ràng thời giờ làm việc để người lao động có thể nắm rõ được các quy định này là cực kỳ quan trọng giúp bảo vệ quyền lợi và sức khỏe của người lao động trong quá trình lao động.&nbsp;Những quy định này giúp người lao động hiểu rõ về giới hạn thời gian làm việc và quyền lợi của họ, đồng thời cung cấp một khung hợp lý để quản lý thời gian làm việc.3. Trường hợp người lao động được đi trễ, về sớm* Căn cứ Khoản 3 Điều 80 Nghị định 145/2020/NĐ-CP quy định người lao động nữ được nghỉ trong thời gian hành kinh như sau:- Lao động nữ trong thời gian hành kinh có quyền được nghỉ mỗi ngày 30 phút tính vào thời giờ làm việc và vẫn được hưởng đủ tiền lương theo hợp đồng lao động. Số ngày có thời gian nghỉ trong thời gian hành kinh do hai bên thỏa thuận phù hợp với điều kiện thực tế tại nơi làm việc và nhu cầu của lao động nữ nhưng tối thiểu là 03 ngày làm việc trong một tháng; thời điểm nghỉ cụ thể của từng tháng do người lao động thông báo với người sử dụng lao động;- Trường hợp lao động nữ có yêu cầu nghỉ linh hoạt hơn so với quy định tại điểm a khoản này thì hai bên thỏa thuận để được bố trí nghỉ phù hợp với điều kiện thực tế tại nơi làm việc và nhu cầu của lao động nữ;- Trường hợp lao động nữ không có nhu cầu nghỉ và được người sử dụng lao động đồng ý để người lao động làm việc thì ngoài tiền lương được hưởng theo quy định tại điểm a khoản này, người lao động được trả thêm tiền lương theo công việc mà người lao động đã làm trong thời gian được nghỉ và thời gian làm việc này không tính vào thời giờ làm thêm của người lao động.Như vậy, quy định này không chỉ đề cập đến việc người lao động nữ được nghỉ 30 phút mỗi ngày trong thời gian hành kinh mà còn cho phép thỏa thuận về số ngày nghỉ trong thời gian này, tạo điều kiện linh hoạt và tùy thuộc vào điều kiện cụ thể tại nơi làm việc cũng như nhu cầu riêng của người lao động nữ.* Căn cứ khoản 4 Điều 80 Nghị định 145/2020/NĐ-CP quy định người lao động nghỉ trong thời gian nuôi con dưới 12 tháng tuổi:- Lao động nữ trong thời gian nuôi con dưới 12 tháng tuổi có quyền được nghỉ mỗi ngày 60 phút trong thời gian làm việc để cho con bú, vắt, trữ sữa, nghỉ ngơi. Thời gian nghỉ vẫn được hưởng đủ tiền lương theo hợp đồng lao động;- Trường hợp lao động nữ có nhu cầu nghỉ linh hoạt hơn so với quy định tại điểm a khoản này thì người lao động thỏa thuận với người sử dụng lao động để được bố trí nghỉ phù hợp với điều kiện thực tế tại nơi làm việc và nhu cầu của lao động nữ;- Trường hợp lao động nữ không có nhu cầu nghỉ và được người sử dụng lao động đồng ý để người lao động làm việc thì ngoài tiền lương được hưởng theo quy định tại điểm a khoản này, người lao động được trả thêm tiền lương theo công việc mà người lao động đã làm trong thời gian được nghỉ.Quy định rõ ràng về việc nghỉ cho người lao động nữ trong thời gian hành kinh và thời gian nuôi con dưới 12 tháng tuổi, thì ngoài ra luật lệ đã cung cấp các điều khoản linh hoạt và bảo vệ quyền lợi của người lao động nữ một cách chi tiết.Kết luậnCó thể thấy rằng quy định không chỉ đề cập đến việc người lao động nữ được nghỉ trong thời gian hành kinh và thời gian nuôi con nhưng còn cho phép thỏa thuận về số ngày nghỉ cũng như việc nghỉ linh hoạt hơn, phù hợp với điều kiện cụ thể tại nơi làm việc và nhu cầu riêng của người lao động nữ.Tuy nhiên, để áp dụng các quy định này một cách hiệu quả, cần sự cộng tác chặt chẽ giữa người lao động và người sử dụng lao động. Điều này cũng cần sự linh hoạt và sự hiểu biết từ cả hai bên để tạo điều kiện làm việc tốt nhất cho cả người lao động và doanh nghiệp.&nbsp',
    },
  ];

  const [showIconpaq, setShowIconpaq] = useState(false);

  const handleClick = () => {
    setShowIconpaq(!showIconpaq);
  };

  return (
    <div className='bg-[#F4F5F8]'>
      <Header />

      {/* create-post-draggable */}
      <div
        onClick={handleClick}
        className='
                flex items-center justify-center
                text-4xl text-white 
                w-12 h-12 
                rounded-full 
                bg-[#4755D4] 
                fixed right-0 top-[20vh]
            '
      >
        <div>+</div>
      </div>

      {/* btn add and q&a */}
      {showIconpaq && (
        <div id='icon-paq' className='fixed top-[17vh] right-[60px]'>
          <div
            className='
                        mb-5
                        w-10 h-10
                        rounded-full
                        flex items-center justify-center
                        bg-[#F58533]
                    '
          >
            <img src='https://ttpl.vn/assets/images/icon/pencil.png' />
          </div>
          <div
            className='
                        w-10 h-10
                        rounded-full
                        flex items-center justify-center
                        bg-[#F58533]
                    '
          >
            <Link href='/mobile/cau-hoi'>
              <img src='https://ttpl.vn/assets/images/icon/zoom-question.png' />
            </Link>
          </div>
        </div>
      )}

      {/* list post */}
      <div className='pt-[62px]'>
        {data.map((_data) => (
          <PostItem key={_data.id} data={_data} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Post;
