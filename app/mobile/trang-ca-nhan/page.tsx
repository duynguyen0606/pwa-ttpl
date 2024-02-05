'use client'

import { useState } from "react";
import { ModalInfoRate } from "@/src/components/modal";
import './style.scss'

function Profile() {
    const [showInfoRate, setShowInfoRate] = useState(false)

    return ( 
        <div className="flex-1 px-3 flex w-full justify-center flex-col">

            {/* Top content */}
            <>
                {/* background */}
                <div className="relative text-center">
                    <img className="w-full object-cover max-h-[340px]" src="https://ttpl.vn/assets/images/myprofile/anh-bia.png" alt="anh bia"/>

                    {/* avatar */}
                    <div className="
                        w-24 h-24 
                        flex justify-center items-center 
                        absolute 
                        right-1/2 translate-x-2/4 
                        bg-white 
                        rounded-full
                        " 
                        style={{bottom: '-1.2rem'}}
                    >
                        <img className="w-20 h-20" src="https://ttpl.vn/assets/images/logo/logo-legalzone.png" alt="avatar"/>
                    </div>
                </div>
                
                {/* name & rating */}
                <div className="relative text-center mt-5 py-2 border-b-[1px] border-solid">
                    <span className="
                        inline-flex items-center 
                        text-xl font-bold text-[#444]
                    ">
                        Phạm Diễm Thư
                    </span>
                    <div className="mt-1 flex items-center justify-center text-[#4061AB]">
                        <span>Điểm thưởng:</span>
                        <span className="text-sm font-bold mx-1">200</span>
                        <button onClick={() => setShowInfoRate(true)}>
                            <img className="" src="https://ttpl.vn/assets/images/myprofile/Info-Circle.png" alt=""/>
                        </button>
                    </div>
                </div>
            </>

            {/* Middle-header */}
            <>
                {/* nav tabs */}
                <ul className="flex justify-center items-center">
                    <li className="text-xs font-bold text-[#A1A5AC] p-2.5">Bài viết</li>
                    <li className="text-xs font-bold text-[#A1A5AC] p-2.5">Video</li>
                    <li className="text-xs font-bold text-[#A1A5AC] p-2.5">Theo dõi</li>
                </ul>
                <div className="mt-2"></div>
            </>

            <ModalInfoRate open={showInfoRate} onCancel={() => setShowInfoRate(false)} />

            {/* Content */}
            <>

            </>
        </div>


    );
}

export default Profile;