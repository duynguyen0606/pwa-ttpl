import { useAppSelector } from "@/src/redux/hooks";
import CanBackLayout from "@/src/components/layout/mobile/CanBackLayout";
import ProcedureItem from "@/src/components/mobile/procedure-item/ProcedureItem";

function Index() {
    const { listProcedureWatched } = useAppSelector(
        (state) => state.procedureState
    );
    return (
        <CanBackLayout
            back="/mobile/profile/loadProcedure"
            title="Thủ tục đã xem"
        >
            <div className="py-5 px-4">
                <div className="mt-5 text-base text-[#262C41] font-bold">
                    Thủ tục đã xem
                </div>
                {listProcedureWatched?.length > 0 &&
                    listProcedureWatched.map((item, idx) => (
                        <ProcedureItem key={idx} procedure={item} />
                    ))}
            </div>
        </CanBackLayout>
    );
}

export default Index;
