'use client'
import Image from "next/image";
import Header from '../components/ui/header'

import { useEffect, useState } from "react";
import { userAuthData } from "../components/types";
import LoginForm from "../components/ui/login-form";




export default function Post() {
    const [userData, setUserData] = useState<userAuthData>()
    useEffect(()=>{

        async function loadData() { 
            //const data = await loadUserData()
          
            
        }

    },[])
    

 
  return (
    <div className="h-full">
      <Header/>
      
      <main className="flex flex-col max-sm:w-full sm:w-full lg:w-10/12 mx-auto sm:items-start page-height">
       
        <h1 className="title  w-full my-4">My account</h1>
        
        {userData
        ?<></>
        :<LoginForm/>
        
        }
        
       
        
        
      </main>


    </div>
  );
}
