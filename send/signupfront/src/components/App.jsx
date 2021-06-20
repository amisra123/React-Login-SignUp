import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const App =() => {
    const[fullName,setFullName]=useState("");
    const[userName,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    function changeFullName(event){
        setFullName(event.target.value)
        console.log(event.target.value);
    }
    function changeUserName(event){
        setUserName(event.target.value)
    }
    function changeEmail(event){
        setEmail(event.target.value)
    }
    function changePassword(event){
        setPassword(event.target.value)
    }
    function onSubmit(event){

    }

    return (
        <div>
            <div className="container">
                <div className="form-div">
                    <form onSubmit={onSubmit}> 
                        <input type="text" placeholder="Full Name" onChange={changeFullName}
                        value={fullName} className="form-control form-group" />

                        <input type="text" placeholder="User Name" onChange={changeUserName}
                        value={userName} className="form-control form-group" />

                        <input type="text" placeholder="E-mail" onChange={changeEmail}
                        value={email} className="form-control form-group" />

                        <input type="password" placeholder="Password" onChange={changePassword}
                        value={password} className="form-control form-group" />

                        <input type="submit" className="btn btn-danger btn-block" value="Submit" />

                    </form>

                </div>

            </div>
        </div>
    )
}

export default App;