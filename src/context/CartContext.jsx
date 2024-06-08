import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const agregarProducto = (nuevoProducto) => {
        const condicion = detectarDuplicados(nuevoProducto.id)
        if(condicion){
            const productosIgualesSumados = carrito.map((productoCarrito) => {
                if(productoCarrito.id === nuevoProducto.id) {
                    return {...productoCarrito, quantity:productoCarrito.quantity + nuevoProducto.quantity}
                }else{
                    return productoCarrito
                }
            })
            setCarrito(productosIgualesSumados)
        }else{
            setCarrito([...carrito, nuevoProducto])
        }
        
    }

    const cantidadTotal = () => {
        const cantidadTotalProductos = carrito.reduce ((total, producto) => total + producto.quantity, 0)
        return cantidadTotalProductos
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const detectarDuplicados = (idProducto) => {
        const condicion = carrito.some((productoCarrito) => productoCarrito.id === idProducto)
        return condicion
    }

    const eliminarProducto = (idProducto) => {
        const productosFiltrados = carrito.filter ((productoCarrito) => productoCarrito.id !== idProducto)
        setCarrito(productosFiltrados)
    }

    const precioTotal = () => {
        const totalCompra = carrito.reduce((total, productoCarrito) => total + (productoCarrito.price * productoCarrito.quantity), 0)
        return totalCompra
    }

    return(
        <CartContext.Provider value={{carrito, agregarProducto, cantidadTotal, vaciarCarrito, eliminarProducto, precioTotal,}}>
          {children}
        </CartContext.Provider>
    )
    
}


export {CartProvider, CartContext}