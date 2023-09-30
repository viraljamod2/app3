import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Headerfile from './ComanComponent/HeaderFile';
import "./Example.css"

const Examples = () => {
    return (
        <>
            <Headerfile />
            <div className="container">
                <div className="row my-3">
                    <div className="col-6 ">
                        <Link to="classcomponent" className=" exe" >Class Component</Link>
                    </div>
                    <div className="col-6">
                        <Link to="functionalcomponent" className=" exe"  >Functional Component</Link>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Examples;