import React, { useState } from 'react'
import "./ApiPost.css";

const Apipost = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] =useState("")
    

    const Submit =() =>{
        let data = {username,password,email,phone}
        setUsername("")
        setPassword("")
        setEmail ("")
        setPhone ("")



        console.log(data);

        fetch("http://localhost:3000/posts",{
            method:"POST",
            headers:{
                
                "Content-Type" : "application/json" ,

            },
            body: JSON.stringify(data)

        }).then ((result)=>{
            // console.log(result);
            result.json().then((resp)=>{
                console.log(resp);
            })
        })
    }
    return ( 
        <>
       
        <h1>
            API POST
        </h1>
        <input className='input-fill-api'  value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username ' type='text'/>
        <br />
        <br />
        <input className='input-fill-api'  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email ' type='Email' />
        <br />
        <br />
        <input className='input-fill-api'  value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Phone ' type='Phone' />
        <br />
        <br />
        <input className='input-fill-api'  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' type='password'/>
        <br /><br />
        

        <button className='button-api' onClick={Submit}>Submit</button>
          
        </>
     );
}
 
export default Apipost;



