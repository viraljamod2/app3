import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./AdminPage.css";


const AdminPage = () => {
  const [data ,setData] =useState([])
  

 const ShowData =() =>{
    fetch("http://localhost:8020/user").then((result)=>{
        // console.log(result);
        result.json().then((resp)=>{
            console.log(resp);
            setData(resp)
        })
        })}
  const navigate = useNavigate()

  useEffect(()=>{
    let email=sessionStorage.getItem("email")
    let role= sessionStorage.getItem ("role")
    if(email ==="" || email === null || role !=1){
      navigate("/LoginPage")
    }
  },[])
  return (
    <div className='font'>
        <h1>Welcome To Admin Page</h1>

        <button onClick={ShowData}>ShowData</button>
        <br />
        <br />
        
        <table className='table' border="1" width="70%">
            <tr className='table'>
            <th>username</th>
            <th>email</th>
            <th>password</th>
            <th>role</th>
            <th>id</th>
            </tr>


            {
            data.map((user)=>
                <tr className='table'>
                    <td>
                    {user.username}
                    </td>
                    <td>
                    {user.email}
                    </td>
                    <td>
                    {user.password}
                    </td>
                    <td>
                    {user.role}
                    </td>
                    <td>
                    {user.id}
                    </td>
                    
                </tr>
            )}
        </table>
    </div>
  )
}

export default AdminPage ;


