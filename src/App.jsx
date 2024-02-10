import ItemListContainer from "./components/ItemListContainer"
import Home from "./components/pages/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/pages/About"
import Item from "./components/Item"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/PreEntrega1AuccapomaHuanay/" element={<Home />} />
          <Route path="/PreEntrega1AuccapomaHuanay/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/PreEntrega1AuccapomaHuanay/about" element={<About />} />
          <Route
            path="/PreEntrega1AuccapomaHuanay/categoria/:categoryId/:idProducto"
            element={<Item />}
          />

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
