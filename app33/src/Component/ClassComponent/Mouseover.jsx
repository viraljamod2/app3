import React from 'react'
import { Component } from 'react'

class Mouseover extends Component{
   constructor(){
    super()
    this.state ={ count: 0 }
   }
   incrementCount =() => {
    this.setState( prevstate => {
        return { count : prevstate.count + 1}
    })
   }
    render(){
            const {count}=this.state
        return(
            <>
            <button onMouseOver={this.incrementCount}>Click {count} time</button>
            </>
        )
    }
}


export default  Mouseover ;