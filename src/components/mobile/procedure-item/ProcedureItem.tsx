import Link from "next/link";
import ProcedureModel from "@/src/models/Procedure";

function ProcedureItem({ procedure }: { procedure: ProcedureModel }) {
    return (
        <div className="mt-4 rounded-2xl  bg-[#F4F5F8]">
            <header
                className="
                    py-4 pl-4 
                    rounded-t-2xl 
                    bg-[#FCFCFE]
                "
            >
                <div className="flex mb-4">
                    <div
                        className="
                            w-[100px] h-[38px] 
                            text-xs font-bold text-white 
                            bg-[#4755D4]
                            rounded 
                            mr-4 
                            px-[14px] py-1
                            line-clamp-2
                        "
                    >
                        {procedure.co_quan_thuc_hien}
                    </div>
                    <div
                        className="
                            w-[100px] h-[38px] 
                            text-xs font-bold text-[#515666] 
                            rounded 
                            px-[14px] py-1 
                            bg-[#EBEDF3]
                            line-clamp-2
                        "
                    >
                        {procedure.area_name}
                    </div>
                </div>
                <div className="text-base font-bold text-[#515666]">
                    {procedure.title}
                </div>
            </header>
            <footer className="flex p-4 justify-between items-center">
                <div className="text-xs text-[#515666]">
                    Cập nhật:{" "}
                    {procedure.updated_at
                        ? procedure.updated_at
                        : procedure.created_at}
                </div>
                <div
                    className="
                        flex justify-center items-center
                        w-[104px] h-6 
                        font-bold text-white 
                        bg-[--primary-color] 
                        rounded
                    "
                >
                    <Link href="#">Xem chi tiết</Link>
                </div>
            </footer>
        </div>
    );
}

export default ProcedureItem;
