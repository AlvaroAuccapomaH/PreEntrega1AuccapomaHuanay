import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto, cantidad) => {
        const productoAgregado = { ...producto, cantidad }
        const nuevoCarrito = [...carrito]
        const estaCarrito = nuevoCarrito.find((producto) => producto.id === productoAgregado.id)

        if (estaCarrito) {
            estaCarrito.cantidad += cantidad

        } else {
            nuevoCarrito.push(productoAgregado)
        }
        setCarrito(nuevoCarrito)
    }

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }
    return (
        <CartContext.Provider
            value={{ carrito, agregarAlCarrito, cantidadCarrito, precioTotal, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}