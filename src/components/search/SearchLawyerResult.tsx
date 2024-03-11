import Link from "next/link";
import ImageLegacy from "next/legacy/image";
import { Typography } from "antd";

function SearchLawyerResult({ listLawyer }: { listLawyer: Array<any> }) {
    return (
        <div>
            <Typography.Title level={4}>Luật sư</Typography.Title>
            {listLawyer.length > 0 ? (
                listLawyer.map((lawyer, idx) => (
                    <div
                        className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg"
                        key={idx}
                    >
                        <div className="flex items-center">
                            <ImageLegacy
                                className="object-fit rounded-full"
                                src={
                                    // lawyer?.image ? lawyer?.image :
                                    "https://ttpl.vn/assets/images/logo/logo-legalzone.png"
                                }
                                alt=""
                                width={70}
                                height={70}
                            />
                            <Link
                                href={`/user/${lawyer?.id}`}
                                className="flex flex-col ml-2"
                                style={{ color: "black" }}
                            >
                                <h2 className="font-semibold text-base mb-2">{lawyer?.full_name.trim() || lawyer?.email}</h2>
                                <p>{lawyer?.current_address}</p>
                            </Link>
                        </div>
                        <div className="text-white bg-[--primary-color] rounded-lg p-1">
                            <button>Nhắn tin</button>
                        </div>
                    </div>
                ))
            ) : (
                <h3>Không có luật sư nào phù hợp</h3>
            )}
        </div>
    );
}

export default SearchLawyerResult;
