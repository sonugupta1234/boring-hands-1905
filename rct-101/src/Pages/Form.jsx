import { useState, useContext } from "react"
import { Input,Button,Select,Heading } from "@chakra-ui/react"
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

        try {
            const response= await fetch(` http://localhost:8000/${inputRef.current.value}`,{
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
        <Heading mt={5}>Admin Form</Heading>
        <form onSubmit={handleSubmit}>
        <label>Image: </label>
        <Input width="40%" mt={8} type="link" name="image" value={formstate.image} placeholder="image" onChange={handleChange} /><br />
        <label>Title: </label>
        <Input width="40%" mt={6} type="text" name="title" value={formstate.title} placeholder="title" onChange={handleChange} /><br />
        <label>Price: </label>
        <Input width="40%" mt={6} type="text" name="price" value={formstate.price} placeholder="price" onChange={handleChange} /><br />
        {/* <label >Menu: </label> */}
        <Select mt={6} ml={500} width="20%" ref={inputRef} onChange={handleSelect}>
            <option value="breakfast">Breakfast</option>
            <option value="entrees">Entrees</option>
            <option value="salads">Salad</option>
        </Select>

        <Button type="submit" mt={5} bgColor={'blue'} >Add Product</Button>
        </form>
        </>
    )
}

export default Form;