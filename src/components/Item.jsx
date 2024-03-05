import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config.js"
import Button from './Button.jsx';
import { useContext } from 'react';
import { CartContext } from './context/CartContext.jsx';

const Item = () => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);

    const { idProducto } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const docRef = doc(db, "productos", idProducto);
        getDoc(docRef)
            .then((resp) => {
                setProducto(
                    { ...resp.data(), id: resp.id }
                )
            })
    }, [idProducto]);


    const [cantidad, setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < producto.stock && setCantidad(cantidad + 1)
    }


    return (
        <div>

            {producto && (
                <div className='w-4/5 md:w-96 m-auto text-center border-solid border-2 my-8'>
                    <img src={`${producto.imagen}`} alt="imagen medicina" className='w-full p-4' />
                    <h1 className='font-bold'>{producto.name}</h1>
                    <p className='mt-2'>{producto.description}</p>
                    <p className='mt-2'>Precio: S/. {producto.price}</p>
                    <p className='mt-2'>Stock {producto.stock}</p>
                    <Button
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregarAlCarrito(producto, cantidad) }}
                    />
                </div>
            )}
        </div>
    );
};

export default Item;
