import React from 'react'
import { useContext } from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';

const CardWidget = () => {

    const { cantidadCarrito } = useContext(CartContext)

    return (
        <div className='container text-center flex justify-center items-center '>
            <Link to={"/carrito"}>
                <button className='text-indigo-900 hover:text-white focus:outline-none ml-6 flex flex-row text-center justify-center items-center'>
                    <GiShoppingCart className='text-5xl' />
                    <span>{cantidadCarrito()}</span>
                </button>
            </Link>
        </div>
    )
}

export default CardWidget
