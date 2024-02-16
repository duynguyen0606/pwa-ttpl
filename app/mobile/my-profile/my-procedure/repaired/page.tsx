import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";
import BlogItem from "@/src/components/mobile/blog/BlogItem";

function Index() {
    return (
        <CanBackLayout back="../my-procedure" title="Thủ tục đã sửa">
            <div className="py-5 px-4">
                <div className="mt-5 text-base text-[#262C41] font-bold">
                    Thủ tục đã sửa
                </div>
                <div>
                    <BlogItem
                        organ={
                            "Cục Lãnh sự - Bộ Ngoại giao, Sở Ngoại vụ Thành phố Hồ Chí Minh - Bộ Ngoại giao"
                        }
                        field={"Xuất nhập khẩu"}
                    />
                    <BlogItem
                        organ={
                            "Cục Lãnh sự - Bộ Ngoại giao, Sở Ngoại vụ Thành phố Hồ Chí Minh - Bộ Ngoại giao"
                        }
                        field={"Xuất nhập khẩu"}
                    />
                </div>
            </div>
        </CanBackLayout>
    );
}

export default Index;
