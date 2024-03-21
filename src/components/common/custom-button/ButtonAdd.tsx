import Image from "next/image";

function ButtonAdd({
    title,
    marginTop,
    onClick,
}: {
    title: string;
    marginTop?: number;
    onClick?: () => void;
}) {
    // console.log('clicl: ',onClick);
    
    return (
        <button
            className="flex items-center p-2"
            style={{
                backgroundColor: "rgba(245, 133, 51, 0.2)",
                borderRadius: 8,
                marginTop: marginTop ?? 16,
            }}
            onClick={onClick}
        >
            <Image
                src="/images/icons/orange-plus.png"
                alt="Add"
                width={20}
                height={20}
            />
            <span className="text-[--primary-color] ml-1">{title}</span>
        </button>
    );
}

export default ButtonAdd;
