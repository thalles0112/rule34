'use client'
import { useEffect, useState } from "react"
import './style.css'
import Image from "next/image"
import Link from "next/link"
import { post } from "../../types"
import axios from 'axios'
import {parseStringPromise} from 'xml2js'

function Card({post}:{post:post}){
    return(
        <Link href={`/post/${post.id}`}>
            <li className="post rounded-md overflow-hidden hover:shadow-md hover:scale-105">
                <img src={post.preview_url} width={post.preview_width} height={post.preview_heigth} alt={post.name} className="object-cover w-full h-full"/>
            </li>
        </Link>
    )
}

export default function ListPosts({tag, pid}:{tag:string, pid:string}){
    const [posts, setPosts] = useState<post[]>([
    ])

    useEffect(()=>{
        function sanitizeXML(input:string) {
            return input.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;');
        }

        async function parseXMLtoJSON(xml:string) {
            try {
              const jsonResult = await parseStringPromise(xml, { explicitArray: false });
              setPosts(jsonResult.posts.post || [])
            } catch (error) {
              console.error('Erro ao converter XML para JSON:', error);
            }
          }

          async function getPosts(){
            let res = await axios.get(`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${tag}&limit=21&pid=${pid}`)
            res = res.data
            parseXMLtoJSON(sanitizeXML(res))
          }

        getPosts()

        
    },[tag,pid])


    return(
        <ul className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4 w-full">
          {posts.map((p,idx)=>{
            return(
                <Card key={idx} post={p.$}/>
            )
          })}
        </ul>
    )
}