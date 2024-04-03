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

      <Vaga
        titulo={'Desenvolvedor Web'}
        localizacao={'Porto Alegre'}
        nivel={'Junior'}
        modalidade={'Clt'}
        salarioMin={25000}
        salarioMax={50000}
        requisitos={['Experiência com React', 'Conhecimento em HTML/CSS']}
      />
      <ListaVagas />
    </>
  )
}

export default App
