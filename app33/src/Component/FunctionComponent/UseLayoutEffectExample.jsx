import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'

const UseLayoutEffectExample = () => {
   
    // useEffect(()=>{
    //     console.log ("This is First UseEffect")
    // })
    // useLayoutEffect(()=>{
    //     // prompt ("This Is Use Layout Effect")

    // alert ("WelCome To Our Site ")
        
    
    // })
    // useEffect(()=>{
    //     console.log ("This is Third UseEffect")
    // })
   const [num, setNum] = useState(0)
   useLayoutEffect(()=>{if(num===0) setNum (5 + Math.random ()* 5000)},[num])
     
    return(

        <>
        <h1>
            {num}
            
        </h1>
        <button onClick={()=> setNum (0)}>Update</button>
        </>
    )
};

export default UseLayoutEffectExample ;