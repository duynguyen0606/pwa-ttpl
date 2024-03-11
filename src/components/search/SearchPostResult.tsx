import { Typography } from "antd";
import { Post } from "../common";

function SearchPostResult({ listPost }: { listPost: Array<any> }) {
    return (
        <div>
            <Typography.Title level={4}>Bài viết</Typography.Title>
            {listPost.length > 0 ? (
                listPost.map((post) => <Post key={post?.item} post={post} />)
            ) : (
                <p className="text-base">Không có bài viết nào phù hợp</p>
            )}
        </div>
    );
}

export default SearchPostResult;
