"use client";

import { useState, useEffect } from "react";

import { apiGetListProcedure } from "@/src/api/procedure";
import ProcedureItem from "@/src/components/mobile/procedure-item/ProcedureItem";
import ProcedureModel from "@/src/models/Procedure";

import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";
import Footer from "@/src/components/mobile/footer/Footer";

function Index() {
    const [listArticle, setListArticle] = useState<Array<ProcedureModel>>([]);

    useEffect(() => {
        (async () => {
            const dataRes = await apiGetListProcedure();
            if (dataRes.status) {
                setListArticle(dataRes.data);
            }
        })();
    }, []);

    return (
        <CanBackLayout back="/mobile" title="Danh sách thủ tục">
            {/* List procedure */}
            <div className="m-4 pb-28">
                {listArticle.map((article) => (
                    <ProcedureItem key={article.id} procedure={article} />
                ))}
            </div>

            <Footer />
        </CanBackLayout>
    );
}

export default Index;
