import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Details from "./pages/Details"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Blog' element={<Blog />}/>
          <Route path='/details/:id' element={<Details />}></Route>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
