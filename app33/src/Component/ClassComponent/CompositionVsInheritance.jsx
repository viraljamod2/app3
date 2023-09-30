import React from "react";
import { Component } from "react";
import Childecomp from "./Childecomp"

class CompositionVsInheritance extends Component {
    render(){
        return(
            <>
            <h1> This is main Compositions Page</h1>
            <Childecomp data="Somthing">
            <h1>This Is Somathing Data </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat culpa necessitatibus nemo, veritatis dignissimos tempora similique cupiditate ut totam! Atque eum quibusdam harum cumque iste nisi libero facilis optio provident!</p>
            </Childecomp>
            
            </>
        )
    }
}

export default CompositionVsInheritance ;