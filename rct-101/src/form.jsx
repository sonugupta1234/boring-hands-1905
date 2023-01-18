import { useState } from "react"


const initstate={
    location: "",
    address: "",
    time: "",
    image: ""
}


function Form(){

    const [formstate,setFormState]=useState(initstate)

    const handleChange=(e)=>{
        const val=e.target.value

        setFormState({...formstate,[e.target.name]: val})
    }

    //console.log(formstate)

    const handleSubmit=async(e)=>{
        e.preventDefault()

        try {
            const response= await fetch(' http://localhost:8000/products',{
                method: 'POST',
                body: JSON.stringify(formstate),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data= await response.json()
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
        <label>Location: </label>
        <input type="link" name="location" value={formstate.location} onChange={handleChange} />
        <label>Address: </label>
        <input type="text" name="address" value={formstate.address} onChange={handleChange} />
        <label>Time: </label>
        <input type="text" name="time" value={formstate.time} onChange={handleChange} />
        <input type="link" name="image" onChange={handleChange} />
        <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Form;