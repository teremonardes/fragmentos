import './Header.css'
import logo from '../../assets/images/losa_sin_fondo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo de losa" className='logo'></img>
 <Link to="/" className="title">FRAGMENTOS
 </Link>
 </header>
  )
}

export default Header
