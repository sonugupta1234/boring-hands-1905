import {useState, useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'


export default function Login() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const {isAuth,login}=useContext(AuthContext)

    const handleSubmit=async(e)=>{
        e.preventDefault()

        const logindata={
            email,
            password
        }
        try {
            const response=await fetch('https://reqres.in/api/login',{
                method: 'POST',
                body: JSON.stringify(logindata),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data=await response.json()
            login()
        } catch (error) {
            console.log(error)
        }
        
    }

    if(isAuth){
        return <Navigate to="/" />
    }

    
    
    return (
        <div>
            <h1>LOGIN</h1>
            <form className = "auth_form" onSubmit={handleSubmit} >
                <label >Email</label>
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <br />

                <label>Password</label>
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}