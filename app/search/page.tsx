'use client'
import Header from '../components/ui/header'
import SideFilter from '../components/ui/side-filter'
import { useRouter, useSearchParams } from "next/navigation";
import ListPosts from "../components/ui/list-posts";
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'
import { Suspense, useEffect, useState } from "react";


export default function Search() {
  const [pid, setPid] = useState(useSearchParams().get('pid') || 1)
  const [tag, setTag] = useState(useSearchParams().get('tags') || '0')
  
  useEffect(()=>{
    window.addEventListener('search',(e)=>{
      setTag(e.detail.tags)
    })
  },[])
  const router = useRouter()
  
  function navigateForward(){
    
    setPid(parseInt(pid)+1)
    router.push(`/search?tags=${tag}&pid=${parseInt(pid)+1}`)
  }

  function navigateBack(){
    if(pid > 0){
      setPid(parseInt(pid)-1)
      router.push(`/search?tags=${tag}&pid=${parseInt(pid)-1}`)
    }
    
  }
 
  return (
    <Suspense className="h-full">
      <Header/>
      
      <main className="flex flex-col sm:w-full lg:w-10/12 mx-auto items-center sm:items-start  mb-10">
        <h1 className="title text-center w-full my-4">Search results for "{tag}"</h1>
        
          <div className="flex gap-4">
            <div className="max-lg:hidden">
            <SideFilter/>
            </div>

            <section>
              <ListPosts pid={pid} tag={tag}/>
            </section>
          </div>

          
          

      </main>
          <div className="border p-1 rounded-md w-fit flex justify-between mx-auto gap-4 mb-10">
          <button onClick={navigateBack}><IoArrowBack/></button>
          <input value={pid} type="number" className="bg-transparent outline-none border w-16 text-center mx-auto" onChange={e=>{setPid(e.target.value)}}/>
          <button onClick={navigateForward}><IoArrowForward/></button>
          </div>

    </Suspense>
  );
}
