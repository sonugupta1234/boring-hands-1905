import { createContext } from "react";
import {useState} from "react";



export const AuthContext=createContext()


export default function AuthContextProvider({children}){

    const [isAuth,setIsAuth]=useState(false)
    const [post,setPost]=useState(false)
    const [menu,setMenu]=useState("")

    const login=()=>{
        setIsAuth(true)
    }

    const logout=()=>{
      setIsAuth(false)
    }

    const Post=()=>{
      setPost(true)
    }

    const dishes=(val)=>{
      setMenu(val)
    }

    return(
      <AuthContext.Provider value={{login,isAuth,Post,post,dishes,menu,logout}}>
        {children}
      </AuthContext.Provider>
    )
}