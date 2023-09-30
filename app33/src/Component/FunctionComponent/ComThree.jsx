import React from 'react'
import { Firstname } from './Usecontextfirst';
import  { Lastname } from './Usecontextfirst';
import { useContext } from 'react';

const ComThree = () => {
   return (
    <>
    <Firstname.Consumer>
      {
        (fname)=>{
          return (
            <Lastname.Consumer>
              {
                (lname)=>{
                  return(
                    <h1>{lname}  <br/>   {fname}</h1>
                  )
                }
              }
              </Lastname.Consumer>
          )
        }
      }
    </Firstname.Consumer>
    </>
   )
    }
export default ComThree;