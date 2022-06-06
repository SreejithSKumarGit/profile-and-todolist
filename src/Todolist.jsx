import Todolistchild from "./Todolistchild";
import React from "react";

export default function Todolist()
{  const data=[
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false }
  ];

    return (
        <>
        {data.map((item)=> 
        ( <Todolistchild {...item} key={item.id}/> )
        )}
        </>
    );
}