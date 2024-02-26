import { ToastContainer } from "react-toastify"
import { RounterMain } from "./routes/RouterMain"
import 'react-toastify/dist/ReactToastify.css'
import { Header } from "./components/Header"
import { GlobalStyles } from "./styles/GlobalStyle"

const App=()=> {

  return (
    <div className="app">
     <Header/>
    <ToastContainer/>
    <GlobalStyles/>
     <RounterMain/>
    </div>
  )
}

export default App
