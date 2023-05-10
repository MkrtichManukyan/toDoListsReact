

function ToDoFooter({todos, onClearArr}){

    const complitidSize = todos.filter((todo) => todo.isCompleted).length;

    return(
        <div className="task footer">
            <div>{complitidSize}/{todos.length} Completed</div>
            <button onClick={onClearArr}>Clear Completed</button>
        </div>
    )
}

export default ToDoFooter;