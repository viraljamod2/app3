import React,{Component} from 'react' ;

class Student extends Component {
    render(){
        return( 
            <>

            <h1>{this.props.name}This Is My Student</h1>
            <h1>{this.props.email}</h1>
            <h1>{this.props.phone}</h1>

            </>
        )
    }
}

export default Student;
