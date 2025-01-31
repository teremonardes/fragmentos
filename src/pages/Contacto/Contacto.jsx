import './Contacto.css'

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const nombre = encodeURIComponent(e.target.nombre.value)
    const email = encodeURIComponent(e.target.email.value)
    const mensaje = encodeURIComponent(e.target.mensaje.value)

    window.location.href = `mailto:mailfragmentos@ejemplo.cl?subject=Contacto%20de%20${nombre}&body=Correo:%20${email}%0D%0AMensaje:%20${mensaje}`
  }

  return (
    <div className='contacto'>
      <h1 className='titulo-contacto'>¿Tienes alguna pregunta o comentario?</h1>
      <div className='texto-contacto'>
        <p>Escríbenos a +569 1234567, mailfragmentos@ejemplo.cl</p>
        <p>O puedes dejarnos tu mensaje en este formulario</p>
        <form className='formulario' onSubmit={handleSubmit}>
          <input type='text' name='nombre' placeholder='Ingresa tu nombre' required className='input' />
          <input type='email' name='email' placeholder='Ingresa tu mail' required className='input' />
          <textarea name='mensaje' placeholder='Ingresa tu mensaje' required className='input mensaje' />
          <button className='btn btn-dark mt-3 mb-5' type='submit'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contacto
