import Todolistchild from "./Todolistchild";
import React from "react";
import TodoInput from "./Todoinput";
export default function Todos()
{  
    const[todos,setTodos]=React.useState([]);
    const getTodos=()=>
    {  
        fetch(`http://localhost:8000/todos`)
        .then((res)=>res.json())
        .then((res)=>
        {
            setTodos(res);
            
        })
        .catch((error)=>
        {
            console.log(error);
        })
    }
    React.useEffect(()=>{
        getTodos();
    },[]);

    return (
        <>
        <TodoInput getTodos={getTodos}/>
        <Todolistchild todos={todos} />
        </>
    );
}