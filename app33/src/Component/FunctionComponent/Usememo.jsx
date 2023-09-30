import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

const Usememo = () => {

const [count,setCount] = useState(2)
const [item,setitem] = useState(10)
// function Counter(){
//    alert("Hello Counter")
// }
const counter2 = useMemo(
    function Counter(){
        console.log("Hello Counter");
        },[item]
)

return(
    <>
    <h1>
        {count}
    </h1>
    <p>{counter2}</p>
    <h1>
        {item}
    </h1>
    <button onClick={()=> setCount(count*2)}>Update Count</button>
    <button onClick={()=> setitem(item*8)}>Update item</button>
    
    
    
    </>
)

}
export default Usememo ;