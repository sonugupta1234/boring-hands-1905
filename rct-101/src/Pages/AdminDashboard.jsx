
import {Heading, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,Button} from "@chakra-ui/react"

    import axios from "axios"

    import {useState,useEffect,useContext} from "react"
import { AuthContext } from "../Context/AuthContextProvider"


function Dashboard(){

    const [data,setData]=useState([])

    const {menu}=useContext(AuthContext)


    const getdata=async()=>{
      try {
        const response= await fetch(`http://localhost:8000/${menu}`)

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
      const response= await fetch(`http://localhost:8000/${menu}/${id}`,{
        method: 'DELETE'
      })
      const data=await response.json()
      getdata()
    }

    return(
        <>
      <Heading>Admin Dashboard</Heading>

      <Heading mt={7}>{menu} items</Heading>
      <TableContainer >
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Image</Th>
        <Th >Price</Th>
      </Tr>
    </Thead>
    <Tbody>
     {data?.map((item)=>{
        return(
            <Tr >
            <Td>{item.title}</Td>
            <Td >{item.image}</Td>
            <Td>{item.price}</Td>
            <Button onClick={()=>handledelete(item.id)}>Delete Item</Button>
          </Tr>
        )
     })}
     
    </Tbody>
    
  </Table>
</TableContainer>
      </>
    )
}

export default Dashboard;