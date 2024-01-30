import React from 'react'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className=' mt-6 flex items-center justify-center bg-white text-black'>
            <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer
