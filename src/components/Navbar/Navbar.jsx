import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NavbarF = () => {
  return (
    <Navbar bg='light' expand='lg' data-bs-theme='light'>
      <Container>
        {/* <Navbar.Brand>
          <Link to="/" className="nav-link">
            FRAGMENTOS
          </Link>
        </Navbar.Brand> */}

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='nav-link'>
              INICIO
            </Link>
            <Link to='/catalogo' className='nav-link'>
              CATÁLOGO
            </Link>
          </Nav>
          <Nav className='ms-auto'>
            <Link to='/contacto' className='nav-link'>
              CONTACTO
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarF
