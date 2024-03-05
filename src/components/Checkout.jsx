import React, { useContext } from 'react'
import { CartContext } from './context/CartContext';
import { useForm } from 'react-hook-form'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../firebase/config';
import { useState } from 'react';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm()

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos")
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
            })
    }
    if (pedidoId) {
        return (
            <div className='md:h-[calc(100vh_-_348px)] flex flex-col items-center text-center'>
                <div className="mx-5 p-6 mt-5 mb-4 text-lg max-w-xl text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    <span className="font-medium">Compra exitosa!</span> Muchas gracias por su compra.
                </div>
                <div className="mx-5 p-6 mb-4 text-lg max-w-xl text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                    <span className="font-medium">Tu número de pedido es: {pedidoId}</span>
                </div>
            </div>
        )
    }

    return (
        <div className='md:h-[calc(100vh_-_348px)] content-center'>
            <h1 className=" my-8 text-center text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">Finalizar Compra</h1>

            <form className="max-w-md md:mx-auto mx-5 my-6" onSubmit={handleSubmit(comprar)}>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_first_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required {...register("nombre")} />
                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ingresa tu nombre</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required {...register("email")} id="floating_email" />
                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ingresa tu email</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" name="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required {...register("telefono")} />
                    <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ingresa tu #celular</label>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Comprar</button>
            </form>

        </div>
    )
}

export default Checkout
