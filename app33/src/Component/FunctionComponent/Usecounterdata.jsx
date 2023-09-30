import React from 'react'
import Usecounter from './Usecounter';

const Usecounterdata = () => {
    const[count,Increment,Decrement]=Usecounter()
    return ( 
        <>
         <h1>Custamhook</h1>
        <div>
         <h1>{count}</h1>
         <button onClick={Increment}>Icrement</button>
         <button onClick={Decrement}>Decrement</button>
        </div>
        </>
     );
}
 
export default Usecounterdata;