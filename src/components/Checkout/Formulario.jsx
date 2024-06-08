import './Formulario.css'

const Formulario = ({ datosForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <div className="text-center fs-5">
        <form className="pt-4 estilomaquetado" onSubmit={handleSubmitForm}>
            <label>Nombre: </label>
            <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />

            <label>Teléfono: </label>
            <input type="text" name="telefono" value={datosForm.telefono} onChange={handleChangeInput} />

            <label>Email: </label>
            <input type="email" name="email" value={datosForm.email} onChange={handleChangeInput} />

            <label>Repetir Email: </label>
            <input type="email" name="emailValidado" value={datosForm.emailValidado} onChange={handleChangeInput} />

            <button className="btn btn-primary mt-5 botoncolor" type="submit">Enviar mi pedido!</button>
        </form>
    </div>
  )
}

export default Formulario