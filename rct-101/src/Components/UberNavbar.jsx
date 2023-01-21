import {Box,Flex,Image,InputGroup,InputLeftAddon,Input,ButtonModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,Button,Modal, Heading, Text} from "@chakra-ui/react"
import { GrLocation } from 'react-icons/gr'
import { useState } from "react"



function UberNavbar({cart,image}){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [cartitem,setCartItem]= useState(false)


    const checkcart=()=>{
        console.log(cart)
        if(cart>0)
        {
            onOpen()
            setCartItem(false)
        }
        else if(cart==0){
            
            setCartItem(true)
            onOpen()
        }
          
    }

    const checkcart1=()=>{
        cart--

        if(cart==0){
            setCartItem(true)
            onOpen()
        }
    }
    
    

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
            <Button onClick={checkcart}>Cart ({cart})</Button>
            <Button ml={6}>Log In</Button>
            <Button ml={6}>Sign Up</Button>
        </Box>
          </Flex>
         </Box>

         <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cart Page</ModalHeader>
          <ModalCloseButton />
          {cartitem ?  
          <ModalBody>
            <Image src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" alt="" />
            <Button ml={50} bgColor={'black'} color="white">Your Cart is Empty Add Some Items</Button>
          </ModalBody>:
          <ModalBody>
             <Image src={image} alt=""/>
             <Box textAlign={'center'}>
             <Text>Total Price: Rs 400</Text>
             <Text>Quantity: 1</Text>
             </Box>
             <Button ml={70} bgColor={'black'} color="white">Proceed to Checkout</Button>
             <Button ml={50} bgColor={'black'} color="white" mt={6} onClick={checkcart1}>Remove Item From Your Cart</Button>
            </ModalBody>}

         
        </ModalContent>
      </Modal>
        </>
    )
}

export default UberNavbar;