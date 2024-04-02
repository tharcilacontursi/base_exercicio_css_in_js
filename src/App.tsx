import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Vaga from './components/Vaga'

import './global.css'

function App() {
  return (
    <>
      <Cabecalho />
      <Hero />
        <ListaVagas />
      <Vaga />
    </>
  )
}

export default App
