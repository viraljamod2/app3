import React from 'react'
import { Component } from 'react'
import InputField from './InputField';

// function increment(){
//     return setState (this.state.Count + 1)}

class Mainfile extends Component {
   
    render(){

        return(

            <>
            <h1> 
             Main File Page 
            </h1>
            <InputField data ="something"/>
            </>
        )
    }
};

export default Mainfile ;