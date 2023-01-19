import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Heading,
  InputLeftAddon,
  InputGroup
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { GrLocation } from 'react-icons/gr';
import { NavLink, useSearchParams} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
//import Restaurant from '../Pages/RestaurantPage';

//const Links = ['Dashboard', 'Projects', 'Team'];



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [text,setText]=useState("")
  //const [value,setValue]=useState(false)
  const [searchparams,setSearchParams]=useSearchParams()

   const { 
    isOpen: isOpenMenu, 
    onOpen: onOpenMenu, 
    onClose: onCloseMenu
} = useDisclosure()

const { 
  isOpen: isOpenModal, 
  onOpen: onOpenModal, 
  onClose: onCloseModal
} = useDisclosure()


const handleChange=(e)=>{
   setText(e.target.value)
   
}




  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}  bgColor="#F0F0F0">
        <Flex   justifyContent={'space-between'}>
          {/* <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <HStack   width="35%">
            <Box  width="30%">
                <Image style={{width: "50%", borderRadius: "100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIq-I5FkzG5r86SQoQCSBAiXVNG31yA8R9lQ&usqp=CAU" alt=""/>
            </Box>

            <Divider orientation='vertical'/>

            <Button fontSize={22} color="red" onClick={onOpenModal} leftIcon={<GrLocation /> }>
                
                
                Find a restaurant
                
            </Button>
           
          </HStack>
          <HStack spacing={10} >
            <Menu isOpen={isOpen}>
              <MenuButton
        
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                color="red"
                border="none"
                _hover={{textDecoration: "underline"}}
                h="30px"
                fontSize="md"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                
                minW={0}>
                
                  
                Menu
              </MenuButton>
              <MenuList  onMouseEnter={onOpen} onMouseLeave={onClose} width="125%" height="50px">
                {/* <Box  height="50px" spacing={10} > */}
                    <Flex justifyContent={'space-around'} >
                      
                       <NavLink to="/menu/breakfast"> <Box  color="red">Breakfast</Box> </NavLink>
                        <NavLink to="/menu/entrees"><Box color="red">Entrees</Box></NavLink>
                        <NavLink to="/menu/salads"><Box color="red">Salads</Box></NavLink>
                        <Box color="red">Sides</Box>
                        <Box color="red">Kid's Meals</Box>
                        <Box color="red">Treats</Box>
                        <Box color="red">Drinks</Box>
                        <Box color="red">Dipping Sauces and Dressings</Box>
                        <Box color="red">Catering</Box>
                      
                    </Flex>

                {/* </Box> */}
              </MenuList>
            </Menu>
            <Menu isOpen={isOpenMenu}>
              <MenuButton
                
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                color="red"
                border="none"
                h="30px"
                fontSize="md"
                onMouseEnter={onOpenMenu}
                onMouseLeave={onCloseMenu}
                _hover={{textDecoration: "underline"}}
                minW={0}>
                
                  
                Stories
              </MenuButton>
              
              <MenuList  onMouseEnter={onOpenMenu} onMouseLeave={onCloseMenu} width="125%" color="red"  height="50px">
                <Flex justifyContent={'space-around'}>
                <Box>Food</Box>
                <Box>Lifestyle</Box>
                <Box>Inside Chick-fill-A</Box>
                <MenuDivider />
                <Box>News</Box>
                 </Flex>
              </MenuList>
              
        </Menu>

          <Menu>

              <MenuButton
                
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                color="red"
                border="none"
                h="30px"
                fontSize="md"
                minW={0}
                _hover={{textDecoration: "underline"}}>
                
                  
                About
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
        </Menu>

        <Menu>

              <MenuButton
                
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                color="red"
                border="none"
                h="30px"
                fontSize="md"
                _hover={{textDecoration: "underline"}}>
                
                  
                Careers
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          <HStack spacing={20}>
            <Box color="red">
                Chick-fill-A-One (Sign In)
            </Box>

            <Button borderRadius="40px" h={50} w={100} bgColor="#C60628" color="white" border="none">Order food</Button>
            <Box>
            <Search2Icon />
            </Box>
          </HStack>
        </Flex>

       
      </Box>

      {/* {value ? <Restaurant /> :  */}


      <Modal
        
        
        isOpen={isOpenModal}
        onClose={onCloseModal}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Create your account</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Heading textAlign={'center'} mt={8} color="#004F71">Find a Restaurant</Heading>
            <InputGroup mt={8}>
              
            <InputLeftAddon children={<Search2Icon />} />
              <Input   placeholder="Enter address,city and state, or zip"  onChange={handleChange}/>
              
            </InputGroup>

            <Button leftIcon={<GrLocation />} bgColor="white" color="red" mt={4}>Use my location</Button><br />
            
            <NavLink to="/locations"><Button mt={10} left="30%" width="40%" height="40px" borderRadius="20px" bgColor="#CC052B" _hover={{bgColor: "#CC052B"}} color="white" fontSize="xl" >Search</Button> </NavLink>
            
          </ModalBody>

        
        </ModalContent>
      </Modal>

      
    </>
  );
}