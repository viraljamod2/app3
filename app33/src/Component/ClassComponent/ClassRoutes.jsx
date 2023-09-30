import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import ClassCompoMenu from './ClassCompoMenu';
import Intro from './Intro';
import JSXClassCompo from './JSXClassCompo';
import Propsinclasscompo from './Propsinclasscompo';
import StateInClassCompo from './StateInClassCompo';
import ControlledCompoinClassCompo from './ControlledCompoInClassCompo';
import ConditonalRenderingInClassCompo from './ConditonalRenderingInClassCompo';
import Listandkeys from './Listandkeys';
import UncontrollCompo from './UncontrollCompo';
import CompositionVsInheritance from './CompositionVsInheritance';
import Clickcounter from './Clickcounter';
import Mouseover from './Mouseover';
import HOC from './HOC';
import Mainfile from './Mainfile';



class ClassRoutes extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="Intro" element={<Intro/>} />
                        <Route path="JSXClassCompo" element={<JSXClassCompo/>} />
                        <Route path="Propsinclasscompo" element={<Propsinclasscompo/>} />
                        <Route path="StateInClassCompo" element={<StateInClassCompo/>} />
                        <Route path="ControlledCompoinClassCompo" element={<ControlledCompoinClassCompo/>} />
                        <Route path="ConditonalRenderingInClassCompo" element={<ConditonalRenderingInClassCompo/>} />
                        <Route path="Listandkeys" element={<Listandkeys/>} />
                        <Route path="UncontrollCompo" element={<UncontrollCompo/>} />
                        <Route path="CompositionVsInheritance" element={<CompositionVsInheritance/>} />
                        <Route path="Clickcounter" element={<Clickcounter/>} />
                        <Route path="Mouseover" element={<Mouseover/>} />
                        <Route path="HOC" element={<HOC/>} />
                        <Route path="Mainfile" element={<Mainfile/>} />
                   
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassRoutes;