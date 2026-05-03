import NavBar from './NavBar'

const Header = () => {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: 'white',
      padding: '1rem 2rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      borderBottom: '2px solid var(--primary)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem' }}>
              <span className="code-text">iCaseStore</span>
            </h1>
            <p style={{ fontSize: '0.8rem', color: '#a0a0ff' }}>
              <code>Protege tu iPhone con estilo</code>
            </p>
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  )
}

export default Header