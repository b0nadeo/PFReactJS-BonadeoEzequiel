import ItemCount from '../ItemCount/ItemCount'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import Aos from 'aos'


const ItemDetail = ({product}) => {

  const {agregarProducto} = useContext(CartContext)

  const [eliminarContador, setEliminarContador] = useState(false)

  const addProduct = (count) => {
    const productCart = {...product, quantity:count}
    agregarProducto(productCart)
    setEliminarContador(true)
  }

  useEffect(()=> {
    Aos.init();
  }, [])

  return (
    <div className="px-5 pt-5">
      <div className="row">
        <div className="col-3"><img className="carddetail" data-aos="fade-left" data-aos-duration="1250" src={product.image}/></div>
        <div className="col-9 estilocontador">{eliminarContador ? (<Link to="/Cart"><button className="btn botoncolor2">Ir al carrito</button></Link>) : (<ItemCount stock={product.stock} addProduct={addProduct}/>)}</div>
      </div>
        
        
        <h2>{product.name}</h2>
        <p className="textodesc">{product.description}</p>
        <p className="fs-5 text fw-bolder">Precio: ${product.price}</p>
    </div>
  )
}

export default ItemDetail