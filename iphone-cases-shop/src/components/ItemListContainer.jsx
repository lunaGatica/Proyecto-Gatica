import { useState, useEffect } from 'react'
import Item from './Item'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true)
        const response = await fetch('/productos.json')
        if (!response.ok) throw new Error('Error al cargar productos')
        const data = await response.json()
        setProductos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProductos()
  }, [])

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <div className="code-text" style={{ fontSize: '1.5rem' }}>
          Cargando productos <code>...</code>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--secondary)' }}>
         Error: <code>{error}</code>
      </div>
    )
  }

  return (
    <div>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: 'var(--light)',
        fontSize: '2rem'
      }}>
        Nuestras <span className="code-text">Fundas</span>
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
        padding: '1rem'
      }}>
        {productos.map(producto => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  )
}

export default ItemListContainer