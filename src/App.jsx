import './App.css'
import { AppContext } from './contexts/App'
import { H1 } from './components/H1'
import { P } from './components/P'

function App() {

  return (
    <div className="App">
      <AppContext>
        <H1/>
        <P/>
      </AppContext>
    </div>
  )
}

export default App
