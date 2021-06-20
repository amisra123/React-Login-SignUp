import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"

const App =() => {
    const[fullName,setFullName]=useState("");
    const[userName,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const changeFullName=(e) => {
        setFullName(e.target.value)
    }
    const changeUserName=(e) => {
        setUserName(e.target.value)
    }
    const changeEmail=(e) => {
        setEmail(e.target.value)
    }
    const changePassword=(e) => {
        setPassword(e.target.value)
    }
    const onSubmit=(e) => {
        e.preventDefault()
        const registered={
            fullName:fullName,
            userName:userName,
            email:email,
            password:password

        }
        
        axios.post("http://localhost:4000/app/signup",registered)
        .then(response => console.log(response))

        setFullName("")
        setUserName("")
        setPassword("")
        setEmail("")

    }


    return (
        <div>
            <div className="container">
                <div className="form-div">
                    <form onSubmit={onSubmit}> 
                        <input type="text" placeholder="Full Name" onChange={changeFullName}
                        value={fullName} className="form-control form-group" /><br />

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