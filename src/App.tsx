import { ToastContainer } from "react-toastify"
import { RounterMain } from "./routes/RouterMain"
import 'react-toastify/dist/ReactToastify.css'
import { Header } from "./components/Header"
import { GlobalStyles } from "./styles/GlobalStyle"

const App=()=> {

  return (
    <>
    <ToastContainer/>
    <GlobalStyles/>
     <Header/>
     <RounterMain/>
    </>
  )
}

export default App
