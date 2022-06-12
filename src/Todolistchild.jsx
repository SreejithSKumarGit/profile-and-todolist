import React from "react"
export default function Todolistchild({todos})
{
    
    return (
        <div  
        style={{
            textAlign:"center"
        }}>
        {  
            todos.map((item)=>
            (
               <div
               key={item.id}>
               <h3 style={item.status?{color:"green"}:{color:"red"}}>{item.title}</h3> 
               </div>
            ))
        }
        </div>
    )
}