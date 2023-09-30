import React, { useState } from 'react'
import { useEffect } from 'react';

const UseEffect = () => {
   const [count,setcount]=useState(0)

    useEffect(()=>{
        alert("Are You Sure Login this site")
    })
    return ( 
        <>

        <h1>This is Use Efffect hook</h1>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count + 1)}>Counter</button>
        </>
     );
}
 
export default UseEffect;