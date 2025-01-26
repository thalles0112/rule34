'use client'
import { useState } from "react"
import { backend } from "../../services/backend"


export default function LoginForm(){
    const [credentials, setCredentials] = useState({email:'', password:'', username:''})
    const [login, setLogin] = useState(true) // if login==true the submit handler will auth to backend else it will register to the backend
    const [error, setError] = useState({email:'', username:'', password:''})
    

    const handleSubmit = async (event:any) =>{
        event.preventDefault()
        if(login){
            const response = await backend.post('/api/login/', credentials)
            if(response.status==400){
                const e = await response.json()
                console.log(e)
                setError(e)
            }
            else if (response.status ==200){
                const data = await response.json()
                
                window.location.reload()
            }
        }
        else{
            const response = await backend.post('/api/register/', credentials)
            if(response.status==400){
                const e = await response.json()
                console.log(e)
                const emailNotFulfilled = credentials.email == ""
                setError({...e, email:emailNotFulfilled?'This field may not be blank and must be a valid email':''})
                
            }
            else if(response.status==201){
                const data = await response.json()
                
                window.location.reload()
            }
        }
    }

    return(
        <div className="mx-auto max-sm:w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4 max-sm:w-10/12 max-sm:mx-auto border-black rounded-md border">
                <h2 className="text-lg font-bold text-center">{login?'Login':'Register'}</h2>
                <div className="flex flex-col">
                    <span className="text-red-300">{error.email?error.email:''}</span>
                    <label htmlFor="email">email</label>
                    <input onChange={(e)=>{setCredentials({...credentials, email: e.target.value})}}  className="bg-transparent outline-none border-b" placeholder="email" name="email"/>
                </div>
                {
                    !login
                    ?<div className="flex flex-col">
                        <span className="text-red-300">{error.username?error.username[0]:''}</span>
                        <label htmlFor="username">username</label>
                        <input onChange={(e)=>{setCredentials({...credentials, username: e.target.value})}} className="bg-transparent outline-none border-b" placeholder="username" name="username"/>
                    </div>
                    :<div></div>
                }
                
                <div className="flex flex-col">
                <span className="text-red-300">{error.password?error.password[0]:''}</span>
                    <label htmlFor="password">password</label>
                    <input onChange={(e)=>{setCredentials({...credentials, password: e.target.value})}}  className="bg-transparent outline-none border-b" placeholder="password" name="password"/>
                </div>

                <button className="bg-lime-500 hover:opacity-70 p-2 rounded-md mt-5">{login?'Login':'Register'}</button>
                {login
                ?<p className="text-center mt-2">Not registered yet? <span className="underline cursor-pointer" onClick={()=>{setLogin(false)}}>Register!</span></p>
                :<p className="text-center underline mt-2 cursor-pointer" onClick={()=>{setLogin(true)}}>Go back to login</p>}
            </form>
        </div>
    )
}