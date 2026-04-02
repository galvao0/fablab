import './App.css'
import iconUser from './assets/user.png' 

function App() {

  return (
    <div className='contPrinc'>
      <header style={{ paddingLeft: 20, paddingRight: 20 }}>
        <h2>FabLab</h2>
        <img src={iconUser} style={{ height: 30, width: 30 }} />
      </header>
      <div className='container' style={{ gap: 20, marginTop: 45, marginRight: 20, marginLeft: 20 }}>
        <div className='divRecenteReq' style={{ borderRadius: 7, padding: 10 }}>
          <input 
            placeholder='buscar requisições'
            className='inputReq'
            style={{
              padding: 10,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#252629'
            }}
          />
        </div>
        <div className='divFormReq' style={{ borderRadius: 7 }}>
          <form>
            <h2
              style={{
                color: '#0b1222'
              }}
            >Formulário de Requisição</h2>
          </form>
        </div>
      </div>
      <footer>

      </footer>
    </div>
  )
}

export default App
