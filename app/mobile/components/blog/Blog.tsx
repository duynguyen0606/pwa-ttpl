import PostItem from "./BlogItem";


function Blog() {
    return ( 
        <div>
            <PostItem organ={"Cục lãnh sự"} field={"Hàng không"} />
            <PostItem organ={"Cục lãnh sự"} field={"Xuất nhập khẩu"} />
        </div>
    );
}

export default Blog;