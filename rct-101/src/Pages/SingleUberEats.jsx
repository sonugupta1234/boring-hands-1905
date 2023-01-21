import UberNavbar from "../Components/UberNavbar";
import { useParams,Link } from "react-router-dom";
import axios from "axios"
import { useEffect,useState } from "react";
import {Box,Flex,Heading,Text,Button,Image,Tabs, TabList, TabPanels, Tab, TabPanel,Spacer,  } from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'


function SingleUberEats(){

    const {id}=useParams()
    const toast = useToast()
    

    const [data,setData]=useState({})
    const [cart,setCart]=useState(0)

    useEffect(()=>{
      axios.get(`http://localhost:8000/breakfast/${id}`)
      .then((res)=>
        setData(res.data))
      .catch((err)=>console.log(err))
    },[])

    return(
        <>
        <UberNavbar cart={cart} image={data.image}/>
        <Box width="100%">
            <Flex>
            <Box width="50%">
               <Image src={data.image} alt=""/>
            </Box>
              <Box width="30%" height="200px" mt={60} >
                <Heading>{data.title}</Heading>
                <Text>{data.price}</Text>
                <Button width="100%" mt={8} color="white" bgColor={'black'} _hover={{bgColor: 'black'}} onClick={()=>{setCart(cart+1); toast({
          title: 'Added Sucessfully',
          description: "We have Sucessfully added item to your cart",
          position: "top-middle",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })}}>Add To Cart</Button>
              </Box>
            </Flex>
        </Box>

       
        </>
        
    )
}

export default SingleUberEats;