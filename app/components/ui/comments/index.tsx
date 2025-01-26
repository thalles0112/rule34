'use client'
import { useEffect, useState } from "react"
import { comment } from "../../types"
import { IoPerson } from 'react-icons/io5'
import axios from 'axios'
import {parseStringPromise} from 'xml2js'

function Comment({comment}:{comment:comment}){
    return(
        <li className="flex items-center p-2 rounded gap-2 my-1">
            <div className="rounded-full bg-lime-600 p-1">
               
                <IoPerson size={24}/>
               
            </div>
            <div>
                <div className="opacity-80 font-semibold">
                    @{comment.creator}
                </div>
                <div>
                    {comment.body}
                </div>
            </div>
        </li>
    )
}


export default function ListComments({postId}:{postId:number}){
    const [comments, setComments] = useState([])

    useEffect(()=>{
        function sanitizeXML(input:string) {
            return input.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;');
        }

        async function parseXMLtoJSON(xml:string) {
            try {
              const jsonResult = await parseStringPromise(xml, { explicitArray: false });
              setComments(jsonResult.comments.comment || [])
              console.log(jsonResult.comments.comment);
            } catch (error) {
              console.error('Erro ao converter XML para JSON:', error);
            }
          }

          async function getPosts(){
            let res = await axios.get(`https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&post_id=${postId}`)
            res = res.data
            parseXMLtoJSON(sanitizeXML(res))
          }

        getPosts()

        
    },[])

    return(
        <section className="p-3">
            <h2>Comments</h2>
            <ul>
                {comments.map(comment=>{
                    return(
                        <Comment key={comment.$.id} comment={comment.$} />
                    )
                })}
            </ul>
        </section>
    )
}