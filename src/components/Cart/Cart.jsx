import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const { carrito, vaciarCarrito, eliminarProducto, precioTotal } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="ordenbox">
        <h2>No agregaste nada a tu carrito :O</h2>{" "}
        <Link to="/">
          <button className="btn botoncolor mt-3">
            Ir a nuestros productos n.n
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {carrito.map((productoCarrito) => (
        <div key={productoCarrito.id} className="mt-2 ordentexto">
          {/* <h3>{productoCarrito.name}</h3>
          <img src={productoCarrito.image} alt="" />
          <h3>Cantidad: {productoCarrito.quantity}</h3>
          <h3>Precio unitario: ${productoCarrito.price}</h3> */}

          <div className="row">
            <div className="col"><img className="imagencompra" src={productoCarrito.image} alt="" /></div>
          <div className="col"><h3>{productoCarrito.name}</h3></div>
          <div className="col"><h3>Cantidad: {productoCarrito.quantity}</h3></div>
          <div className="col"><h3>Precio unitario: ${productoCarrito.price}</h3></div>
          <div className="col"><h3>
            Precio parcial: ${productoCarrito.price * productoCarrito.quantity}
          </h3></div>
          <div className="col"><button className="btn botoncolor" onClick={() => eliminarProducto(productoCarrito.id)}>
          <MdDeleteForever />
          </button></div>
          </div>
          
        </div>
      ))}
      <h2 className="text-center">Precio total de compra: ${precioTotal()}</h2>
      <div className="text-center mt-3">
        <Link to="/checkout"><button className="btn botoncolor">Finalizar compra!</button></Link>
      <button className="ms-3 btn botoncolor" onClick={vaciarCarrito}>Vaciar carrito!</button></div>
    </div>
  );
};

export default Cart;
