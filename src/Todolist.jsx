import Todolistchild from "./Todolistchild";
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
        {
            return(
            <>
            <Todolistchild {...item} key={item.id}/>
            </>
            )
        })}
        </>
    );
}