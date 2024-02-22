"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { BackIcon } from "@/src/assests/icons";
import FooterPostItem from "@/src/components/mobile/post-item/FooterPost";
import HeaderPostItem from "@/src/components/mobile/post-item/HeaderPost";
import "./detailPostItem.scss";

import ArticleModel from "@/src/models/Article";


function Index({post} : {post: ArticleModel}) {
    const [isBlack, setIsBlack] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsBlack(window.scrollY >= 10);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    console.log('You watching post have id', post.url_key);
    

    return (
        <div className="flex-1 px-4">
            <div className="fixed top-3">
                <Link href="/mobile/bai-viet">
                    <BackIcon color={`${isBlack ? "black" : "white"}`} />
                </Link>
            </div>

            {/* timeline & image */}
            <div className="mb-4" style={{ margin: "0 -16px" }}>
                <Link href={post.images}>
                    <img
                        loading="lazy"
                        className="w-full object-contain"
                        src={post.images}
                    />
                </Link>
            </div>

            {/* title  */}
            <div className="mt-5">
                <a href="#" className="text-base text-[#444] font-bold">
                    {post.title}
                </a>
            </div>

            {/* description */}
            {post.description}
            

            <div className="mt-7 mb-2">
                <HeaderPostItem post={post} />
            </div>
            <div className="mt-0.5">
                <FooterPostItem post={post} />
            </div>
        </div>
    );
}

export default Index;
