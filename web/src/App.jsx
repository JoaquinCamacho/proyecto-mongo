import './App.css'
import CardCuidador from './components/CardCuidador'

function App() {

  return (
    <>

        <h1>Mis cuidadores</h1>

        <CardCuidador nombre="Juan" zona="Quilmes"/>
        <CardCuidador nombre="Carlos" zona="Adrogué" />
    </>
  )
}

export default App
