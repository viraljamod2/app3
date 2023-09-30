import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Function.css"
class FunctionalCompoMenu extends Component {
    render() {
        return (
            <>
            <div className="row font">
                <div className="col-6 offset-6">

                <ul>
                    <li><Link to="Clock">Clock</Link></li>
                    <li><Link to="FunctionComppp">FunctionComppp</Link></li>
                    <li><Link to="StateExampleFunctionalCompo">State</Link></li>
                    <li><Link to="UseEffect">UseEffect</Link></li>
                    <li><Link to="UseLayoutEffectExample">UseLayoutEffectExample</Link></li>
                    <li><Link to="Usememo">Usememo</Link></li>
                    <li><Link to="Useclallback">Useclallback</Link></li>
                    <li><Link to="APIFech">APIFech</Link></li>
                    <li><Link to="APIuser">APIuser</Link></li>
                    <li><Link to="Usecontextfirst">Usecontextfirst</Link></li>
                    <li><Link to="Custamhook">Custamhook</Link></li>
                    <li><Link to="Curdop">Curdop</Link></li>
                    <li><Link to="Apipost">Apipost</Link></li>
                    <li><Link to="UseReducer">UseReducer</Link></li>
                    <li><Link to="UseReducer">UseReducer</Link></li>
                    <li><Link to="UseRef">UseRef</Link></li>
                </ul>
                </div>
            </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default FunctionalCompoMenu;