"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton, Divider } from "antd";

import { apiGetListProcedure } from "@/src/api/procedure";
import ProcedureItem from "@/src/components/mobile/procedure-item/ProcedureItem";
import ProcedureModel from "@/src/models/Procedure";

import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";
import Footer from "@/src/components/mobile/footer/Footer";

function Index() {
    const [listProcedure, setListProcedure] = useState<Array<ProcedureModel>>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const dataRes = await apiGetListProcedure({ page: page });
            if (dataRes.status) {
                setListProcedure(dataRes.data);
            }
        })();
    }, []);

    useEffect(() => {
        loadMoreData();
    }, []);

    const loadMoreData = async () => {
        setPage((prev) => prev + 1);
        if (loading) {
            return;
        }
        setLoading(true);
        const res = await apiGetListProcedure({ page: page + 1 });
        if (res.status) {
            setListProcedure((prev) => [...prev, ...res.data]);
            setLoading(false);
        } else {
            setLoading(false);
        }
    };

    return (
        <CanBackLayout back="/mobile" title="Danh sách thủ tục">
            {/* List procedure */}

            <InfiniteScroll
                dataLength={listProcedure.length}
                next={loadMoreData}
                hasMore={listProcedure.length !== 15000}
                loader={
                    <Skeleton style={{ width: "100%", height: 100 }} active />
                }
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <div className="m-4 pb-28">
                    {listProcedure.map((article) => (
                        <ProcedureItem key={article.id} procedure={article} />
                    ))}
                </div>
            </InfiniteScroll>

            <Footer />
        </CanBackLayout>
    );
}

export default Index;
