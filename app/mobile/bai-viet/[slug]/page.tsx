"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { apiGetDetailPost } from "@/src/api/post";
import { apiGetListMostViewArticle } from "@/src/api/home-page";
import ArticleModel from "@/src/models/Article";
import { Article, Post } from "@/src/components/common";

import "./detailPost.scss";
import { Button } from "antd";

function Index({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const [post, setPost] = useState<ArticleModel | null>();
    const [listArticle, setListArticle] = useState<Array<ArticleModel>>([]);

    useEffect(() => {
        if (slug)
            (async () => {
                const response = await apiGetDetailPost({ url_key: slug, });
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

    return (
        post && (
            <>
                <div className="flex-1">
                    <div className="fixed left-4 top-3">
                        <Link href="/mobile/bai-viet">
                            <Image
                                src={`/images/icons/left-arrow.png`}
                                alt=""
                                width={24}
                                height={24}
                            />
                        </Link>
                    </div>

                    <div style={{ padding: "-4px" }} className="mt-8">
                        <Post
                            post={{ ...post, short_description: "" }}
                            key={slug}
                        />
                    </div>
                </div>
                <div className="px-4">
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
            </>
        )
    );
}

export default Index;
