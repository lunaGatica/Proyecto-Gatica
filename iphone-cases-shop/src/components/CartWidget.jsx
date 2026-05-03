import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CartWidget = () => {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <Link to="/carrito" style={{ position: 'relative', color: 'white', textDecoration: 'none' }}>
      <span style={{ fontSize: '1.5rem' }}>🛒</span>
      {totalItems > 0 && (
        <span style={{
          position: 'absolute',
          top: '-8px',
          right: '-12px',
          background: 'var(--secondary)',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          minWidth: '18px',
          textAlign: 'center'
        }}>
          {totalItems}
        </span>
      )}
    </Link>
  )
}

export default CartWidget