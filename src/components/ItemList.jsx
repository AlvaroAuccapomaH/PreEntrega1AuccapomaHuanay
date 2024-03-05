import { Link } from "react-router-dom";

const ItemList = ({ producto }) => {

    return (
        <>
            <div key={producto.id} className='text-center border-solid border-2 border-b-emerald-400 pb-3'>
                <img src={producto.imagen} alt="imagen medicina" className='w-full p-4' />
                <h1 className="mb-3">{producto.name}</h1>
                <Link
                    to={`/categoria/${producto.category}/${producto.id}`}
                    className='mt-2 bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600'
                >
                    Ver Producto
                </Link>

            </div>
        </>
    );
};

export default ItemList; 