import React, { useState }  from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Slider = () => {

    const slides = [
        {
            url: 'https://plus.unsplash.com/premium_photo-1670426502280-8985122ab689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80',
        },
        {
            url: 'https://plus.unsplash.com/premium_photo-1677471855953-c12c47c5c86b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    return (
        <div className="max-w-[1400px] h-[600px] w-full m-auto py-8 relative group">

            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-lg bg-center bg-cover duration-500">
            </div>            

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -tranlate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>


            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                        <RxDotFilled />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Slider