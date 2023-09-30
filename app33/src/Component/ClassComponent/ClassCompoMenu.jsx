import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Classcompo.css"
 

  
class ClassCompoMenu extends Component {
    render() {
        return (
            <>
            <div className='font'>
                <ul>
                    <li><Link to="Intro">Class Intro</Link></li>
                    <li><Link to="JSXClassCompo">JSX</Link></li>
                    <li><Link to="Propsinclasscompo">Props</Link></li>
                    <li><Link to="StateInClassCompo">State</Link></li>
                    <li><Link to="ConditonalRenderingInClassCompo">Condition Rendring</Link></li>
                    <li><Link to="Listandkeys">Listandkeys</Link></li>
                    <li><Link to="UncontrollCompo">UncontrollCompo</Link></li>
                    <li><Link to="ControlledCompoinClassCompo">ControlledCompoinClassComp</Link></li>
                    <li><Link to="CompositionVsInheritance">CompositionVsInheritance</Link></li>
                    <li><Link to="Clickcounter">Clickcounter</Link></li>
                    <li><Link to="Mouseover">Mouseover</Link></li>
                    <li><Link to="HOC">HOC</Link></li>
                    <li><Link to="Mainfile">Mainfile</Link></li>
                   </ul>
                   </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;