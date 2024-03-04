"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { apiGetDetailPost } from "@/src/api/post";
import { apiGetListMostViewArticle } from "@/src/api/home-page";
import ArticleModel from "@/src/models/Article";
import { Article } from "@/src/components/common";

import FooterPostItem from "@/src/components/mobile/post-item/FooterPost";
import HeaderPostItem from "@/src/components/mobile/post-item/HeaderPost";
import "./detailPost.scss";

function Index({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const [blackArrow, setBlackArrow] = useState(false);
    const [post, setPost] = useState<ArticleModel | null>();
    const [listArticle, setListArticle] = useState<Array<ArticleModel>>([]);

    useEffect(() => {
        if (slug)
            (async () => {
                const response = await apiGetDetailPost({ url_key: slug });
                if (response.status && response.data) {
                    setPost(response.data[0]);
                }
            })();
    }, [slug]);

    useEffect(() => {
        (async () => {
            const dataRes = await apiGetListMostViewArticle();
            if (dataRes.status) {
                setListArticle(dataRes.data);
            }
        })();
    }, []);

    useEffect(() => {
        const onScroll = () => setBlackArrow(window.scrollY >= 10);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {post && (
                <div className="flex-1 px-4">
                    <div className="fixed top-3">
                        <Link href="/mobile/bai-viet">
                            <Image
                                src={`/images/icons/${blackArrow ? "" : "white-"}left-arrow.png`}
                                alt=""
                                width={24}
                                height={24}
                            />
                        </Link>
                    </div>

                    {/* timeline & image */}
                    <div className="mb-4" style={{ margin: "0 -16px" }}>
                        <Link href={post.images}>
                            <Image
                                loading="lazy"
                                className="w-full object-contain"
                                src={post.images}
                                alt="anh bai viet"
                                width={390}
                                height={326}
                            />
                        </Link>
                    </div>

                    {/* title  */}
                    <div className="mt-5">
                        <Link
                            href="#"
                            className="text-base text-[#444] font-bold"
                        >
                            {post.title}
                        </Link>
                    </div>

                    {/* description */}
                    <div
                        className="desciption-post-item"
                        dangerouslySetInnerHTML={{ __html: post.description }}
                    />

                    <div className="mt-7 mb-2">
                        <HeaderPostItem post={post} />
                    </div>
                    <div className="mt-0.5">
                        <FooterPostItem post={post} />
                    </div>

                    {/* Bài viết xem nhiều nhất */}
                    <div className="mt-10">
                        <div className="text-[20px] text-[#262C41] font-semibold mb-5">
                            Bài viết được xem nhiều nhất
                        </div>
                        {listArticle.length > 0 &&
                            listArticle.map((item) => (
                                <Article article={item} key={item.id} />
                            ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Index;
