import { createContext } from "react";
import {useState} from "react";



export const AuthContext=createContext()


export default function AuthContextProvider({children}){

    const [isAuth,setIsAuth]=useState(false)
    const [post,setPost]=useState(false)

    const login=()=>{
        setIsAuth(true)
    }

    const Post=()=>{
      setPost(true)
    }

    return(
      <AuthContext.Provider value={{login,isAuth,Post,post}}>
        {children}
      </AuthContext.Provider>
    )
}