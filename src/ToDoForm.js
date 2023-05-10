import { useState } from "react";


function ToDoForm({onAdd}){

    const [text, setText] = useState("")
    
    return(
        <form className="display" onSubmit={(e) => {
            e.preventDefault();
            if(text != ""){
                onAdd(text);
                setText("")
            }
        }}>
            <input type="text" placeholder="Type Yor Task..." value={text} onChange={(e) => {
                setText(e.target.value)
            }} className="to-do-header" />
            <button className="to-do-add">Add</button>
        </form>
    )
}

export default ToDoForm;