import React from 'react'
import { Component } from 'react'
 
class Childecomp extends Component{
 
    render(props){

        return(
            <>
            <h1>Child Comp for demo</h1>
            <h2>{this.props.data}</h2>
            <h3>{this.props.children}</h3>
            </>
        )
    }

}

export default Childecomp ;
