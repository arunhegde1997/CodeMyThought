
import './App.css'
import DisplayPage from './assets/Components/DisplayPage/DisplayPage'
import FetchUserPage from './assets/Components/FetchUserPage/FetchUserPage'
import FormPage from './assets/Components/FormPage/FormPage'
import Home from './assets/Components/Home/Home'
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"

function App() {
  

  return (
    <Router>
<Routes>
  <Route path="/" element={ <Home/>}/>
  <Route path="/form" element={ <FormPage/>}/>
  <Route path="/display" element={ <DisplayPage/>}/>
  <Route path="/api" element={ <FetchUserPage/>}/>
</Routes>
    </Router>
     

    
  )
}

export default App
