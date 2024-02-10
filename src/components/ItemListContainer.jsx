import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

import productos from "../productos.json"
import ItemDetailContainer from './ItemDetailContainer';

function asyncMock(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productosFiltrados = productos.filter((producto) => {
                return producto.category === categoryId
            })
            resolve(productosFiltrados)
        }, 300);
    });
}

const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        asyncMock(categoryId).then((res) => setProductos(res))
    }, [categoryId])


    return (
        <main className='p-auto  bg-[#fffbeb] w-full m-auto'>
            <section className='py-6  grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl m-auto '>
                <ItemDetailContainer productos={productos} />
            </section>
        </main>
    )
}

export default ItemListContainer
