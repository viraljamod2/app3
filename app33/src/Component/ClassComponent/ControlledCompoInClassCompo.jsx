import React,{Component} from 'react'

class ControlledCompoinClassCompo extends Component{
    constructor(){
        super()
        this.state ={
            Name : "" ,
            Phone : "",
            Password :""
        }
    }
    submithendel(event){
        event.preventDefault()
        console.log(this.state.Name);
        console.log(this.state.Phone);
        console.log(this.state.Password);
        
    }
   
    render(){
        return(
            <>
            <form onSubmit={(event)=>this.submithendel(event)}>
                Name : <input type = "text" onChange={(event)=> this.setState({Name : event.target.value})} />
                 <br />
                 <br />
                 Phone : <input type="tel" name="" id="" onChange={(event)=> this.setState({Phone : event.target.value})} />
                 <br />
                 <br />
                 Password : <input type="password" name="" id="" onChange={(event)=> this.setState({Password : event.target.value})} />
                 <br />
                 <br />
                <input type="submit" value="submit" />

                
            </form>
            </>
        )
    }
};
 
export default ControlledCompoinClassCompo ;