import { useState } from "react"
import Formulario from "./Formulario"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore"
import db from "../../db/db"
import { toast } from "react-toastify";
import validateForm from "../../utils/validationYup"
import './Checkout.css'

const Checkout = () => {

    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        emailValidado: "",
    });

    const [idOrden, setIdOrden] = useState(null);
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        const pedido = {
            comprador: { ...datosForm },
            productos: [...carrito],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal()
        }

        if(datosForm.email !== datosForm.emailValidado){
            if(datosForm.email == "" || datosForm.emailValidado == ""){
                toast.warning("Introduzca un email")
            }else{
                toast.warning("Debe coincidir el email")
            }
        }else{
            try {
                const respuesta = await validateForm(datosForm);
                if (respuesta.status === "success") {
                    generateOrder(pedido)
                } else {
                    toast.warning(respuesta.message);
                }
            } catch (error) {console.log(error);}
        }

        
    };

    const generateOrder = (pedido) => {
        const ordenesRef = collection(db, "orders")
        addDoc(ordenesRef, pedido)
          .then((respuesta) => setIdOrden(respuesta.id))
          .catch((error)=> console.log(error))
          .finally(()=> {
            updateStock()
            vaciarCarrito()
        })
    }

    const updateStock = () => {
        carrito.map((productoCarrito)=> {
            let quantity = productoCarrito.quantity
            delete productoCarrito.quantity

            const productoRef = doc(db, "products", productoCarrito.id)
            setDoc(productoRef, { ...productoCarrito, stock: productoCarrito.stock - quantity})
              .then(()=> console.log("El stock está actualizado"))
              .catch((error)=> console.log(error))
        })
    }


    return (
        <div>
            {idOrden ? (
                <div>
                    <h2 className="my-5 estilomaquetadodos">¡ Pedido realizado con éxito 👒 !</h2>
                    <p className="estilomaquetadodos">Recuerde guardar el Id de su orden:</p>
                    <dt className="estilomaquetadodos colorid">{idOrden}</dt>
                </div>
            ) : (
                <Formulario datosForm={datosForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
            )}
        </div>
    );
}

export default Checkout;