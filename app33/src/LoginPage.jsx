import React, { useEffect, useState } from 'react';
import Registration from './Registration';
import HeaderFile from './ComanComponent/HeaderFile';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

function LoginPage() {
     
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
     const navigate=useNavigate();
     useEffect(()=>{
      sessionStorage.clear()
     },[])

    const Handlelogin =(e)=>{
        e.preventDefault();
       fetch("http://localhost:8020/user?email=" + email + "&password=" + password ).then((res)=>{
        return res.json();
    }).then((resp)=>{
        // console.log(resp[0]);
        if(resp[0]){
          sessionStorage.setItem("email",email)
          sessionStorage.setItem("role",resp[0].role)
        }
        if (resp[0].role == 1){
            navigate("/AdminPage")  
        }
        else{
            navigate("/UserLoginPage")
        }
    }).catch(()=>{

        alert ("Invalid Email Or Password");
    }) ;
        
    }
  return (
    <>
    <HeaderFile/>
    <h1>Login Page</h1>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <form onSubmit={Handlelogin}>
      <MDBInput wrapperClass='mb-4' value={email} onChange={(e)=>setEmail(e.target.value)} label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4'value={password} onChange={(e)=>setPassword(e.target.value)} label='Password' id='form2' type='password'/>


      <MDBBtn className="mb-4">LOGIN</MDBBtn>
      </form>
      <div className="text-center">
       
        <p>Not a member? <Link to='/Registration'>Registration</Link></p>
    
      </div>

    </MDBContainer>
    </>
  );
}

export default LoginPage;