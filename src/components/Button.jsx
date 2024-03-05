import React from 'react'

const Button = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {



    return (
        <div>
            <div className='flex text-center justify-around items-center'>
                <button onClick={handleRestar} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded'>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar} className='bg-lime-500 hover:bg-lime-400 text-white font-bold py-2 px-8 border-b-4 border-lime-700 hover:border-lime-500 rounded'>+</button>
            </div>
            <button onClick={handleAgregar} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4 ">
                <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Agregar Carrito
            </button>
        </div>
    )
}

export default Button
