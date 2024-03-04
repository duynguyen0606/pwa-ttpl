import Link from "next/link";
import Image from "next/image";

import FooterPost from "./FooterPost";
import HeaderPost from "./HeaderPost";

import ArticleModel from "@/src/models/Article";

function PostItem({ post }: { post: ArticleModel }) {
    return (
        <div className="px-4 pt-4 mb-2 bg-white ">
            <HeaderPost post={post} />

            <div>
                <div className="overflow-hidden">
                    <Image
                        className="w-full"
                        loading="lazy"
                        src={post.images}
                        alt="Ảnh bài viết"
                        width={360}
                        height={300}
                    />
                </div>
                <div className="mt-2">
                    <Link
                        href={`/mobile/bai-viet/${post.url_key}`}>
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

export default PostItem;
