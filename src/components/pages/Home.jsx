import React from 'react'
import CarouselHome from '../CarouselHome'

const Home = () => {
    return (
        <div className='p-auto my-5 bg-[#fffbeb] max-w-7xl m-auto'>
            <CarouselHome />
            <div className='md:flex p-5 gap-8 '>
                <div className='md:w-1/2'>
                    <h1 className='text-center mb-4 font-bold'>Promociones únicas en FarmaciaCurita.pe</h1>
                    FarmaciaCurita.pe es la farmacia líder para compras por internet. En nuestro ecommerce ofrecemos una amplia variedad de productos a precios bajos para cuidar de ti y de toda tu familia. Conoce nuestras promociones únicas que cambian cada semana y disfruta de ellas los 365 días del año.
                    En FarmaciaCurita tenemos novedades para cuidar de tu salud y la de tu familia
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center mb-4 font-bold'>Marketplace FarmaciaCurita</h1>
                    ¿Necesitas un producto para cuidar a tu mascota, accesorios de belleza o algún juguete infantil? Con nuestro Marketplace FarmaciaCurita descubre un sinfín de productos que cumplan con tus necesidades. Además encuentra marcas exclusivas como The Ordinary, Martiderm, Baby Fees, EBaby, y más
                </div>
            </div>
        </div>
    )
}

export default Home
