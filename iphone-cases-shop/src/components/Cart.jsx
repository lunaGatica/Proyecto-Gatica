import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart()

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price)
  }

  if (cartItems.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '4rem',
        background: 'white',
        borderRadius: '30px'
      }}>
        <h2>🛒 Tu carrito está vacío</h2>
        <p style={{ marginTop: '1rem' }}>
          <Link to="/productos" style={{ color: 'var(--primary)' }}>
            ¡Explora nuestros productos!
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: 'var(--light)'
      }}>
        Tu <span className="code-text">Carrito</span>
      </h2>
      
      <div style={{
        background: 'white',
        borderRadius: '30px',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        {cartItems.map(item => (
          <div key={item.id} style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto auto auto',
            gap: '1rem',
            alignItems: 'center',
            padding: '1rem',
            borderBottom: '1px solid #eee',
            flexWrap: 'wrap'
          }}>
            <img src={item.imagen} alt={item.nombre} style={{
              width: '60px',
              height: '60px',
              objectFit: 'cover',
              borderRadius: '10px'
            }} />
            <div>
              <h4>{item.nombre}</h4>
              <div className="code-text">{formatPrice(item.precio)}</div>
            </div>
            <div>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                style={{
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  width: '30px',
                  height: '30px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >-</button>
              <span style={{ margin: '0 10px' }}>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                style={{
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  width: '30px',
                  height: '30px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >+</button>
            </div>
            <div style={{ fontWeight: 'bold' }}>
              {formatPrice(item.precio * item.quantity)}
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              style={{
                background: 'var(--secondary)',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                cursor: 'pointer'
              }}
            >
              Eliminar
            </button>
          </div>
        ))}
        
        <div style={{
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '2px solid var(--primary)',
          textAlign: 'right'
        }}>
          <h3>Total: <span className="code-text">{formatPrice(getTotalPrice())}</span></h3>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button 
              onClick={clearCart}
              style={{
                background: 'var(--warning)',
                color: 'white',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '30px',
                cursor: 'pointer'
              }}
            >
              Vaciar Carrito
            </button>
            <button style={{
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              color: 'white',
              border: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '30px',
              cursor: 'pointer'
            }}>
              Pagar 💳
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart