import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productos from '../productos.json';

function asyncMock(idProducto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoEncontrado = productos.filter((producto) => {
                return producto.id === parseInt(idProducto);
            });
            resolve(productoEncontrado);
        }, 300);
    });
}

const Item = () => {
    const { idProducto } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        asyncMock(idProducto).then((res) => setProducto(res[0]));
    },);

    return (
        <div>
            {producto && (
                <div className='w-4/5 md:w-96 m-auto text-center border-solid border-2 mt-5'>
                    <img src={`${producto.imagen}`} alt="imagen medicina" className='w-full p-4' />
                    <h1 className='font-bold'>{producto.name}</h1>
                    <p className='mt-2'>{producto.description}</p>
                    <p className='mt-2'>Precio: S/. {producto.price}</p>
                    <p className='mt-2'>Stock {producto.stock}</p>
                    {/* Agrega más información del producto aquí */}
                </div>
            )}
        </div>
    );
};

export default Item;
