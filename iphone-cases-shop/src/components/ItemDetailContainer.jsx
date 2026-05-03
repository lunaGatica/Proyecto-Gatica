import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        setLoading(true)
        const response = await fetch('/productos.json')
        if (!response.ok) throw new Error('Error al cargar producto')
        const data = await response.json()
        const found = data.find(p => p.id === parseInt(id))
        if (!found) throw new Error('Producto no encontrado')
        setProducto(found)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducto()
  }, [id])

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <div className="code-text" style={{ fontSize: '1.5rem' }}>
          Cargando detalle <code>...</code>
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

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer