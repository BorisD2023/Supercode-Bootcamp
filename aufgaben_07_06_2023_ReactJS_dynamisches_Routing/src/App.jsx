import  {BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Carlist from "./components/CarList"
import Details from "./pages/Details"
import Home from "./pages/Home"

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:supercar" element={<Details />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
