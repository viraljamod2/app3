import React, { useState } from 'react'


const APIFech = () => {
 const [data ,setData] =useState([])

 const Clickme =() =>{
    fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
        // console.log(result);
        result.json().then((resp)=>{
            console.log(resp);
            setData(resp)
        })
        })
 };

    return ( 
        
        <>
        <button onClick={Clickme}>Click me</button>
        <br />
        <br />
        
        <table border="1" width="70%">
            <tr>
            <td>userId</td>
            <td>id</td>
            <td>title</td>
            <td>completed</td>
            </tr>


            {
            data.map((todos)=>
                <tr>
                    <td>
                    {todos.userId}
                    </td>
                    <td>
                    {todos.id}
                    </td>
                    <td>
                    {todos.title}
                    </td>
                    <td>
                    {todos.completed}
                    </td>
                </tr>
            )}
        </table>
        </>
     );
}
 
export default APIFech;