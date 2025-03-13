import './Header.css'
import logo from '../../assets/images/losa_sin_fondo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header d-flex flex-column justify-content-between p-2 flex-md-row'>
      <img src={logo} alt='Logo de losa' className='logo m-auto m-md-1' />
      <Link to='/' className='title text-md-end mx-3 text-center '>FRAGMENTOS
      </Link>
    </header>
  )
}

export default Header
