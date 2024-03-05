import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../firebase/config.js"

import ItemDetailContainer from './ItemDetailContainer';


const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where("category", "==", categoryId))
        getDocs(q)
            .then((resp) => {
                setProductos(resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                }))
            })
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
