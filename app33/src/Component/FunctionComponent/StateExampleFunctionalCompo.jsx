import React, { useState } from 'react'
import FunctionComppp from './FunctionComppp'
// import { useState } from 'react';
 const StateExampleFunctionalCompo = (props) => {
    const [count, setCount] = useState(0)
    const [Name, setName] = useState("Mishu")
    const handlename = () => {
        return setName("Jamod")
    }
    return ( 
        <>

           <FunctionComppp name="vijay"/>
            <h1>
                this is my {Name} & {count}
                
            </h1>
            <button onClick={()=>setCount(count+1)}> Counter</button>
            <br />
            <br />
            <br />

            {/* <button onClick={()=>setName("Jamod")}> Namer</button> */}
            <button onClick={handlename}>setName</button>
        </>
     );
 }
  
 export default StateExampleFunctionalCompo ;