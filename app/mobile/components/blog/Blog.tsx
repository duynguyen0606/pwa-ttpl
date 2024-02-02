import PostItem from "./BlogItem";


function Blog() {
    return ( 
        <div>
            <PostItem organ={"Cục lãnh sự"} field={"Hàng không"} />
            <PostItem organ={"Cục Lãnh sự - Bộ Ngoại giao, Sở Ngoại vụ Thành phố Hồ Chí Minh - Bộ Ngoại giao"} field={"Chứng nhận lãnh sự, hợp pháp hóa lãnh sự"} />
            <PostItem organ={"Cục Lãnh sự - Bộ Ngoại giao, Sở Ngoại vụ Thành phố Hồ Chí Minh - Bộ Ngoại giao"} field={"Xuất nhập khẩu"} />
        </div>
    );
}

export default Blog;