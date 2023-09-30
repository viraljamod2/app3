import React from "react";
import { Component } from "react";
import Clickcounter from "./Clickcounter";
import Mouseover from "./Mouseover";
 
class HOC extends Component {

    render(){
        return(
            <>
            <h1>
                HOC PAGE
            </h1>
            <Clickcounter/>
            <br />
            <br />
            <Mouseover/>
            </>
        )
    }
}
export default HOC ;