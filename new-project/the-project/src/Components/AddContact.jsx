import React from "react";


const AddContact=()=>{
    return(
        <div>
            <div className ="ui main "></div>
            <h2>Add contact</h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"></input> 
                </div>
                <div className="field">
                    <label>E-mail</label>
                    <input type="text" name="Email" placeholder="Email"></input> 
                </div>
                <button className="ui button blue">Add</button>
            </form>

        </div>
    )
}
export default AddContact;