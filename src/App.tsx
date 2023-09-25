import React from 'react'
import EstiloGlobal, { Container } from './styles'
import ListaDeTarefas from './containers/ListaDeTarefas'
import BarraLateral from './containers/BarraLateral'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
