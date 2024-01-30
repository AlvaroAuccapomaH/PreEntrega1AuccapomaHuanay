import React from 'react'
import Logo from '/farmacia.png'
import CardWidget from './CardWidget'

const Navbar = () => {
    return (
        <header className='py-6 bg-emerald-600 shadow-md'>
            <div className='flex items-center font-medium justify-evenly'>

                <div className='flex flex-col items-center'>
                    <img src={Logo} alt="logo farmacia" className='md:cursor-pointer h-12 w-10' />
                    <span className="font-bold font-nunito uppercase">Farmacia Curita</span>
                </div>

                <nav className='flex flex-row items-center'>
                    <a href="" className='uppercase text-xl p-3 hover:text-white font-black transition-colors duration-500'>Inicio</a>
                    <a href="" className='uppercase text-xl p-3 hover:text-white font-black transition-colors duration-500'>Medicinas</a>
                    <a href="" className='uppercase text-xl p-3 hover:text-white font-black transition-colors duration-500'>Vitaminas y Suplementos</a>
                    <a href="" className='uppercase text-xl p-3 hover:text-white font-black transition-colors duration-500'>Cuidado Personal</a>
                    <a href="" className='uppercase text-xl p-3 hover:text-white font-black transition-colors duration-500'>Nosotros</a>
                    <a href=""><CardWidget /></a>
                </nav>

            </div>
        </header>
    )
}

export default Navbar
