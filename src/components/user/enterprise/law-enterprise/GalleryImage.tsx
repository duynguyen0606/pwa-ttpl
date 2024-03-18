import Image from "next/image";

function GalleryImage() {
    return (
        <div className="mb-4 p-4 bg-white rounded-lg">
            <button className="flex bg-[--primary-color] rounded-lg p-2">
                <Image
                    src="https://thutucphapluat.com/files/icon/action/PlusBox.png"
                    alt="add album"
                    width={24}
                    height={24}
                />
                <span className="text-white ml-1">Tạo album mới</span>
            </button>
        </div>
    );
}

export default GalleryImage;
