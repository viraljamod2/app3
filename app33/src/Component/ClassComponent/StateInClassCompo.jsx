import React,{Component} from 'react';

class StateInClassCompo extends Component {

constructor(){
    super()
    this.state ={
        count : 0 ,
        name :"Mishu",
    }
}

// Change(){
//     this.setState({count : this.state.count + 1})
// }
// Change2(){
//     this.setState({count : this.state.count - 1})
// }
Changename(){
    this.setState({count : this.state.name="Jamod"})
}



    render(){
        return(
            <>
            State Com
            {/* <h1>{this.state.count}</h1> */}
            <h1>{this.state.name}</h1>


            {/* <button onClick={()=>this.Change()}> Change+Data</button>
            <br />
            <br />

            <button onClick={()=>this.Change2()}> Change-Data</button>
            <br />
            <br />
            <br /> */}
            <button onClick={()=>this.Changename()}> ChangeName</button>

            </>
        )
    }
}

export default StateInClassCompo ;