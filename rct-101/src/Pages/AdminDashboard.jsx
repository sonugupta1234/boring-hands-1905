
import {Heading, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,Button, GridItem, Grid, Image, Text} from "@chakra-ui/react"

    import axios from "axios"

    import {useState,useEffect,useContext} from "react"
import { AuthContext } from "../Context/AuthContextProvider"


function Dashboard(){

    const [data,setData]=useState([])

    const {menu}=useContext(AuthContext)
    console.log(menu)


    const getdata=async()=>{
      try {
        const response= await fetch(`https://rct-deployment-ii.onrender.com/${menu}`)

        const mydata= await response.json()
        setData(mydata)
      } catch (error) {
        console.log(error)
      }
    }


    useEffect(()=>{
       getdata()
    },[])

    const handledelete=async(id)=>{
      const response= await fetch(`https://rct-deployment-ii.onrender.com/${menu}/${id}`,{
        method: 'DELETE'
      })
      const data=await response.json()
      getdata()
    }

    return(
        <>
      <Heading>Admin Dashboard</Heading>

      <Heading mt={7}>{menu} items</Heading>
      {/* <TableContainer >
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Image</Th>
        <Th >Price</Th>
      </Tr>
    </Thead>
    <Tbody> */}
    <Grid templateColumns='repeat(4, 1fr)' gap={5} >
     {data?.map((item)=>{
        return(
          //   <Tr >
          //   <Td>{item.title}</Td>
          //   <Td >{item.image}</Td>
          //   <Td>{item.price}</Td>
          //   <Button onClick={()=>handledelete(item.id)}>Delete Item</Button>
          // </Tr>
          <>
         <GridItem boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px;">
          <Image src={item.image} alt=""/>
          <Heading fontSize={'lg'}>{item.title}</Heading>
          <Text marginTop={'7px'}>{item.price}</Text>
          <Button onClick={()=>handledelete(item.id)} marginTop={'7px'} backgroundColor={'aqua'} _hover={{backgroundColor: 'aqua'}}>Delete</Button>
         </GridItem>
        
         </>
        )
     })}
     </Grid>
     
    {/* </Tbody>
    
  </Table>
</TableContainer> */}
      </>
    )
}

export default Dashboard;