function Question({
    user,
    type,
    title,
    description,
}: {
    user: any;
    type: any;
    title: string;
    description: any;
}) {
    return (
        <div>
            {user && (
                <div className="flex items-center flex-wrap mb-3">
                    <img
                        className="w-9 h-9 rounded-full object-cover"
                        src={
                            user.img ||
                            "https://ttpl.vn/assets/images/logo/logo-legalzone.png"
                        }
                        alt="avatar user"
                    />
                    <div className="ml-3">
                        <a href="" className="text-[#444] font-bold">
                            {user.name}
                        </a>
                        <p className="text-xs text-[#979797]">52 ngày trước</p>
                    </div>
                </div>
            )}
            <div>
                <h2 className="text-[#8A8A8A] font-medium">{type}</h2>
                <p
                    className={`text-base font-semibold text-[#4A433F] ${
                        user ? "my-2" : "my-1"
                    }`}
                >
                    {title}
                </p>
                <p className="italic text-[#4A433F]">{description}</p>
            </div>
        </div>
    );
}

export default Question;