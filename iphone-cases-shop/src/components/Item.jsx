import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
  const { id, nombre, precio, imagen, descripcion } = producto

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price)
  }

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-8px)'
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={imagen} 
        alt={nombre}
        style={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
          borderBottom: '2px solid var(--primary)'
        }}
      />
      <div style={{ padding: '1.5rem', flex: 1 }}>
        <h3 style={{ 
          fontSize: '1.3rem', 
          marginBottom: '0.5rem',
          color: 'var(--dark)'
        }}>
          {nombre}
        </h3>
        <p style={{ 
          color: '#666', 
          fontSize: '0.9rem',
          marginBottom: '1rem',
          lineHeight: '1.4'
        }}>
          {descripcion.substring(0, 80)}...
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto'
        }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--primary)'
          }}>
            {formatPrice(precio)}
          </span>
          <Link 
            to={`/producto/${id}`}
            style={{
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              color: 'white',
              padding: '0.6rem 1.2rem',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Ver Detalle →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item