 import NavBar from"./components/navbar/NavBar"
 import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
 import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
 import { BrowserRouter, Routes, Route } from "react-router-dom"
 import { CartProvider } from "./context/CartContext"
 import Cart from "./components/Cart/Cart"
 import Checkout from "./components/Checkout/Checkout"
 import { toast, ToastContainer } from "react-toastify"
 import "react-toastify/dist/ReactToastify.css";
 
 import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <ToastContainer theme="dark"/>
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="Nuestros productos!:"/>}/>
            <Route path="/category/:idCategory" element={<ItemListContainer saludo="Nuestros productos!:"/>}/>
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
