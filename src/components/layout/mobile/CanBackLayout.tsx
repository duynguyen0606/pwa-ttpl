import Link from "next/link";
import { BackIcon } from "@/src/assests/icons";

function CanBackLayout({
    back,
    title,
    children,
}: {
    back: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <div
                className="
                    flex items-center
                    p-4 
                    text-[20px] text-[#262C41] font-semibold
                    border-b-[1px] border-solid border-[#F1F1F1]
                "
            >
                <Link href={back} className="flex items-center">
                    <BackIcon color="black" width="18px" height="18px" />
                </Link>
                <span className="ml-4">{title}</span>
            </div>
            {children}
        </div>
    );
}

export default CanBackLayout;
