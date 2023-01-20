import { useParams,Link } from "react-router-dom";
import axios from "axios"
import { useEffect,useState } from "react";
import {Box,Flex,Heading,Text,Button,Image,Tabs, TabList, TabPanels, Tab, TabPanel,Spacer } from "@chakra-ui/react"
import Footer from "../Components/Footer";

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
          <Box width="40%" textAlign={'left'}>
            <Box mt={20} ml={10} lineHeight={10}>
            <Heading color="#004F71">{data.location}</Heading>
            <Text>{data.time}</Text>
            <Text>{data.address}</Text>

            <Box width="100%" mt={25}>
                <Flex>
              <Button>Order Pickup</Button>
              <Link to="/deliveryuber"><Button ml={5}>Order Delivery</Button></Link>
              <Button ml={5}>Order Catering</Button>
               </Flex>
            </Box>

            <Text mt={12}>Prices vary by location, start an order to view prices.

Catering deliveries at this restaurant require a $300.00 subtotal minimum order size.</Text>

             <Heading fontSize={'sm'} mt={6}>DELIVERY PARTNERS AVAILABLE</Heading>

             <Flex mt={10}>
               <Image src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Delivery/DD-p4.svg" alt=""/>
               <Image ml={19} src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Delivery/delivery-icon-uber.svg" alt=""/>
               <Image ml={15} src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Delivery/JET_Grubhub_logo_101by28.png" alt=""/>
              
             </Flex>

             <Heading mt={10} fontSize={'md'}>Restaurant Details</Heading>
             
             <Box>HOURS</Box>
             <Flex>
               
               <Box>Monday-Saturday</Box>
               <Spacer />
               <Box>6:30 AM-10:00 PM PST</Box>
             </Flex>

             <Flex>
               
               <Box>Sunday</Box>
               <Spacer />
               <Box>Closed</Box>
             </Flex>

             <Flex>
               <Button>View restaurant menu</Button>
               <Button ml={6}>Job opportunities</Button>
             </Flex>

             <Heading mt={30} fontSize={'md'}>AMENITIES AT THIS RESTAURANT</Heading>
             <Text>Mobile Ordering, Drive-thru, Catering Pickup, Catering Delivery, WiFi, Playground, Breakfast</Text>

             <Heading mt={30} fontSize={'md'}>PHONE NUMBER</Heading>
             <Text>(661) 327-5260</Text>
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

        <Footer />
        </>
    )
}

export default SingleRestaurant;