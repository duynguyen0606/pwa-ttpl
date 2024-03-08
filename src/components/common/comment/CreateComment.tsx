import { apiProcedureResponseComment } from "@/src/api/procedure";
import CommentModel from "@/src/models/Comment";
import { useAppSelector } from "@/src/redux/hooks";
import { Avatar, Form, Input } from "antd";
import { useState } from "react";

function CreateComment(props: {
    onSetDataChildComemnt: (dataComment: any) => void;
    parentId?: string;
    procedureId?: string;
}) {
    const { onSetDataChildComemnt, parentId, procedureId } = props;
    const [form] = Form.useForm();
    const { user, token } = useAppSelector((state) => state.authState);
    const handleComment = async (values: { comment: string }) => {
        if (token && parentId && procedureId) {
            const dataRes = await apiProcedureResponseComment({
                token,
                procedural_comment_id: parentId,
                id_help_articles: procedureId,
                comment: values.comment,
                files: "",
            });

            // pass callback
            if (dataRes.status) {
                form.resetFields();
                const dataComment = dataRes.data[0];
                onSetDataChildComemnt(
                    new CommentModel({
                        created_by_avartar: dataComment.avatar,
                        created_by_full_name: dataComment.first_name,
                        created_at: dataComment.created_at,
                        title: dataComment.comment,
                        files: dataComment.files,
                        id: dataComment.id,
                    })
                );
            }
            console.log(dataRes);
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
