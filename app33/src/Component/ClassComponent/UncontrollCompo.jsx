import React,{Component} from 'react';

class UncontrollCompo extends Component {
   
    constructor(){
        super()
        this.inputref = React.createRef()
    }
    submithendel(event){
        event.preventDefault()
        console.log(this.inputref.current.value);
    }
   
    render(){
        return(
            <>
            <form onSubmit={(event)=>this.submithendel(event)}>
                Name : <input type = "text" ref={this.inputref} />
                 <br />
                 <br />
                <input type="submit" value="submit" />

                
            </form>
            </>
        )
    }
};
 export default UncontrollCompo;