export default function Footer() {
    return (
      <footer style={{
        backgroundColor: '#111',
        color: 'white',
        padding: '3rem 10vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <a href="#" style={{ color: 'white' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'white' }}>Terms of Use</a>
          <a href="#" style={{ color: 'white' }}>Sales Policy</a>
          <a href="#" style={{ color: 'white' }}>Legal</a>
        </div>
        
        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>
          © {new Date().getFullYear()} Apple Inc. All rights reserved.
        </p>
      </footer>
    );
  }