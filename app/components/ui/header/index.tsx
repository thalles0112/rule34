'use client'
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import SideFilter from "../side-filter";
import { useState } from "react";
import Link from "next/link";
import { IoPerson, IoSearch } from 'react-icons/io5'
import { useRouter } from "next/navigation";


export default function Header(){
    const [menuIsOpen, setMenuIsOpen] = useState<any>(null)
    const [searchParam, setSearchParam] = useState('')
    const router = useRouter()

    const handleSearch = (e:any) =>{
        e.preventDefault()
        const myEvent = new CustomEvent('search', {detail:{tags:searchParam}})
        window.dispatchEvent(myEvent)
        router.push(`/search/?tags=${searchParam}&pid=1`)
    }

    return (
        <header className="h-16  bg-slate-950 flex items-center">

            <div className="max-sm:w-full max-sm:p-4 gap-7 lg:w-10/12 lg:mx-auto flex  items-center justify-between">
                <button onClick={()=>{setMenuIsOpen(!menuIsOpen)}} className="lg:hidden">
                    <IoMenu color="white" size={24}/>
                </button>
                <Link href={'/'}>
                    <Image src={'/img/header2.png'} width={100} height={56} alt="rule34"/>
                </Link>
                <form onSubmit={handleSearch} className="bg-white flex items-center p-2 rounded">
                    <input onChange={e=>{setSearchParam(e.target.value)}} className="outline-none text-black"/>
                    <button>
                        <IoSearch color="#000"/>
                    </button>
                </form>

            
            </div>
            <div onClick={()=>{setMenuIsOpen(false)}} className={`absolute z-20 top-16 border-b w-96 ${menuIsOpen===null?'opacity-0 -translate-x-full':''} ${menuIsOpen===false?'-translate-x-full opacity-100':'opacity-100'}`}>
                <SideFilter/>
                <div onClick={()=>{setMenuIsOpen(false)}} className="fixed w-full h-full bg-black top-0 -z-10 opacity-10">

                </div>
            </div>
            
        </header>
    )

}