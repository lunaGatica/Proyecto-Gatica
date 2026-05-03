import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h1 style={{ fontSize: '3rem', color: 'var(--light)' }}>
              ✨ Bienvenido a <span className="code-text">iCaseStore</span>
            </h1>
            <p style={{ fontSize: '1.3rem', marginTop: '20px', color: '#e0e0ff' }}>
              Las mejores fundas para tu <code>iPhone</code>
            </p>
            <div style={{ marginTop: '40px' }}>
              <img 
                src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600" 
                alt="iPhone cases"
                style={{ borderRadius: '24px', maxWidth: '90%', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              />
            </div>
          </div>
        } />
        <Route path="productos" element={<ItemListContainer />} />
        <Route path="producto/:id" element={<ItemDetailContainer />} />
        <Route path="carrito" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App