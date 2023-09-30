import React, { Component } from 'react';

class JSXClassCompo extends Component {
    render() {
        const user = {
            firstName: 'Parul',
            lastName: ' Jamod'
        };
        let something = "JSXClassCompo Display";
        var Heading = {something};
        return (
            <>
            <div>
                <h1>{something}</h1>
                <h1>Full Name : {user.firstName}{user.lastName}</h1>

            </div>
            
            </>
        );
    }
};

export default JSXClassCompo;