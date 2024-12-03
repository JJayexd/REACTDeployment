import './App.scss'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Footer } from './Components/Footer/Footer'
import { Hilsen } from './Components/Hilsen/Hilsen'


function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Hilsen nameValue="Heinz" />
    </>
  )
}

export default App
