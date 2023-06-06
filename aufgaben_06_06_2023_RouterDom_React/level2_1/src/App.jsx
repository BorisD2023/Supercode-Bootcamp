import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Speisekarte from "./pages/Speisekarte"
import Kontakt from "./pages/Kontakt"
import Öffnungszeiten from "./pages/Öffnungszeiten"
import Gallery from "./pages/Gallery"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Speisekarte" element={<Speisekarte />} />
            <Route path="/Kontakt" element={<Kontakt />} />
            <Route path="/Öffnungszeiten" element={<Öffnungszeiten />} />
            <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
