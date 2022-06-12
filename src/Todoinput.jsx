import React from "react";

function TodoInput({getTodos})
{
    const [input,setInput]=React.useState();
    const [isChecked,setIsChecked]=React.useState(false);
    const setTodo=()=>
    {
        const payload={
            title:input,
            status:isChecked
        }

        fetch(`http://localhost:8000/todos`,
        {
            method:"POST",
            body:JSON.stringify(payload),
            headers:{"Content-type":"Application/json"}
        });
        getTodos();
        setInput("");
        setIsChecked(false);
    }
    return (
        
        <div
        style={{
            textAlign:"center"
        }}>
        <h1>Add TODOs</h1>
        <input 
        type="text"
        value={input}
        onChange={(event)=>(
            
            setInput(event.target.value))} />
       
        <button onClick={setTodo}>Save</button>    
      </div>
        
    );
}
export default TodoInput;