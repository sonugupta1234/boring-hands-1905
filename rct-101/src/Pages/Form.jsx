import { useState, useContext } from "react"
import { Input,Button } from "@chakra-ui/react"
import { Link, Navigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider"


const initstate={
    image: "",
    title: "",
    price: "",
    
}


function Form(){

    const [formstate,setFormState]=useState(initstate)

    const {Post,post}=useContext(AuthContext)

    const handleChange=(e)=>{
        const val=e.target.value

        setFormState({...formstate,[e.target.name]: val})
    }

    //console.log(formstate)

    const handleSubmit=async(e)=>{
        e.preventDefault()

        try {
            const response= await fetch(' http://localhost:8000/breakfast',{
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

    if(post){
        return <Navigate to="/admindashboard" />
    }
    return(
        <>
        <h1>Admin Form</h1>
        <form onSubmit={handleSubmit}>
        <label>Image: </label>
        <Input width="40%" mt={8} type="link" name="image" value={formstate.image} placeholder="image" onChange={handleChange} /><br />
        <label>Title: </label>
        <Input width="40%" mt={6} type="text" name="title" value={formstate.title} placeholder="title" onChange={handleChange} /><br />
        <label>Price: </label>
        <Input width="40%" mt={6} type="text" name="price" value={formstate.price} placeholder="price" onChange={handleChange} /><br />
        
        <Button type="submit" mt={5}>Submit</Button>
        </form>
        </>
    )
}

export default Form;