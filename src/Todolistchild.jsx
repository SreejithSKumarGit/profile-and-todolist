import React from "react"
export default function Todolistchild(props,key)
{
    
    return (
        <>
        <h3 style={props.status?{color:"green"}:{color:"red"}}>{props.title}</h3>
        </>
    )
}