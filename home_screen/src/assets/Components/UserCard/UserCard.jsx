import React from 'react';  
import "./UserCard.css"
const UserCard = ({user}) => {
  return (
   <> <div className="usercard">
      < div className="usercard-container">
        <div className="usercard-left">
        <img className="image" src={user.picture.large} alt="User"/>
        <p className="name"><strong>Name: </strong>{`${user.name.first} ${user.name.last}`}</p>
        <p className="gender"><strong>Gender: </strong>{user.gender}</p>
        </div>
      
      <div className="usercard-contain">
        <h1>Information</h1>
        <div className= "usercard-right">
        <p><strong>Email: </strong>{user.email}</p>
        <p><strong>Phone: </strong>{user.phone}</p>
        <p><strong>Adress: </strong>{`${user.location.street.name}, ${user.location.city}`}</p>
        </div>
      </div>
   </div> 
   </div> 
    </>
  )
}

export default UserCard