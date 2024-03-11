import { apiPostComment } from "@/src/api/post";
import { apiProcedureResponseComment } from "@/src/api/procedure";
import CommentModel from "@/src/models/Comment";
import { useAppSelector } from "@/src/redux/hooks";
import { Avatar, Form, Input } from "antd";
import moment from "moment";
import { useState } from "react";

function CreateComment(props: {
    onSetDataChildComemnt?: (dataComment: any) => void;
    onSetDataComment?: (cmtParent: any) => void;
    parentId?: string;
    itemId?: string;
}) {
    const { onSetDataChildComemnt, onSetDataComment, parentId, itemId } = props;
    const [form] = Form.useForm();
    const { user, token } = useAppSelector((state) => state.authState);
    const handleComment = async (values: { comment: string }) => {
        if (token && parentId && itemId) {
            const dataRes = await apiProcedureResponseComment({
                token,
                procedural_comment_id: parentId,
                id_help_articles: itemId,
                comment: values.comment,
                files: "",
            });

            // pass callback
            if (dataRes.status) {
                form.resetFields();
                const dataComment = dataRes.data[0];
                {
                    onSetDataChildComemnt &&
                        onSetDataChildComemnt({
                            avatar: dataComment.avatar,
                            first_name: dataComment.first_name,
                            created_at: dataComment.created_at,
                            comment: dataComment.comment,
                            files: dataComment.files,
                            id: dataComment.id,
                        });
                }
            }
        } else if (token && itemId) {
            const dataRes = await apiPostComment({
                token,
                post_id: itemId,
                title: values.comment,
            });

            if (dataRes.status) {
                form.resetFields();
                onSetDataComment &&
                    onSetDataComment({
                        created_at: moment().format("DD/MM/YYYY h:mm:ss"),
                        created_by: user.id,
                        created_by_avartar: user.image,
                        created_by_email: user.email,
                        created_by_full_name: user.full_name,
                        id: moment().format("DD/MM/YYYY h:mm:ss"),
                        level: 1,
                        like: 0,
                        title: dataRes.content,
                        total_comment_child: 0,
                        total_like: 0,
                    });
            }
        }
    };

    return (
        <div id="create-comment" className="flex gap-4 mb-4">
            {user && (
                <div className="w-8">
                    <Avatar src={user.image} alt="avatar" />
                </div>
            )}
            <div className="flex-1">
                <Form form={form} onFinish={(values) => handleComment(values)}>
                    {/* <Input placeholder='Nhập bình luận của bạn' /> */}
                    <Form.Item name="comment">
                        <Input placeholder="Nhập bình luận của bạn" />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default CreateComment;
