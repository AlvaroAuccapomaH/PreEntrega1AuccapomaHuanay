import ItemList from "./ItemList"

const ItemDetailContainer = ({ productos }) => {
    return (
        <>
            {productos.map((producto) => (
                <ItemList key={producto.id} producto={producto} />
            ))}

        </>
    )
}

export default ItemDetailContainer
