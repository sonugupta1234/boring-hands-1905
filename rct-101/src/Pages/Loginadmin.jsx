import {useState, useContext} from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { AuthContext } from '../Context/AuthContextProvider'
import {Box,Heading,Input,Button, FormLabel, FormControl} from '@chakra-ui/react'


export default function LoginAdmin() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const {isAuth,login}=useContext(AuthContext)

    // const handleSubmit=async(e)=>{
    //     e.preventDefault()

    //     const logindata={
    //         email,
    //         password
    //     }
    //     try {
    //         const response=await fetch('https://reqres.in/api/login',{
    //             method: 'POST',
    //             body: JSON.stringify(logindata),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const data=await response.json()
    //         login()
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }

    // if(isAuth){
    //     return <Navigate to="/" />
    // }

    
    
    return (
        <Box>
            <Navbar/>
            <Heading>ADMIN LOGIN</Heading>
            <Box backgroundImage= 'https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=740&t=st=1684321336~exp=1684321936~hmac=ac60cca85d51d906153354979a3805314053dbe98643b51d1b4508cc6d87c734' backgroundRepeat={'no-repeat'} width="70%" height="400px" margin={'auto'} >
            <Box margin="auto"  width="40%">
            <form id = "auth_form"  >
                <FormLabel color="white" textAlign={'center'}>Email</FormLabel>
                <Input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <br />

                <FormLabel color="white" textAlign={'center'}>Password</FormLabel>
                <Input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                <Button className = "submit" type = "submit" form="auth_form" backgroundColor={'aqua'} _hover={{backgroundColor: 'aqua'}}>Submit</Button>

            </form> 
            </Box> 
            </Box>              
        </Box>
    )
}