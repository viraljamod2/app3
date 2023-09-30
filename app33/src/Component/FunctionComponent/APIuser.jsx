import React from 'react'
import { useState } from 'react'

const APIuser = () => {
    const [data ,setData] =useState([])
   
    const Clickme =() =>{
       fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
        //    console.log(result);
           result.json().then((resp)=>{
               console.log(resp);
               setData(resp)
           })
           })
    }
   
       
       
       return ( 
           
           <>
           <button onClick={Clickme}>Click me</button>
           <br />
           <br />
           
           <table border="1" width="70%">
               <tr>
               <td>id</td>
               <td>name</td>
               <td>username</td>
               <td>address</td>
               <td>city</td>
               <td>zipcode</td>
               </tr>
   
   
               {
               data.map((item)=>
                   <tr>
                       <td>
                       {item.id}
                       </td>
                       <td>
                       {item.name}
                       </td>
                       <td>
                       {item.username}
                       </td>
                       <td>
                       {item.address}
                       </td>
                       <td>
                       {item.city}
                       </td>
                       <td>
                       {item.zipcode}
                       </td>
                   </tr>
               )}
           </table>
           </>
        );
   }
    
   export default APIuser;