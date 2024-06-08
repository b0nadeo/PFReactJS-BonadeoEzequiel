import { string, mixed, object } from "yup"

let useSchema = object({
    nombre: string().required("Debe contener un nombre"),
    telefono: mixed().required("Debe contener solo números"),
    email: string().email("Introduzca un email").required("Introduzca un email"),
    emailValidado: string().email("Introduzca un email").required("Introduzca un email")
})

const validateForm = async(datosForm) => {
    try{
        await useSchema.validate(datosForm)
        return{status:"success"}
    }catch(error){
        return{status:"error", message:error.message}
    }
}

export default validateForm