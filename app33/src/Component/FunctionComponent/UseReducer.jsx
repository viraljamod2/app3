// import React, { useEffect, useState } from 'react'

// const UseReducer = () => {
//     const[count,setCount]= useState(0)
//     const Inc = () => {
//         setCount(count + 1)
//     }
//     const Dec = () => {
//         setCount(count - 1)
//     }
//     return ( 
//         <>
//         <div> <h1>{count}</h1></div>
//         <button onClick={Inc}>Increment</button>
//         <button onClick={Dec}>Decrement</button>
//         </>
//       );
// }
 
// export default UseReducer;

import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state,action) =>{
    if(action.type === "Increment"){
         return state + 1
    }
    if(action.type === "Decrement"){
        return state - 1
    }

    return state
}

const UseReducer = () => {

 const [state , dispatch ] =   useReducer (reducer , initialState)
    
    return ( 
        <>
        <div> <h1>{state}</h1></div>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        </>
      );
}
 
export default UseReducer;