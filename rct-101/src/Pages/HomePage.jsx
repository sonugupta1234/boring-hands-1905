import {Box,Flex,Text,Heading,Button,Image} from "@chakra-ui/react"
import { CiDeliveryTruck } from 'react-icons/ci'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home(){
    return(
        <>
        <Navbar />
        <Box width="100%" >
            <Flex>
                <Box width="50%" textAlign={'left'}  mt={60} lineHeight="50px">
                 <Text color="#858C90" fontSize='xl'>Time for lunch</Text>
                 <Heading color="#DD0031">An original then, an original now</Heading>
                 <Button mt={10} width="30%" height="70px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white" fontSize="xl">Order Pickup</Button>
                 <Button mt={10} ml={6} width="30%" height="70px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white" leftIcon={<CiDeliveryTruck />} fontSize="xl">Order Delivery</Button>
                </Box>

                <Box width="50%" >
                  <Image mt={40} src="https://www.gannett-cdn.com/presto/2018/08/21/PBRE/c78e47cc-c21b-4eda-85bd-967fe1d08c02-CFA1.png?width=660&height=348&fit=crop&format=pjpg&auto=webp" alt=""/>
                </Box>
            </Flex>
        </Box>

        <Box width="100%" >
           <Flex>
            <Box  ml={35} bgColor="#F4F8F9" borderRadius="30px" >
              <Flex>
              <Box width="40%" textAlign="left" ml={10} lineHeight="30px">
                <Text mt={10}>Customer favorite</Text>
                <Heading>Mac & Cheese</Heading>
                <Text>Pair your entrée and drink with the warm, melty Mac & Cheese, baked in-restaurant with a special blend of cheddar, Parmesan, and Romano.</Text>
                <Button mt={35} width="50%" height="40px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white" >View product</Button>
              </Box>

              <Box width="60%">
                 <Image width="100%" borderRadius="30px" src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/CFA2212020-MacCheese-Module-Desktop_317x322V1.jpg?h=322&w=317&la=en" alt=""/>
              </Box>
              </Flex>
            </Box>



           
            <Box  ml={30} bgColor="#F4F8F9" borderRadius="30px">
            <Flex>
              <Box width="40%" textAlign="left" ml={10} lineHeight="30px">
                <Text mt={10}>Limited time</Text>
                <Heading>Chicken Tortilla Soup</Heading>
                <Text>Enjoy the perfect winter warm-up. Try a cupful of Chicken Tortilla Soup from now until April 1, 2023, while supplies last.</Text>
                <Button mt={35} width="50%" height="40px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white">View product</Button>
              </Box>

              <Box width="60%">
                 <Image width="100%"  borderRadius="30px" src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/Product_Featured2_Desktop.png?h=322&w=318&la=en" alt=""/>
              </Box>
              </Flex>
            </Box>
           </Flex>
        </Box>


        <Box width="90%" borderRadius="30px"  margin="auto" mt={30}>
            <Flex>
            <Box width="40%" textAlign="left" ml={10}  mt={40}>
              <Heading color="#004F71">Hungry for more ?</Heading>
              <Button width="50%" height="40px" borderRadius="20px" color="red" mt={10}>View full menu</Button>
            </Box>

            <Box width="60%">
                 <Image width="100%"  borderRadius="30px" src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/large-Spicy_Chicken-fullmenu-desktop.jpg?h=271&w=633&la=en" alt=""/>
            </Box>
            </Flex>
        </Box>


        {/* <Image width="80%" borderRadius="30px" margin="auto" mt={30}  src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/Catering_Desktop_compressed.jpg" alt=""/> */}
        
        <Box  borderRadius="30px" border="1px solid #EDF2F7" width="80%" margin="auto" mt={30} height="430px" backgroundImage="url('https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/Catering_Desktop_compressed.jpg')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat">

       <Box  width="40%" height="300px"  m={20} bgColor="white" borderRadius="30px"  >
         <Box textAlign="left" ml={10} lineHeight="30px" >
        <Heading mt={15} color="#004F71">Catering for any gathering</Heading>
        <Text>From breakfast items, party trays to packaged meals, Chick-fil-A® Catering has something for every occasion.</Text>
        <Button width="50%" height="40px" borderRadius="20px" color="white" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} mt={10}>View catering menu</Button>
        </Box>
       </Box>

     </Box>

       <Box width="90%" borderRadius="30px"  margin="auto" mt={30}>
            <Flex>
            <Box width="40%" textAlign="left" ml={10}  mt={40} lineHeight="30px">
              <Heading color="#004F71">Eat more, receive more</Heading>
              <Text>Order ahead on the app or online, and receive points from qualifying purchases. Then, use those points to redeem available rewards (Waffle Potato Fries™, anyone?).</Text>
              <Button width="80%" height="40px" borderRadius="20px" color="red" mt={10}>Learn how our loyality program works</Button>
              <Button mt={35} width="50%" height="40px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white">Join Chick-fil-A One</Button>
            </Box>

            <Box width="60%">
                 <Image width="100%" mt={55} borderRadius="30px" height="500px" src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/large-CFA2212020-GroupCandid-Module2-Desktop_648x454.jpg?h=454&w=648&la=en" alt=""/>
            </Box>
            </Flex>
        </Box>






        <Box width="90%" borderRadius="30px"  margin="auto" mt={30}>
            <Flex>


            <Box width="60%">
                 <Image width="100%" mt={55} borderRadius="30px" src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/large-eGiftCard_Landing-Page_Hero_Desktop_Cow1_636x415.jpg?h=415&w=636&la=en" alt=""/>
            </Box>

            <Box width="40%" textAlign="left" ml={10}  mt={40} lineHeight="30px">
              <Heading color="#004F71">A little thing for those you love a lot</Heading>
              <Text>No matter the season, a gift card from Chick-fil-A is the gift that keeps on chicken.</Text>
              
              <Button mt={35} width="50%" height="40px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white" >Learn about gift cards</Button>
              <Button width="40%" height="40px" borderRadius="20px" color="red" mt={10} ml={6}>Shop eGift cards</Button>
            </Box>

           
            </Flex>
        </Box>

        <Footer />

        </>

        

        
        
    )
}

export default Home;