import { Container } from 'react-bootstrap'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container className='NotFound d-flex flex-column justify-content-center align-items-center p-auto'>
      <h1 className='title-NF text-center pt-5'>PÁGINA NO ENCONTRADA</h1>
      <p className='text-NF text-center pt-4'>ERROR 404</p>
      <Link to='/' className='btn btn-dark volver mb-3'>Prueba volviendo al inicio</Link>
    </Container>
  )
}

export default NotFound
