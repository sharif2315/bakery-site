import React from 'react'

import imgUrl from '../assets/cupcake.jpg'

const ProductCard = () => {
    return (
        <div className='xxs:w-full sm:w-[20rem] md:w-[14rem] my-6 col-span-1 flex justify-evenly'>
                <a href="#">
                    <div className="h-56">
                        <img src={imgUrl} alt="" className="w-full h-full object-cover rounded-lg shadow-xl" />
                    </div>
                    <div className="pt-3">
                        <h3 className="text-md text-gray-700 font-bold">Limited Edition Sports Trainer</h3>
                        <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
                    </div>                    
                </a>
        </div>
    )
}

export default ProductCard