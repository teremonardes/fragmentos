import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const NavbarF = () => {
  const navigate = useNavigate()

  const handleSelectMaterial = (material) => {
    navigate(`/catalogo/${material}`)
  }

  return (
    <Navbar bg='light' expand='lg' data-bs-theme='light'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='nav-link'>INICIO</Link>
            <NavDropdown title='CATÁLOGO' id='basic-nav-dropdown' className='dropdown-item'>
              <NavDropdown.Item onClick={() => handleSelectMaterial('vidrios')}>VIDRIOS</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleSelectMaterial('metales')}>METALES</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleSelectMaterial('lozas')}>LOZAS</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleSelectMaterial('otros')}>OTROS</NavDropdown.Item>
            </NavDropdown>
            <Link to='/descargables' className='nav-link'>DESCARGABLES</Link>
          </Nav>
          <Nav className='ms-auto'>
            <Link to='/contacto' className='nav-link'>CONTACTO</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarF
