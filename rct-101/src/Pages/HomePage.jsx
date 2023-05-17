import {Box,Flex,Text,Heading,Button,Image} from "@chakra-ui/react"
import { CiDeliveryTruck } from 'react-icons/ci'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <Navbar />
        <Box width="100%" >
            <Flex  direction={{ base: "column", xl: "row" }}>
                <Box w={{base: "60%", lg: "50%"}} textAlign={{base: 'center', lg: 'left'}}  mt={{base: "10", lg: "60"}} lineHeight="50px">
                 <Text color="#858C90" fontSize='xl' ml={{base: "50"}}>Time for lunch</Text>
                 <Heading color="#DD0031" ml={{base: "50"}}>An original then, an original now</Heading>
                 <Flex  direction={{ base: "column", xl: "row" }} textAlign={{ base: "center" }}>
                 <Link to="/menu/entrees"><Button mt={10} ml={6} w={{base: "100%", lg: "90%"}} height="70px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white" fontSize="xl">Order Pickup</Button></Link>
                 <Link to="/menu/salads"><Button mt={10} ml={6} w={{base: "100%", lg: "90%"}} height="70px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white" leftIcon={<CiDeliveryTruck />} fontSize="xl">Order Delivery</Button></Link>
                 </Flex>
                </Box>

                <Box w={{base: "80%", lg: "50%"}} >
                  <Image mt={{base: "10", lg: "40"}} src="https://www.gannett-cdn.com/presto/2018/08/21/PBRE/c78e47cc-c21b-4eda-85bd-967fe1d08c02-CFA1.png?width=660&height=348&fit=crop&format=pjpg&auto=webp" alt=""/>
                </Box>
            </Flex>
        </Box>

        <Box width="100%" >
           <Flex direction={{ base: "column", xl: "row" }} textAlign={{ base: "center" }}>
            <Box  ml={{lg: "35", base: "5"}} bgColor="#F4F8F9" borderRadius="30px" w={{base: "70%", lg: "50%"}}>
              <Flex direction={{ base: "column", xl: "row" }} textAlign={{ base: "center" }}>
              <Box w={{base: "100%", lg: "40%"}} textAlign="left"  ml={{lg: "10"}} lineHeight="30px">
                <Text mt={10}>Customer favorite</Text>
                <Heading>Mac & Cheese</Heading>
                <Text>Pair your entrée and drink with the warm, melty Mac & Cheese, baked in-restaurant with a special blend of cheddar, Parmesan, and Romano.</Text>
                <Button mt={35} width="50%" ml={{base: "50"}} height="40px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white" >View product</Button>
              </Box>

              <Box w={{base: "100%", lg: "60%"}} mt={{base: "10"}}>
                 <Image width="100%" borderRadius="30px" src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/CFA2212020-MacCheese-Module-Desktop_317x322V1.jpg?h=322&w=317&la=en" alt=""/>
              </Box>
              </Flex>
            </Box>



           
            <Box  ml={{lg: "35", base: '5'}} mt={{base: "7"}} bgColor="#F4F8F9" borderRadius="30px" w={{base: "70%", lg: "50%"}}>
            <Flex direction={{ base: "column", xl: "row" }} >
              <Box w={{base: "100%", lg: "40%"}} textAlign="left" ml={{lg: "10"}} lineHeight="30px">
                <Text mt={10}>Limited time</Text>
                <Heading>Chicken Tortilla Soup</Heading>
                <Text>Enjoy the perfect winter warm-up. Try a cupful of Chicken Tortilla Soup from now until April 1, 2023, while supplies last.</Text>
                <Button mt={35} ml={{base: "50"}} width="50%" height="40px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white">View product</Button>
              </Box>

              <Box w={{base: "100%", lg: "60%"}} mt={{base: "7"}}>
                 <Image   borderRadius="30px" src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/Product_Featured2_Desktop.png?h=322&w=318&la=en" alt=""/>
              </Box>
              </Flex>
            </Box>
           </Flex>
        </Box>


        <Box width="90%" borderRadius="30px"  margin="auto" mt={30}>
            <Flex direction={{ base: "column", xl: "row" }}>
            <Box w={{base: "60%", lg: "40%"}} textAlign="left" ml={10}  mt={{base: "1", lg: "40"}}>
              <Heading color="#004F71">Hungry for more ?</Heading>
              <Button w={{base: '60%', lg: '50%'}}  ml={{base: "30"}} height="40px" borderRadius="20px" color="red" mt={10}>View full menu</Button>
            </Box>

            <Box w={{base: "80%", lg: "60%"}} mt={{base: "7"}}>
                 <Image width="100%"  borderRadius="30px" src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/large-Spicy_Chicken-fullmenu-desktop.jpg?h=271&w=633&la=en" alt=""/>
            </Box>
            </Flex>
        </Box>


        {/* <Image width="80%" borderRadius="30px" margin="auto" mt={30}  src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/Catering_Desktop_compressed.jpg" alt=""/> */}
        
        <Box  borderRadius="30px" border="1px solid #EDF2F7"  w={{base: "70%", lg: "80%"}} margin={{lg: "auto"}} ml={{base: "10px"}} mt={30} h={"430px"} backgroundImage="url('https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/Catering_Desktop_compressed.jpg')"
  backgroundPosition= "center"
  backgroundRepeat="no-repeat">

       <Box  w={{base: "100%", lg: "40%"}} height="300px"  m={{lg: "20px"}} bgColor="white" borderRadius="30px"  >
         <Box textAlign="left" ml={10} lineHeight="30px" >
        <Heading mt={15} color="#004F71">Catering for any gathering</Heading>
        <Text>From breakfast items, party trays to packaged meals, Chick-fil-A® Catering has something for every occasion.</Text>
        <Link to="/menu/breakfast"><Button w={{base: "70%", lg: "50%"}} height="40px" borderRadius="20px" color="white" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} mt={{base: "7px", lg: "10px"}}>View catering menu</Button></Link>
        </Box>
       </Box>

     </Box>

       <Box width="90%" borderRadius="30px"  margin="auto" mt={30}>
            <Flex direction={{ base: "column", xl: "row" }}>
            <Box width={{lg: "40%", base: "80%"}} textAlign="left"   mt={{lg: "40", base: "7"}} lineHeight="30px">
              <Heading color="#004F71">Eat more, receive more</Heading>
              <Text>Order ahead on the app or online, and receive points from qualifying purchases. Then, use those points to redeem available rewards (Waffle Potato Fries™, anyone?).</Text>
              <Button width={{lg: "80%", base: "100%"}} height="40px" borderRadius="20px" color="red" mt={10}>Learn how our loyality program works</Button>
              <Button mt={35} width={{lg: "50%", base: "100%"}} height="40px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white">Join Chick-fil-A One</Button>
            </Box>

            <Box width={{lg: "60%", base: "80%"}}>
                 <Image width="100%" mt={55} borderRadius="30px" h={{lg: "500px", base: "350px"}} src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/large-CFA2212020-GroupCandid-Module2-Desktop_648x454.jpg?h=454&w=648&la=en" alt=""/>
            </Box>
            </Flex>
        </Box>






        <Box width="90%" borderRadius="30px"  margin="auto"  mt={{lg: "30"}}>
            <Flex direction={{ base: "column", xl: "row" }}>


            <Box width={{lg: "60%", base: "80%"}}>
                 <Image width="100%" mt={55} borderRadius="30px" src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/large-eGiftCard_Landing-Page_Hero_Desktop_Cow1_636x415.jpg?h=415&w=636&la=en" alt=""/>
            </Box>

            <Box width={{lg: "40%", base: "80%"}} textAlign="left" ml={{lg: "10"}}   mt={{lg: "40", base: "7"}} lineHeight="30px">
              <Heading color="#004F71">A little thing for those you love a lot</Heading>
              <Text>No matter the season, a gift card from Chick-fil-A is the gift that keeps on chicken.</Text>
              
              <Button mt={35} width={{lg: "50%", base: "90%"}} height="40px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white" >Learn about gift cards</Button>
              <Button width={{lg: "40%", base: "90%"}} height="40px" borderRadius="20px" color="red" mt={10} ml={{lg: "6"}}>Shop eGift cards</Button>
            </Box>

           
            </Flex>
        </Box>

        <Footer />

        </>

        

        
        
    )
}

export default Home;