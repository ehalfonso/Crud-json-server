/*import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import NotFound  from "./pages/NotFound"
import Users from "./pages/Users"
import Navbar from "./componentes/Navbar"*/
import CrudApp from "./componentes/crud/CrudApp"
const App = () => {
  return (
    <div>
      <h1>Ejercicio practico</h1>
      <CrudApp/>
    </div>
  )
}

export default App
/**
 * <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
 */