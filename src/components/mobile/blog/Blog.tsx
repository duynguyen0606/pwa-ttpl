import BlogItem from "./BlogItem";

function Blog() {
    return (
        <div>
            <BlogItem organ={"Cục lãnh sự"} field={"Hàng không"} />
            <BlogItem
                organ={
                    "Cục Lãnh sự - Bộ Ngoại giao, Sở Ngoại vụ Thành phố Hồ Chí Minh - Bộ Ngoại giao"
                }
                field={"Chứng nhận lãnh sự, hợp pháp hóa lãnh sự"}
            />
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
            <BlogItem
                organ={
                    "Cục Lãnh sự - Bộ Ngoại giao, Sở Ngoại vụ Thành phố Hồ Chí Minh - Bộ Ngoại giao"
                }
                field={"Xuất nhập khẩu"}
            />
        </div>
    );
}

export default Blog;
