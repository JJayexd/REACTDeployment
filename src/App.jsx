import './App.scss'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Footer } from './Components/Footer/Footer'
import { Hilsen } from './Components/Hilsen/Hilsen'
import { Livretter } from './Components/Livretter/Livretter'


function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Hilsen nameValue="Heinz" />
      <Livretter Livretter={['Pizza', 'Burger',  'KFC', 'Indbagt Kylling', 'Hest']}/>
    </>
  )
}

export default App
