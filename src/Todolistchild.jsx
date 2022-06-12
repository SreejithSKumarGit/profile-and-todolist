import React from "react"
export default function Todolistchild({todos,getTodos})
{
    const [isChecked,setIsChecked]=React.useState(false);
    const toggleCheck=(id)=>
    {
        setIsChecked(!isChecked)
     const payload={
        status:isChecked
    }

    fetch(`http://localhost:8000/todos/${id}`,
    {
        method:"PATCH",
        body:JSON.stringify(payload),
        headers:{"Content-type":"Application/json"}
    });
    getTodos();
    }
    
    
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
               <h3 style={item.status?{color:"green",display:"inline"}:{color:"red",display:"inline"}}>{item.title}</h3> 
               <input 
               
               type="checkbox"
               checked={isChecked}
               onChange={()=>
            {   
                toggleCheck(item.id)
            }}
            
                />
               </div>
            ))
        }
        </div>
    )
}