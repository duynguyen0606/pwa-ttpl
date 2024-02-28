import { useEffect, useState, memo, useMemo } from "react";
import { Collapse, CollapseProps } from "antd";

import { apiGetFAQ } from "@/src/api/question";
import { Question, Answer } from "@/src/components/mobile/law-qa";

function ContentFAQ({ page }: { page: number }) {
    const items_FAQ: CollapseProps["items"] = [];
    const [listFAQ, setListFAQ] = useState<Array<any>>([]);

    useMemo(() => {
        (async () => {
            const dataRes = await apiGetFAQ({ page: 1 });
            if (dataRes.status) {
                setListFAQ(dataRes.data);
            }
        })();
    }, [page]);

    listFAQ.map((faq) => {
        items_FAQ.push({
            key: faq?.id,
            label: (
                <Question
                    title={faq?.title}
                    description={faq?.question}
                    type={faq?.type_faq_title}
                />
            ),
            children: <Answer content={faq?.answer} />,
        });
    });

    const renderIcon = (isActive?: boolean) => {
        return (
            <div className="mt-20 rounded-full w-7 h-7 p-1 overflow-hidden bg-[#4755D4]">
                <img
                    src={
                        !!isActive
                            ? "/images/icons/up.png"
                            : "/images/icons/down.png"
                    }
                    alt="expand icon"
                />
            </div>
        );
    };

    return (
        <Collapse
            // className={`bg-[#f1f5ff]`}
            collapsible="icon"
            ghost
            items={items_FAQ}
            expandIconPosition="end"
            expandIcon={({ isActive }) => renderIcon(isActive)}
        />
    );
}

export default ContentFAQ;
