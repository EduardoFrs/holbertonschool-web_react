import './App.css'
import holbertonLogo from './assets/holberton-logo.jpg'

function App() {
  return (
    <>
      <header className="App-header">
        <img src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </header>

      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>

      <footer className="App-footer">
        <p>Copyright - Holberton School</p>
      </footer>
    </>
  )
}

export default App