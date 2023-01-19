import { useParams } from "react-router-dom";
import axios from "axios"
import { useEffect,useState } from "react";
import {Box,Flex,Heading,Text,Button,Image,Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"


function SingleRestaurant(){

    const {id}=useParams()
    

    const [data,setData]=useState({})

    useEffect(()=>{
      axios.get(`http://localhost:8000/products/${id}`)
      .then((res)=>
        setData(res.data))
      .catch((err)=>console.log(err))
    },[])

    console.log(data)

    return(
        <>
        <Box width="100%">
            <Flex>
          <Box width="40%" textAlign={'left'} border="1px solid red">
            <Box mt={20} ml={10} lineHeight={10}>
            <Heading color="#004F71">{data.location}</Heading>
            <Text>{data.time}</Text>
            <Text>{data.address}</Text>

            <Box width="100%" mt={25}>
                <Flex>
              <Button>Order Pickup</Button>
              <Button ml={5}>Order Delivery</Button>
              <Button ml={5}>Order Catering</Button>
               </Flex>
            </Box>

            <Text mt={12}>Prices vary by location, start an order to view prices.

Catering deliveries at this restaurant require a $300.00 subtotal minimum order size.</Text>
           </Box>
          </Box>

          <Box width="60%">
            <Image src={data.image} width="100%" height="500px" alt=""/>

            <Box mt={30} textAlign={'left'} >
                 <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab>About Us</Tab>
                        <Tab>Community</Tab>
                        <Tab>Careers</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                        <p>We’re proud to be your nearest Chick-fil-A®, serving freshly prepared food crafted with quality ingredients every day of the week (except Sunday, of course). Our restaurant offers everything from Chick-fil-A menu classics, like the original Chick-fil-A Chicken Sandwich, Chicken Nuggets and Chick-fil-A Waffle Potato Fries®, to breakfast, salads, treats, Kid’s Meals and more. Feeding a group? Our Chick-fil-A location also offers a variety of catering options, perfect for your next get-together. On this page, you can check out our operating hours as well as the dining options that are currently available at our restaurant.

If you’re looking for great food nearby, it’s our pleasure to serve you.</p>
                        <img mt={10} src="https://prod-us-east-1-profile-pics.s3.amazonaws.com/5E6C787D96D66A1640086E52DCE2B121CF3C2DC79446F8B8A73CA4DCF32FC39F.jpg" alt=""/>
                        <h4>Peter Marthedal</h4>
                        <h2>RESTAURANT OPERATOR</h2>
                        </TabPanel>
                        <TabPanel>
                        <p>At Chick-fil-A®, we love serving others – both in and outside our restaurants. From supporting local charities to hosting school spirit nights, Chick-fil-A® restaurants are committed to giving back in ways that are most meaningful to our customers and our communities.</p>
                        </TabPanel>

                        <TabPanel>
                            <p>Working at a Chick-fil-A® restaurant is more than a job – it’s an opportunity for teamwork and leadership development in a positive, people-focused environment. We hope you’ll apply to join our team. Here are five great reasons to apply:

Operators are committed to creating a positive environment
We’re closed every Sunday
You’ll have advancement opportunities and gain skills that transfer to other fields
We offer college scholarship opportunities and tuition discounts
We help make a difference in your communities</p>
                        </TabPanel>
                    </TabPanels>
                    </Tabs>
            </Box>
          </Box>
          </Flex>
        </Box>
        </>
    )
}

export default SingleRestaurant;