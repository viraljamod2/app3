import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
    const inputref = useRef(null)

    function Update (){
        inputref.current.style.color ="red"
    }
  return (
    <div>
        <h1>UseRef</h1>

        <input type="text" ref={inputref}/>
        <button onClick={Update}>Update</button>
        
        
        </div>
  )
}

export default UseRef