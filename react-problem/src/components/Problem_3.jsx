import React, { useState } from 'react'

const Problem_3 = () => {

    const [email,setEmail]=useState("");
    const[message,setMessage]=useState("");
     const handleSubmit=(e)=>{
        e.preventDefault();

        if(email===""){
            setMessage("Please enter your email");
        }else{
            setMessage(`Subscribed with ${email}!`);
            setEmail("");
        }
     }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input 
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your email"
        />
        <button type="submit">Subscribe</button>
        <p>{message}</p>
    </form>
    </>
  )
}

export default Problem_3