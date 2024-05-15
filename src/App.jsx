import { useState } from 'react'
import './App.css'
import Container from './components/Container/Container'
import ContainerLista from './components/ContainerLista/ContainerLista'
import Input from './components/Input/Input'
import Item from './components/Item/Item'
import LocalStorageItens from './contexts/LocalStorageContext'

function App() {

  const [itens, setItens] = useState(['Ovos'])

  return (
    <LocalStorageItens.Provider value={{ itens, setItens }}>
      <Container>
        <h2>To Do List</h2>
        <Input />
        <ContainerLista>

          {itens.map(item => {
            return (
              <Item
                key={itens.indexOf(item)}
                text={item} />
            )
          })}
        </ContainerLista>
      </Container>
    </LocalStorageItens.Provider>
  )
}

export default App
