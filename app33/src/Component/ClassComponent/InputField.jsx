import React from 'react'
import { Component } from 'react'


class InputField extends Component {
     
    render(){

        return(

            <>
            <h1>
                this is Child
            </h1>
            <h4>
                {this.props.data}
            </h4>
            
            </>
        )
    }
};

export default InputField ; 