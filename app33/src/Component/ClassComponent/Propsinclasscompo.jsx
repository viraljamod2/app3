import React, {Component} from 'react';
import Student from './Student';
import CompoForCard from './CompoForCard';

class Propsinclasscompo extends Component {
    render(){
        return(
            <>
            <Student name="My Name is Khan" email="viraljamod0@gmail.com" phone="989820420420" />
            <CompoForCard src="https://picsum.photos/id/237/200/300" />
            </>
        )
    }
};

export default Propsinclasscompo ; 


