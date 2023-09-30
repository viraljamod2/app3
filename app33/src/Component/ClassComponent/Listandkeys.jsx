import React,{Component} from 'react';

class Listandkeys extends Component {
    constructor(){
        super()
        this.state ={
            item : [1,2,3,4,5] 
        }
    }

    handel () { 
        this.setState({
            item : [7,1,2,3,4,5,6]
        })   
    }
    render(){
        
        // const item = [1,2,3,4,5]
        const newlist =this.state.item.map((item) => <li key={item.toString()}>{item}</li>)
        return(
            <>
            <div>
                <ul>
                    <li>{newlist}</li>
                </ul>
                <button onClick={this.handel.bind(this)}>Add Array</button>
            </div>
            
            </>

        )
    }
};

export default Listandkeys ;