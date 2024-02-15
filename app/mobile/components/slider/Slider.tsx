'use client'

import { useEffect, useRef, useState } from "react";

type SliderObj = {
    id: number,
    img: string,
}

type SliderProps = {
    data: SliderObj[],
}

function Slider(props: SliderProps) {    
    const dataLength = props.data.length
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIndex(prev => prev === dataLength - 1 ? 0 : prev + 1)
        }, 4000)
        

        return () => {
            clearTimeout(timeoutId)
        }
    }, [index]);


    return ( 
        <div className="mx-0 my-auto overflow-hidden max-w-[500px]">
            <div
                className="whitespace-nowrap transition duration-1000 ease-liner"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {props.data.map((_d, index) => (
                <div
                    className="inline-block w-full rounded-lg"
                    key={index}
                >
                    <img src={_d.img} alt="" className="mr-2" />
                </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;