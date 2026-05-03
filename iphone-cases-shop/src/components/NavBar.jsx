import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  const navStyles = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  const linkStyles = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    padding: '0.5rem 0'
  }

  return (
    <nav style={navStyles}>
      <Link to="/" style={linkStyles} onMouseEnter={e => e.target.style.color = 'var(--secondary)'} onMouseLeave={e => e.target.style.color = 'white'}>
        🏠 Inicio
      </Link>
      <Link to="/productos" style={linkStyles} onMouseEnter={e => e.target.style.color = 'var(--secondary)'} onMouseLeave={e => e.target.style.color = 'white'}>
        📱 Productos
      </Link>
      <CartWidget />
    </nav>
  )
}

export default NavBar