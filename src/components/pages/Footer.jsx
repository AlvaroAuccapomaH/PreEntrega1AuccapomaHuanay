import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className=" bg-emerald-600 shadow-md  p-4 block h-[100%]">
            <div className="flex flex-col sm:flex-row justify-around text-center ">
                <ul className="mb-4 sm:mb-0">
                    <li>
                        <Link>PRODUCTOS</Link>
                    </li>
                    <li>
                        <Link>¿CÓMO COMPRAR?</Link>
                    </li>
                    <li>
                        <Link>SERVICIOS</Link>
                    </li>
                    <li>
                        <Link>CONÓCENOS</Link>
                    </li>
                    <li>
                        <Link>BLOG</Link>
                    </li>
                </ul >
                <ul className="mb-4 sm:mb-0">
                    <li>
                        <Link>LOCALES</Link>
                    </li>
                    <li>
                        <Link>CONTÁCTENOS</Link>
                    </li>
                    <li>
                        <Link>DELIVERY</Link>
                    </li>
                    <li>
                        <Link>TRABAJA CON NOSOTROS</Link>
                    </li>
                    <li>
                        <Link>FORMAS DE PAGO</Link>
                    </li>
                </ul>
                <ul className="mb-4 sm:mb-0">
                    <li>
                        <Link>POLÍTICAS DE PRIVACIDAD</Link>
                    </li>
                    <li>
                        <Link>PREGUNTAS FRECUENTES</Link>
                    </li>
                    <li>
                        <Link>TÉRMINOS Y CONDICIONES</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="text-center pt-5">FARMACIA CURITA  ©  TODOS LOS DERECHOS RESERVADOS 2024</h1>
            </div>
        </div>
    )
}

export default Footer
