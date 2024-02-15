type BlogItem = {
    organ: string;
    field: string;
}

function BlogItem(props: BlogItem) {
    return ( 
        <div className="mt-4 rounded-2xl  bg-[#F4F5F8]">
            <header className="py-4 pl-4 bg-[#FCFCFE]">
                <div className="flex mb-4">
                    <div className="
                        w-[100px] h-[38px] 
                        text-xs font-bold text-white 
                        bg-[#4755D4]
                        rounded 
                        mr-4 
                        px-[14px] py-1
                        line-clamp-2
                    "> 
                        {props.organ}
                    </div>
                    <div className="
                        w-[100px] h-[38px] 
                        text-xs font-bold text-[#515666] 
                        rounded 
                        px-[14px] py-1 
                        bg-[#EBEDF3]
                        line-clamp-2
                    ">
                        {props.field}
                    </div>
                </div>
                <div className="text-base font-bold text-[#515666]">
                    Thủ tục chứng nhận lãnh sự, hợp pháp hóa lãnh sự giấy tờ, tài liệu tại các cơ quan ở trong nước
                </div>
            </header>
            <footer className="flex p-4 justify-between items-center">
                <div className="text-xs text-[#515666]">
                    Cập nhật: 2023-11-20 08:52:14
                </div>
                <div className="flex w-[104px] h-6 justify-center items-center font-bold text-white bg-[#F58533] rounded">

                    <a href="#">Xem chi tiết</a>
                </div>
            </footer>
        </div>
    );
}

export default BlogItem;