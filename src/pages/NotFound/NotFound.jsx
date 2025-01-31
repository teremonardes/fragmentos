import { Container } from 'react-bootstrap'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container className='NotFound'>
      <h1 className='title-NF'>PÁGINA NO ENCONTRADA</h1>
      <p className='text-NF'>ERROR 404</p>
      <Link to='/' className='btn btn-dark volver'>Prueba volviendo al inicio</Link>
    </Container>
  )
}

export default NotFound
