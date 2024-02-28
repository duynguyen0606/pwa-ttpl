"use client";
import { useState } from "react";

import ArticleModel from "@/src/models/Article";
import CommentModel from "@/src/models/Comment";

import { apiGetListCommentByPostId } from "@/src/api/home-page";
import { DislikeIcon, LikeIcon, LikedIcon } from "@/src/assests/icons";
import CommentCom from "../../common/comment";
import CreateComment from "../../common/comment/CreateComment";
import CommentItem from "../../common/comment/CommentItem";

function FooterPostItem({ post }: { post: ArticleModel }) {
    const [dataComment, setDataComment] = useState<Array<CommentModel>>([]);
    const handleFetchComment = async (id: string) => {
        const dataRes = await apiGetListCommentByPostId({ postId: id });
        if (dataRes.status && dataRes.data.length > 0) {
            setDataComment(dataRes.data);
        }
    };

    return (
        <footer>
            {/* status of post */}
            <div className="flex items-center justify-between py-1 text-xs text-[#B5B9C7]">
                <div className="show-like text-sm flex flex-row">
                    {post.total_like ? (
                        <div className="flex items-center">
                            <img
                                src="https://ttpl.vn/assets/images/icon/icon-like-blue.png"
                                className="w-4 h-4"
                            />
                            <span className="ml-1">{post.total_like}</span>
                        </div>
                    ) : null}
                </div>
                <div className="comment-shared flex flex-row items-center font-medium">
                    {/* seen */}
                    {post.view ? <div>{post.view} lượt xem</div> : null}

                    {/* dot */}
                    {post.view && post.total_comment ? (
                        <div className="w-1 h-1 mx-1 bg-[#A1A5AC] rounded-full"></div>
                    ) : null}

                    {/* comment */}
                    {post.total_comment ? (
                        <div>{post.total_comment} bình luận</div>
                    ) : null}
                </div>
            </div>

            {/* buttons */}
            <div
                className="
                    bottom-footer
                    flex items-center justify-between 
                    border-t-[1px] border-solid border-[#E5E5E5] 
                    flex-wrap 
                    py-2 mt-1
                    text-sm font-medium text-[#686E7E]
                "
            >
                <div className="flex flex-row items-center">
                    <LikeIcon width="18px" height="18px" color="#898A8D" />
                    <span className="ml-2">Like</span>
                </div>
                <div className="flex flex-row items-center">
                    <DislikeIcon width="18px" height="18px" color="#898A8D" />
                    <span className="ml-2">Dislike</span>
                </div>
                <div
                    className="flex flex-row items-center"
                    // onClick={() => handleFetchComment(post.id)}
                >
                    <img
                        className=""
                        src="https://ttpl.vn/assets/images/icon/Comment.png"
                        alt="comment"
                    />
                    <span className="ml-2">Comment</span>
                </div>
                <div className="flex flex-row items-center">
                    <img
                        className=""
                        src="https://ttpl.vn/assets/images/icon/Share.png"
                        alt="share"
                    />
                    <span className="ml-2">Share</span>
                </div>
            </div>

            {/* Comment */}
            {dataComment.length > 0 && (
                <div className="py-4 w-full">
                    <CreateComment />
                    {dataComment.map((item) => (
                        <CommentItem data={item} />
                    ))}
                </div>
            )}
        </footer>
    );
}

export default FooterPostItem;
