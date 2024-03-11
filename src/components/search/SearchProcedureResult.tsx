import { Typography } from "antd";
import { TableProcedure } from "../procedure-agent";

function SearchProcedureResult({
    listProcedure,
}: {
    listProcedure: Array<any>;
}) {
    return (
        <div>
            <Typography.Title level={4}>Thủ tục pháp luật</Typography.Title>
            {listProcedure.length > 0 ? (
                <TableProcedure data={listProcedure} />
            ) : (
                <p className="text-base">Không có thủ tục nào phù hợp</p>
            )}
        </div>
    );
}

export default SearchProcedureResult;
