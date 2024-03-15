"use client";
import { Rate } from "antd";
import { useState } from "react";

function LawyerEvaluation() {
    return (
        <div className="bg-white my-4 rounded-lg p-14">
            {/* Star */}
            <div>
                <div className="font-semibold text-[56px]">4.7</div>
                <div className="mt-5 mb-2 text-[#A1A5AC]">0 đánh giá</div>
                <div>
                    <div className="flex">
                        <Rate disabled defaultValue={5} />
                        <div className="rounded-lg mx-10 bg-[#4061AB"></div>
                        <div>0</div>
                    </div>
                    <div className="flex">
                        <Rate disabled defaultValue={4} />
                        <div className="rounded-lg mx-10 bg-[#4061AB"></div>
                        <div>0</div>
                    </div>
                    <div className="flex">
                        <Rate disabled defaultValue={3} />
                        <div className="rounded-lg mx-10 bg-[#4061AB"></div>
                        <div>0</div>
                    </div>
                    <div className="flex">
                        <Rate disabled defaultValue={2} />
                        <div className="rounded-lg mx-10 bg-[#4061AB"></div>
                        <div>0</div>
                    </div>
                    <div className="flex">
                        <Rate disabled defaultValue={1} />
                        <div className="rounded-lg mx-10 bg-[#4061AB"></div>
                        <div>0</div>
                    </div>
                </div>
            </div>
            {/* History */}
            <div></div>
        </div>
    );
}

export default LawyerEvaluation;
