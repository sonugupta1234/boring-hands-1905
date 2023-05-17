import {Box,Text,Image,Flex,Button} from "@chakra-ui/react"
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <Box w={{lg: "100%", base: "77%"}} h={{lg: "600px", base: "1000px"}} mt={50}   backgroundImage="url('https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Footer%20Images/footer-burger-phone-desktop-new-3.jpg')"
  
  background-size="cover"
  backgroundRepeat="no-repeat"
  background-position= "center"
  >

    <Box width={{lg: "35%", base: "60%"}} height="500px"  left={{lg: "65%",base: "20%"}} top="5%" position="relative" >
        <Box margin="auto"  width={{lg: "30%", base: "60%"}}>
    <Image style={{width: "80%", borderRadius: "100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIq-I5FkzG5r86SQoQCSBAiXVNG31yA8R9lQ&usqp=CAU" alt=""/>
       </Box>
        <Text fontSize="lg" mt={10}>Join Chick-fil-A One®. Earn points with every qualifying purchase. Redeem available rewards of your choice.</Text>
        <Text mt={6}>The Chick-fil-A App is not presently accepted at Chick-fil-A Express™ and Chick-fil-A licensed locations such as those in airports and college campuses. These locations are operated by professional third-party food contractors and their operating systems do not currently offer guests the ability to earn points or redeem rewards through the Chick-fil-A App.</Text>
        <Flex >
            <Image mt={10} ml={{lg: "55"}} width={{lg: "30%", base: "60%"}} src="https://d2wl1kt18tqdum.cloudfront.net/v2.1.2462-stageb/Assets/Theming/css/img/itunes-store.png" alt=""/>
            <Image mt={10} ml={5} width={{lg: "30%", base: "60%"}}  src="https://d2wl1kt18tqdum.cloudfront.net/v2.1.2462-stageb/Assets/Theming/css/img/google-play.png" alt=""/>
        </Flex> 
        <Button borderRadius="40px" h={50} w={100} mt={6} bgColor="#C60628" color="white" border="none" _hover={{bgColor:"#C60628"}}>Learn More</Button>
        <Link to="/login"><Text color="#C60628" mt={6}>Already have an account?Sign-in</Text></Link>
      </Box>
       </Box>
        </>
    )
}

export default Footer;

// https://images.squarespace-cdn.com/content/v1/569d5cee2399a35006696fb6/1535469046609-B70L9MBSP4HUAJT2X8QA/chick-fil-a-sandwich-app?format=750w