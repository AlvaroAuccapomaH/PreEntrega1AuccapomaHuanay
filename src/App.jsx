import ItemListContainer from "./components/ItemListContainer"
import Home from "./components/pages/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/pages/About"
import Item from "./components/Item"
import Footer from "./components/pages/Footer"
import { CartProvider } from "./components/context/CartContext"
import Carrito from "./components/pages/Carrito"
import Checkout from "./components/Checkout"

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/categoria/:categoryId/:idProducto" element={<Item />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>

  )
}

export default App
