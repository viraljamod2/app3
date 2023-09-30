import React from 'react'
import { Component } from 'react'

class Clickcounter extends Component{
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
            <button onClick={this.incrementCount}>Click {count} time</button>
            </>
        )
    }
}


export default  Clickcounter ;