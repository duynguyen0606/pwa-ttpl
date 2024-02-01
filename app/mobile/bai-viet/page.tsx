import Header from "../components/header/Header";
import PostItem from "./PostItem";

function Post() {
    return ( 
        <div className="bg-[#F4F5F8]">
            <h2>Bai viet page</h2>
            <Header />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    );
}

export default Post;