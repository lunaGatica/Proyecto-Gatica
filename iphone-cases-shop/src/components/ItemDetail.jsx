import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ producto }) => {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  const { nombre, precio, descripcion, imagen, stock } = producto

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price)
  }

  const handleAddToCart = () => {
    if (quantity > 0 && quantity <= stock) {
      addToCart(producto, quantity)
      setAdded(true)
      setTimeout(() => setAdded(false), 3000)
    }
  }

  return (
    <div style={{
      background: 'white',
      borderRadius: '30px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        <div>
          <img 
            src={imagen} 
            alt={nombre}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              minHeight: '350px'
            }}
          />
        </div>
        <div style={{ padding: '2rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            color: 'var(--dark)',
            marginBottom: '1rem'
          }}>
            {nombre}
          </h2>
          <p style={{ 
            color: '#666', 
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            {descripcion}
          </p>
          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'var(--primary)',
            marginBottom: '1.5rem'
          }}>
            {formatPrice(precio)}
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label className="code-text" style={{ marginRight: '1rem' }}>
              Cantidad:
            </label>
            <input 
              type="number"
              min="1"
              max={stock}
              value={quantity}
              onChange={(e) => setQuantity(Math.min(stock, Math.max(1, parseInt(e.target.value) || 1)))}
              style={{
                width: '80px',
                padding: '0.5rem',
                borderRadius: '8px',
                border: `2px solid var(--primary)`,
                textAlign: 'center',
                fontSize: '1rem'
              }}
            />
            <span style={{ marginLeft: '1rem', color: '#666' }}>
              Stock: <code>{stock}</code> unidades
            </span>
          </div>

          <button 
            onClick={handleAddToCart}
            disabled={stock === 0}
            style={{
              background: stock > 0 
                ? 'linear-gradient(135deg, var(--primary), var(--secondary))'
                : '#ccc',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '40px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: stock > 0 ? 'pointer' : 'not-allowed',
              transition: 'transform 0.2s ease',
              width: '100%',
              marginBottom: '1rem'
            }}
            onMouseEnter={e => {
              if (stock > 0) e.currentTarget.style.transform = 'scale(1.02)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            {stock > 0 ? '🛒 Agregar al Carrito' : ' Sin Stock'}
          </button>

          {added && (
            <div style={{
              background: 'var(--success)',
              color: 'white',
              padding: '0.8rem',
              borderRadius: '10px',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
               ¡Producto agregado al carrito!
            </div>
          )}

          <Link 
            to="/productos"
            style={{
              display: 'block',
              textAlign: 'center',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            ← Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail