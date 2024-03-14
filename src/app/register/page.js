"use client";
import Image from "next/image"
import { useState } from "react";
export default function RegisterPage (){
    const [email,useEmail] = useState("")
    const [password,usePassword] = useState("")


 const async handleFormSubmit=(ev)=>{
    ev.preventDefault()

    const  res =  await fetch("/api/register",
    {
        method : 'POST',
        body : JSON.stringify({email,password}),
        headers : {"Content-Type":"application/json"}
    }
    )
    console.log(res)
 }



    return(
        <section className="mt-8 ">
          <h1 className="text-primary text-center text-4xl">Register</h1>  
          <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
            <input type="email" placeholder="email" value={email} onChange={(ev)=>useEmail(ev.target.value)} />
            <input type="password" placeholder="password" onChange={(ev)=>usePassword(ev.target.value)}/>
            <button type="submit">Register</button>
            <div className="py-4 text-center text-gray-500">Or login with provider</div>
<div>
    <button className="flex gap-2 justify-center	">
    <Image  src={"/google.png"} alt={'google auth'} width={24} height={24} />

       <p >Login with google</p> </button>
</div>
          </form>
          
        </section>
    )
}