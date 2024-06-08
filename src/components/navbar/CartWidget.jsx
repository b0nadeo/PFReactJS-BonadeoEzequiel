import { IoCart } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css"
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext)
  let cantidad = cantidadTotal()

  return (
    <Link to="/Cart" className= {cantidad >= 1 ? "carrito-azul" : "carrito-rojo"} >
        <IoCart size={50}/>
        <p className="text-center me-3 ms-1 numerocarrito">{ cantidad >= 1 && cantidad }</p>
    </Link>
  )
}

export default CartWidget