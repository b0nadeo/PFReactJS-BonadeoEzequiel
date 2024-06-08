import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock, addProduct}) => {
    const [count, setCount] = useState(1)

    const handleClickDecrement = () => {
        if(count>1) {
            setCount(count-1)
        }
    }

    const handleClickIncrement = () => {
        if(count<stock) {
            setCount(count+1)
        }
    }

    const handleClickAddToCart = () => {
        addProduct(count)
        console.log(count);
    }

  return (
    <div>
        <div>
            
            

            <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary botoncolor" onClick={handleClickDecrement}>
            -
          </button>
          <button type="button" className="btn btn-primary botoncolornumero">
          {count}
          </button>
          <button type="button" className="btn btn-primary botoncolor" onClick={handleClickIncrement}>
            +
          </button>
        </div>
        <button className="btn botoncolor ms-3" onClick={handleClickAddToCart}>Agregar al carrito!</button>
        </div>
    </div>
  )
}

export default ItemCount