import React from 'react'
import { GiShoppingCart } from "react-icons/gi";

const CardWidget = () => {
    return (
        <div className='container'>
            <button className='text-indigo-900 hover:text-white focus:outline-none ml-6'>
                <GiShoppingCart className='text-5xl' />
            </button>
        </div>
    )
}

export default CardWidget
