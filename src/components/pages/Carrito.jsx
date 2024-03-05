import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <div className="justify-center flex flex-col">
            <h1 className=" my-8 text-center text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">Productos Agregados</h1>
            {carrito.map((prod) => (
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mb-5 m-auto dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" key={prod.id}>
                    <img className="object-fill w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={prod.imagen} alt={prod.name} />
                    <div className="flex flex-col justify-between p-4 leading-normal w-full">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prod.name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Precio Unitario: S/. {prod.price}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Cantidad: {prod.cantidad}</p>
                        <p className="text-right mb-3 font-normal text-gray-700 dark:text-gray-400">Precio Total: S/. {(prod.price * prod.cantidad).toFixed(2)}</p>
                    </div>
                </div>
            ))}
            <h2 className="text-center focus:outline-none text-bold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-lg px-5 py-2.5 m-auto mb-2 dark:focus:ring-yellow-900 max-w-xl">Precio total : S/. {precioTotal().toFixed(2)}</h2>
            <div className="w-full m-auto flex flex-col md:flex-row justify-center items-center text-center">
                <button onClick={handleVaciar} className="mr-4  max-w-xl relative inline-block text-lg group mb-4">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">VACIAR</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </button>
                <Link to="/checkout">
                    <button className="m-auto max-w-xl relative inline-block text-lg group mb-4">
                        <span className=" w-full relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-full h-48  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">FINALIZAR COMPRA</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </button>
                </Link>
            </div>




        </div>
    );
};

export default Carrito;
