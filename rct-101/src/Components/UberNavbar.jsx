import {Box,Flex,Image,InputGroup,InputLeftAddon,Input,Button} from "@chakra-ui/react"
import { GrLocation } from 'react-icons/gr'


function UberNavbar(){
    return(
        <>
        <Box width="100%" mt={3}>
         <Flex justifyContent={'space-between'}>
        <Box>
            <Image src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg" alt="" />
        </Box>

        <Box width="40%">
        <InputGroup >
            <InputLeftAddon children={<GrLocation /> } />
            <Input  type='text' placeholder='Enter Delivery Address' />
        </InputGroup>

        </Box>

        <Box>
            <Button>Cart</Button>
            <Button ml={6}>Log In</Button>
            <Button ml={6}>Sign Up</Button>
        </Box>
          </Flex>
         </Box>
        </>
    )
}

export default UberNavbar;