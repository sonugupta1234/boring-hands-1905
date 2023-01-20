
import {Heading, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer} from "@chakra-ui/react"

    import axios from "axios"

    import {useState,useEffect} from "react"

function Dashboard(){

    const [data,setData]=useState([])


    useEffect(()=>{
       axios.get('http://localhost:8000/breakfast')
       .then((res)=>setData(res.data))
       .catch((err)=>console.log(err))
    },[])
    return(
        <>
      <Heading>Admin Dashboard</Heading>
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