import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import FunctionalCompoMenu from './FunctionalCompoMenu';
import Clock from './Clock';
import FunctionComppp from './FunctionComppp';
import StateExampleFunctionalCompo from './StateExampleFunctionalCompo';
import UseEffect from './UseEffect';
import UseLayoutEffectExample from './UseLayoutEffectExample';
import Usememo from './Usememo';
import Useclallback from './Usecallback';
import APIFech from './APIFech';
import APIuser from './APIuser';
import Usecontextfirst from './Usecontextfirst';
import Custamhook from './Custamhook';
import Curdop from './Curdop';
import Apipost from './Apipost';
import UseReducer from './UseReducer';
import UseRef from './UseRef';


class FunctionalRoute  extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<FunctionalCompoMenu />} >
                        <Route path="Clock" element={<Clock />} />
                        <Route path="FunctionComppp" element={<FunctionComppp />} />
                        <Route path="StateExampleFunctionalCompo" element={<StateExampleFunctionalCompo />} />
                        <Route path="UseEffect" element={<UseEffect />} />
                        <Route path="UseLayoutEffectExample" element={<UseLayoutEffectExample />} />
                        <Route path="Usememo" element={<Usememo />} />
                        <Route path="Useclallback" element={<Useclallback />} />
                        <Route path="APIFech" element={<APIFech />} />
                        <Route path="APIuser" element={<APIuser />} />
                        <Route path="Usecontextfirst" element={<Usecontextfirst />} />
                        <Route path="Custamhook" element={<Custamhook />} />
                        <Route path="Curdop" element={<Curdop />} />
                        <Route path="Apipost" element={<Apipost />} />
                        <Route path="UseReducer" element={<UseReducer />} />
                        <Route path="UseRef" element={<UseRef />} />
                   
                    </Route>
                </Routes>
            </>
        );
    }
}

export default FunctionalRoute;