import React from 'react';  
import "./UserCard.css"
const UserCard = ({user}) => {
  return (
    <div className="usercard">
      <img src={user.picture.large} alt="User"/>
        <p><strong>Name:</strong>{`${user.name.first} ${user.name.last}`}</p>
        <p><strong>Gender:</strong>{user.gender}</p>
        <p><strong>Email:</strong>{user.email}</p>
        <p><strong>Phone:</strong>{user.phone}</p>
        <p><strong>Adress:</strong>{`${user.location.street.name}, ${user.location.city}`}</p>


    </div>
  )
}

export default UserCard