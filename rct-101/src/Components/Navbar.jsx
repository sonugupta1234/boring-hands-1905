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
  InputGroup,
  useToast,
  Select,
  Drawer,
  Tooltip
} from '@chakra-ui/react';
import { Search2Icon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { GrLocation } from 'react-icons/gr';
import {RiContactsLine} from 'react-icons/ri'
import { NavLink, useSearchParams} from 'react-router-dom';
import { useState,useContext } from 'react';

import { AuthContext } from '../Context/AuthContextProvider';
//import Restaurant from '../Pages/RestaurantPage';

//const Links = ['Dashboard', 'Projects', 'Team'];



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {logout,isAuth}=useContext(AuthContext)

  const [text,setText]=useState("")
  //const [value,setValue]=useState(false)
  const [searchparams,setSearchParams]=useSearchParams()

  const toast = useToast()

   const { 
    isOpen: isOpenMenu, 
    onOpen: onOpenMenu, 
    onClose: onCloseMenu
} = useDisclosure()

const { 
  isOpen: isOpenMen, 
  onOpen: onOpenMen, 
  onClose: onCloseMen
} = useDisclosure()

const { 
  isOpen: isOpenModal, 
  onOpen: onOpenModal, 
  onClose: onCloseModal
} = useDisclosure()

const { 
  isOpen: isOpenSign, 
  onOpen: onOpenSign, 
  onClose: onCloseSign
} = useDisclosure()


const { 
  isOpen: isOpenCont, 
  onOpen: onOpenCont, 
  onClose: onCloseCont
} = useDisclosure()


const { 
  isOpen: isOpenAbout, 
  onOpen: onOpenAbout, 
  onClose: onCloseAbout
} = useDisclosure()



const handleChange=(e)=>{
   setText(e.target.value)
   
}




  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}  bgColor="#F0F0F0" w={{base: "100%"}} >
        <Flex   justifyContent={{lg: 'space-between'}}>
          <IconButton
            size={'md'}
            icon={isOpenMen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpenMen ? onCloseMen : onOpenMen}
          />
          {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIq-I5FkzG5r86SQoQCSBAiXVNG31yA8R9lQ&usqp=CAU */}
          <HStack   w={{lg: "35%", base: "90%"}}>
           <NavLink to="/"><Box  w={{lg: "80%"}}>
                <Image style={{width: "50%", borderRadius: "100%"}} src="https://d2wl1kt18tqdum.cloudfront.net/v2.1.2499-stageb/Assets/Theming/css/img/icon_circle-cfa-logo.svg" alt=""/>
            </Box></NavLink>

            <Divider orientation='vertical'/>

            <Button fontSize={{lg: "22", base: "15"}} w={{base: "100%"}} color="red" onClick={onOpenModal} leftIcon={<GrLocation /> }>
                
                
                Find a restaurant
                
            </Button>

            <IconButton 
            size={'xl'}
            icon={isOpenCont ? <CloseIcon /> : <RiContactsLine />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpenCont ? onCloseCont : onOpenCont}
          />
           
          </HStack>
          <HStack spacing={10}  display={{ base: 'none', md: "flex"}}>
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

          <Menu isOpen={isOpenAbout}>

              <MenuButton
                
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                color="red"
                border="none"
                h="30px"
                fontSize="md"
                minW={0}
                _hover={{textDecoration: "underline"}}
                onMouseEnter={onOpenAbout}
                onMouseLeave={onCloseAbout}>
                
                  
                About
              </MenuButton>
              <MenuList  onMouseEnter={onOpenAbout} onMouseLeave={onCloseAbout} width="125%" color="red"  height="50px">
              <Flex justifyContent={'space-around'}>
                <Box>Who We Are</Box>
                <Box>Great Food</Box>
                <Box>Giving Back</Box>
                <MenuDivider />
                <Box>History</Box>
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

          <HStack  color="red" display={{ base: 'none', md: "flex"}}>
            <Button onClick={onOpenSign}>
               Sign Up
            </Button>

            <NavLink to="/login"><Button>
              Log In
            </Button></NavLink>

            <NavLink to="/adminform"><Button>
              Admin
            </Button></NavLink>

            <Button isDisabled={isAuth==false} onClick={logout}>Sign Out</Button>

            <NavLink to="/menu/breakfast"><Button borderRadius="40px" h={50} w={100} bgColor="#C60628" color="white" border="none">Order food</Button></NavLink>
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




      <Modal
       
        isOpen={isOpenSign}
        onClose={onCloseSign}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input  placeholder='First name' />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Mobile No</FormLabel>

              <InputGroup >
              <InputLeftAddon children={'+91'} />
              <Input type="number" placeholder='Enter Mobile No' />
              </InputGroup>
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Email' type="email" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input placeholder='password' type="password"/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() =>
        toast({
          position: 'top-middle',
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }>
              Submit
            </Button>
            <Button onClick={onCloseSign}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>






      {isOpenMen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Menu isOpen={isOpen}  >
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
             
              <MenuList  onMouseEnter={onOpen} onMouseLeave={onClose} width="125%" height="50px" >
              
                {/* <Box  height="50px" spacing={10} > */}
                    <Flex  justifyContent={'space-around'} >
                      
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

          <Menu isOpen={isOpenAbout}>

              <MenuButton
                
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                color="red"
                border="none"
                h="30px"
                fontSize="md"
                minW={0}
                _hover={{textDecoration: "underline"}}
                onMouseEnter={onOpenAbout}
                onMouseLeave={onCloseAbout}>
                
                  
                About
              </MenuButton>
              <MenuList  onMouseEnter={onOpenAbout} onMouseLeave={onCloseAbout} width="125%" color="red"  height="50px">
              <Flex justifyContent={'space-around'}>
                <Box>Who We Are</Box>
                <Box>Great Food</Box>
                <Box>Giving Back</Box>
                <MenuDivider />
                <Box>History</Box>
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
            </Stack>
          </Box>
        ) : null}






{isOpenCont ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} color="red">
            
            <Button onClick={onOpenSign}>
               Sign Up
            </Button>

            <NavLink to="/login"><Button>
              Sign In
            </Button></NavLink>

            <NavLink to="/"><Button>
              Admin
            </Button></NavLink>

            <Button isDisabled={isAuth} onClick={logout}>Sign Out</Button>

            <NavLink to="/menu/breakfast"><Button borderRadius="40px" h={50} w={100} bgColor="#C60628" color="white" border="none">Order food</Button></NavLink>
            <Box>
            <Search2Icon />
            </Box>
          
            </Stack>
          </Box>
        ) : null}
      
    </>
  );
}