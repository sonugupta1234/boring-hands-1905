import Navbar from "../Components/Navbar";
import { Heading,Box,Text, GridItem,Grid,Image,Button} from "@chakra-ui/react";
import axios from "axios"
import { useState } from "react";
import { useEffect,useContext } from "react";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";

function Breakfast(){

    const [data,setData]=useState([])

    const {isAuth}=useContext(AuthContext)

    useEffect(()=>{
        axios.get(' http://localhost:8000/breakfast')
        .then((res)=>setData(res.data))
        .catch((error)=>console.log(error))
    },[])

    if(!isAuth){
        return <Navigate to="/login" />
    }
    return(
       <>
       <Navbar />
       <Box margin="auto" textAlign="center" mt={10}>
       <Heading color="#004F71">Chick-fil-A® Menu</Heading>
       <Text >Availability may differ at different locations.</Text>
       </Box>

       <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {data?.map((item)=>{
            return (
                <GridItem>
                    <Image src={item.image} alt="" />
                    <Heading>{item.title}</Heading>
                    <Text mt={5}>{item.price}</Text>
                    <Button borderRadius="40px" h={50} mt={5} w={100} bgColor="#C60628" color="white" border="none">Order now</Button>
                </GridItem>
            )
          })}
       </Grid>

       <Footer />
       </>
    )
}

export default Breakfast;