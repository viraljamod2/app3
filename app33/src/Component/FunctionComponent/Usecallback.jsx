import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import ChildForCallBack from './ChildForCallBack'

const Useclallback = () => {

    const [count,setCount] = useState(2)
    const [item,setitem] = useState(10)
    

    const pre =useCallback(
        function pre(){
            console.log("Hello ");
        },[]
    )
    return (

        <>
         <h1>Use CallBack </h1>
        <ChildForCallBack pre={pre()}/>
         <h1>
         {count}
         </h1>
            <h1>
         {item}
         </h1>
    <button onClick={()=> setCount(count+2)}>Update Count</button>
    <button onClick={()=> setitem(item-8)}>Update item</button>
    

        </>

      );
      
}
 

export default Useclallback ;