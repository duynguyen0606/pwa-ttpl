import Link from "next/link";

import FooterPost from "@/src/components/mobile/post-item/FooterPost";
import HeaderPost from "@/src/components/mobile/post-item/HeaderPost";

import ArticleModel from "@/src/models/Article";

function Post({ post }: { post: ArticleModel }) {
    return (
        <div className="px-4 pt-4 mb-2 bg-white ">
            <HeaderPost post={post} />

            <div>
                <div className="overflow-hidden">
                    <img
                        className="w-full"
                        loading="lazy"
                        src={post.images}
                        alt="Ảnh bài viết"
                    />
                </div>
                <div className="mt-2">
                    <Link href="/mobile/bai-viet/chi-tiet-bai-viet">
                        <h4 className="text-sm font-bold text-[#262C41] overflow-hidden">
                            {post.title}
                        </h4>
                    </Link>

                    <p className="text-xs text-[#686E7E] my-1 line-clamp-3">
                        {post.short_description}
                    </p>
                </div>
            </div>

            <FooterPost post={post} />
        </div>
    );
}

export default Post;
