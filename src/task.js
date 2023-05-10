import TaskIntem from "./taskIntem";

function Task({todo, onChange, onDelet}){
    return(
        <div>
            {
                todo.map((task) => {
                    return (
                        <div className="lists-style" key={task.id}>
                            <TaskIntem 
                                key={task.id} 
                                task={task} 
                                onChange={onChange}
                                onDelet={onDelet}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Task;