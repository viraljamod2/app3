import React from 'react'
import ComOne from './ComOne';
import { createContext } from 'react';

const Firstname = createContext()
const Lastname  = createContext()

const Usecontextfirst = () => {
    return ( 

        <>
        <h1>hello World</h1>
        <Firstname.Provider value="Munil" >
            <Lastname.Provider value="GoodMorning">
      
       <ComOne/>

       </Lastname.Provider>
       </Firstname.Provider>
        </>
     );
}
 
export default Usecontextfirst ;
export {Firstname} ;
export{ Lastname} ;