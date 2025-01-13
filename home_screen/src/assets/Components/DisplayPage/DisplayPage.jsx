import React from 'react'
import {useLocation} from "react-router-dom";
import "./DisplayPage.css";

const DisplayPage = () => {
    const {state} =useLocation()
  return (
    <div className="displayPage">
      <div className="displayPage-container">
        <h1>Submitted details</h1>
        <p><strong>Name:</strong>{state.name}</p>
        <p><strong>Phone:</strong>{state.phone}</p>
        <p><strong>Email:</strong>{state.email}</p>
        <p><strong>Date:</strong>{state.dob}</p>
        <p><strong>Address:</strong>{state.address}</p>
        </div>
    </div>

  )
}

export default DisplayPage