import { Collapse, Typography } from "antd";
import { Question } from "../mobile/law-qa";
import Image from "next/image";

function SearchQuestionResult({ listQuestion }: { listQuestion: Array<any> }) {
    const renderIcon = (isActive?: boolean) => {
        return (
            <div
                className={`mt-20 rounded-full w-7 h-7 p-1 overflow-hidden bg-[var(--primary-color)]`}
            >
                <Image
                    src={
                        !!isActive
                            ? "/images/icons/up.png"
                            : "/images/icons/down.png"
                    }
                    alt="expand icon"
                    width={24}
                    height={24}
                />
            </div>
        );
    };

    return (
        <div>
            <Typography.Title level={4}>Câu hỏi thường gặp</Typography.Title>
            {listQuestion.length > 0 ? (
                listQuestion.map((faq, idx) => (
                    <Collapse
                        key={idx}
                        style={{ backgroundColor: "white", marginBottom: 24 }}
                        bordered={false}
                        collapsible="icon"
                        expandIconPosition="end"
                        expandIcon={({ isActive }) => renderIcon(isActive)}
                        items={[
                            {
                                key: idx,
                                label: (
                                    <Question
                                        title={faq?.title}
                                        description={faq?.question}
                                        type={faq?.type_faq_title}
                                    />
                                ),
                                children: (
                                    <div className="border-t-[1px] border-dashed border-[#E5E5E5] mt-3 pt-4">
                                        <h2 className="text-lg font-bold text-[--primary-color]">
                                            Câu trả lời tham khảo
                                        </h2>
                                        <p className="text-[--primary-color]">
                                            {faq?.answer}
                                        </p>
                                    </div>
                                ),
                            },
                        ]}
                    />
                ))
            ) : (
                <h3>Không có câu hỏi nào phù hợp</h3>
            )}
        </div>
    );
}

export default SearchQuestionResult;
