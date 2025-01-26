'use client'
import Image from "next/image";
import Header from '../../components/ui/header'
import SideFilter from '../../components/ui/side-filter'
import './style.css'
import ListComments from "@/app/components/ui/comments";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from 'axios'
import {parseStringPromise} from 'xml2js'


export default function Post() {
  const [post, setPost] = useState({})
  const {id} = useParams()
  
  useEffect(()=>{
    function sanitizeXML(input:string) {
        return input.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;');
    }

    async function parseXMLtoJSON(xml:string) {
        try {
          const jsonResult = await parseStringPromise(xml, { explicitArray: false });
          setPost(jsonResult.posts.post || {})
          console.log(jsonResult.posts.post);
        } catch (error) {
          console.error('Erro ao converter XML para JSON:', error);
        }
      }

      async function getPosts(){
        let res = await axios.get(`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&id=${id}`)
        res = res.data
        parseXMLtoJSON(sanitizeXML(res))
      }

      getPosts()

    

    
},[])
 
  return (
    <div className="h-full">
      <Header/>
      
      <main className="flex flex-col max-sm:w-full sm:w-full lg:w-10/12 mx-auto  sm:items-start page-height">
        <div className="image-container mt-10">
          <img src={post.$ && post.$.file_url} width={1000} height={1000} alt='' className="object-cover"/>

        </div>
        <h1 className="title  w-full my-4">{post.name}</h1>
        
        
        <ListComments postId={post.id}/>
        
        
      </main>


    </div>
  );
}
