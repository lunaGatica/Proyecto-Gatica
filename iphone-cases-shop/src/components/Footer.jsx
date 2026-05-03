const Footer = () => {
  const team = [
    {
      nombre: "Luna Martínez",
      rol: "CEO & Fundadora",
      email: "luna@icastore.com",
      avatar: "https://randomuser.me/api/portraits/women/27.jpg"
    },
    {
      nombre: "Fernando Gómez",
      rol: "Lead Developer",
      email: "fernando@icastore.com",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
      nombre: "Marcela Rodríguez",
      rol: "Diseñadora UX/UI",
      email: "marcela@icastore.com",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ]

  return (
    <footer style={{
      background: '#1a1a2e',
      color: '#e0e0e0',
      padding: '3rem 2rem 1.5rem',
      marginTop: 'auto',
      borderTop: `3px solid var(--primary)`
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          
          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
              <span className="code-text">iCaseStore</span>
            </h3>
            <p>Protege tu iPhone con estilo desde 2024</p>
            <p style={{ marginTop: '1rem' }}>
              📍 Av. Libertador 3122<br />
              📞 +54 0 1123 5678<br />
              ✉️ contacto@icastore.com
            </p>
          </div>

          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Métodos de Pago</h3>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '2rem' }}>
              <span>💳</span> <span>Visa</span><br />
              <span>💳</span> <span>Mastercard</span><br />
              <span>💰</span> <span>Mercado Pago</span><br />
              <span>📱</span> <span>Transferencia</span>
            </div>
          </div>

          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Nuestro Equipo</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {team.map((member, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <img src={member.avatar} alt={member.nombre} style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }} />
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{member.nombre}</div>
                    <div style={{ fontSize: '0.8rem', color: '#aaa' }}>{member.rol}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--primary)' }}>{member.email}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid #333',
          fontSize: '0.85rem'
        }}>
          <p>© 2024 iCaseStore - Todos los derechos reservados</p>
          <p className="code-text" style={{ marginTop: '0.5rem' }}>
            Desarrollado con 💜 por el equipo iCaseStore
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer