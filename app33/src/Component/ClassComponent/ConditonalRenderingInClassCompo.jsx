import React,{Component} from 'react';

class ConditonalRenderingInClassCompo extends Component {
    
    constructor (){
        super()
        this.state={
            islogin: false
        }
    }
    
    
    render(){
        if(this.state.islogin){
            return <h1>Welcome User If ture</h1>
        }
        else {
            return <h1>Welcome Person Else false</h1>
        }
    }
};
export default ConditonalRenderingInClassCompo ;