import {useState,useEffect} from "react"
import Navbar from "../Components/Navbar";
import axios from "axios"
import {Text,Box,Flex,Button,Spacer,Heading, Divider,Image} from "@chakra-ui/react"
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

function Restaurant(){

    const [data,setData]=useState([])

    // const {isLoaded} =useLoadScript({googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})

    useEffect(()=>{
        axios.get('http://localhost:8000/products ')
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])
    
    return(
        <>
      <Navbar />
       <Text textAlign={'left'} mt={5} ml={5} color="#004F71">NEARBY LOCATIONS</Text>

       <Box width="100%">
        <Flex>
         <Box width="50%"  mt={6}>
            {data.map((item)=>{
                return(

                    <Box width="85%" ml={20} mt={7}>
                     <Flex>
                      <Box >
                        <Heading color="#CC052B" fontSize={'lg'}>
                         {item.location}
                         </Heading>
                      </Box>
                      <Spacer />
                     <Link to={`/restaurant/${item.id}`}> <Button width="80%" height="40px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white" >
                         View details
                    </Button></Link>
                 </Flex>
                 
                 <Box textAlign={'left'}>
                 <Text>{item.address}</Text>
                 <Text>{item.time}</Text>
                 </Box>

                 <Divider color={'red'}/>
                   </Box>

                   
                )
            })}

         </Box>

         <Box width="50%" >
          {/* <Image width="100%" height="930px" mt={6} src="https://www.google.com/maps/vt/data=iPpq05uEQlFFmJCSlz5zp5jZsnhKtcnnN0xTaBwEVsiA4xUHYFLYDa1sUPNWnNtrncUOzWS2SHwmzDrFFKdzrvMhQ8KEhrv_XGkNA9jawI-R3m9MPzJMKhU5YSrXsKqG0atui2o1PfpBSHBn7gb_SYHG7c0hvz5WoCq3JIoaBdi_WQDt-Lje_zUtfyJBn9Uju_cw9mzDbb3xInUk89TUyn1eFSyU-PL2-qre98lqmI60dY0KbSnK_nkF" alt=""/> */}
          <div class="mapouter" style={{position:"relative",textAlign:"right",height:"500px",width:"600px"}}><div class="gmap_canvas" style={{ overflow:"hidden",background:"none!important",height:"500px",width:"600px"}}><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org"></a><br />
         <a href="https://www.embedgooglemap.net"></a></div></div>
         
         </Box>
         </Flex>
       </Box>

       <Footer />
      </>

    )
}

export  default Restaurant;



//   AIzaSyAlzPswVvnL4XzLNS8yw1JYSSNo_WfQubg