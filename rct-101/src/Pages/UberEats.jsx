
import UberNavbar from "../Components/UberNavbar"
import { Heading,Box,Text, GridItem,Grid,Image,Button, Flex} from "@chakra-ui/react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function UberEats(){

    const [data,setData]=useState([])

    

    useEffect(()=>{
        axios.get(' https://rct-deployment-ii.onrender.com/breakfast')
        .then((res)=>setData(res.data))
        .catch((error)=>console.log(error))
    },[])

   
    return(
       <>
       <UberNavbar />
       <Box margin="auto" textAlign="center" mt={10}>
       <Heading color="#004F71">Chick-fil-A® Menu</Heading>
       <Heading fontSize={'lg'} mt={6}>Breakfast</Heading>
       </Box>

       <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {data?.map((item)=>{
            return (
                <GridItem>
                    <Image src={item.image} alt="" />
                    <Heading>{item.title}</Heading>
                    <Text mt={5}>{item.price}</Text>
                    <Link to={`/items/${item.id}`}><Button borderRadius="40px" h={50} mt={5} w={100} bgColor="#C60628" color="white" border="none">Order now</Button></Link>
                </GridItem>
            )
          })}
       </Grid>


       <Heading fontSize={'lg'} mt={35}>Meals</Heading>

       <Flex mt={10}>
        <Box ml={10}>
          <Image width="80%" src="https://img.taste.com.au/WQSYclhj/w643-h428-cfill-q90/taste/2021/06/slow-cooker-chicken-chow-mein-171636-1.jpg" alt=""/>
          <Text>Chick-fil-A® Nuggets Meal</Text>
          <Text>₹ 399</Text>
          <Button borderRadius="40px" h={50} mt={5} w={100} bgColor="#C60628" color="white" border="none">Order now</Button>
        </Box>

        <Box  ml={10}>
        <Image width="80%" src="https://img.taste.com.au/PC-qfj49/w643-h428-cfill-q90/taste/2019/04/15-minute-chicken-and-corn-noodle-soup-148898-2.jpg" alt=""/>
          <Text>Chick-fil-A® Chicken Soup</Text>
          <Text>₹ 299</Text>
          <Button borderRadius="40px" h={50} mt={5} w={100} bgColor="#C60628" color="white" border="none">Order now</Button>
        </Box>
       </Flex>

       
       </>
    )
}

export default UberEats;