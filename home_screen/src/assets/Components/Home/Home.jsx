import React from 'react'
import "./Home.css"
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  return (
    
        < div className="home">
            <h1>Welcome to home screen</h1>
        
          <button  onClick={()=>navigate("/form") }className="home-button-form">Form</button>
        <button  onClick={()=>navigate("/api") }className="home-button-api">API</button>
      
        </div>
    
  )
}

export default Home
    