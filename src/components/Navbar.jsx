import { Link, NavLink } from 'react-router-dom'
import Logo from '/farmacia.png'
import CardWidget from './CardWidget'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='py-6 bg-emerald-600 shadow-md'>
            <div className='flex items-center font-medium justify-evenly max-md:flex-wrap'>
                <Link to="/" className='flex flex-col items-center justify-center'>
                    <img src={Logo} alt="logo farmacia" className='md:cursor-pointer h-12 w-10' />
                    <span className="font-bold font-nunito uppercase text-center">Farmacia Curita</span>
                </Link>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
                <nav className={`max-md:flex-col md:flex md:flex-row md:items-center md:text-center ${isOpen ? 'max-md:flex max-md:basis-full max-md:text-center' : 'hidden'}`}>
                    <NavLink to="/categoria/medicine" className='uppercase text-xl p-3 hover:text-white font-black transition-colors duration-500'>Medicinas</NavLink>
                    <NavLink to="/categoria/vitaminas-suplementos" className='uppercase text-xl p-3 hover:text-white font-black transition-colors duration-500'>Vitaminas y Suplementos</NavLink>
                    <NavLink to="/categoria/cuidado-personal" className='uppercase text-xl p-3 hover:text-white font-black transition-colors duration-500'>Cuidado Personal</NavLink>
                    <NavLink to="/about" className='uppercase text-xl p-3 hover:text-white font-black transition-colors duration-500'>Nosotros</NavLink>
                    <NavLink to="/carrito"><CardWidget /></NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
