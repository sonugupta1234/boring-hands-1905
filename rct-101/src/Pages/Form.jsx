import { useState, useContext } from "react"
import { Input,Button,Select,Heading, FormLabel, Box } from "@chakra-ui/react"
import { Link, Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider"
import Navbar from "../Components/Navbar"
import { useRef } from "react"


const initstate={
    image: "",
    title: "",
    price: "",
    
}


function Form(){

    const [formstate,setFormState]=useState(initstate)

    const inputRef=useRef()

    const {Post,post,dishes}=useContext(AuthContext)

    const handleChange=(e)=>{
        const val=e.target.value

        setFormState({...formstate,[e.target.name]: val})
    }

    //console.log(formstate)

    const handleSubmit=async(e)=>{
        e.preventDefault()
        alert("product added sucessfully")

        try {
            const response= await fetch(` https://rct-deployment-ii.onrender.com/${inputRef.current.value}`,{
                method: 'POST',
                body: JSON.stringify(formstate),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data= await response.json()
            Post()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSelect=(e)=>{
         dishes(e.target.value)
    }

    if(post){
        return <Navigate to="/admindashboard" />
    }
    return(
        <>
        <Navbar />
        <Box backgroundImage={'https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg?w=740&t=st=1684328571~exp=1684329171~hmac=72a52fd988a53afa6558db397f3221b08e5dd3144ea4f9c0ffd8e53d60b60fb2'}>
        <Heading >Admin Form</Heading>
        <Box width="50%" margin="auto" >
        <form onSubmit={handleSubmit} id="admin">
        <FormLabel mt={6}>Image </FormLabel><br/>
        <Input width="100%" mt={0} type="link" border="1px solid black" name="image" value={formstate.image} placeholder="image" onChange={handleChange} /><br />
        <FormLabel mt={4}>Title </FormLabel><br/>
        <Input width="100%"  type="text" name="title" value={formstate.title} border="1px solid black" placeholder="title" onChange={handleChange} /><br />
        <FormLabel mt={4}>Price </FormLabel><br/>
        <Input width="100%"  type="text" name="price" value={formstate.price} border="1px solid black" placeholder="price" onChange={handleChange} /><br />
        
        <FormLabel mt={4}>Menu </FormLabel><br/>
         <Select   width="100%" ref={inputRef} onChange={handleSelect}  border="1px solid black">
            <option value="">Select Option</option>
            <option value="breakfast">Breakfast</option>
            <option value="entrees">Entrees</option>
            <option value="salads">Salad</option>
        </Select>

        <Button type="submit" mt={5} bgColor={'aqua'} form="admin" >Add Product</Button>
        </form>
        </Box>
        </Box>
        </>
    )
}

export default Form;