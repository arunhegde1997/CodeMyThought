import React ,{useState}from 'react'
import UserCard from '../UserCard/UserCard';

const FetchUserPage = () => {
    const[user ,setUser]=useState(null);

    const fetchUserDetails=async()=>{
        const response=await fetch ("https://randomuser.me/api/");
        const data =await response.json();
        setUser (data.results[0]);
    }


   
    return (
    <div>
        <h1>Fetch User details</h1>
        <button onClick={fetchUserDetails}>Fetch User details</button>
    {user && <UserCard user={user}/>}
    </div>
  )
}

export default FetchUserPage