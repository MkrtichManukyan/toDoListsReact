function TaskIntem({task, onChange, onDelet}){
    return (
        <div className='task'>
            <label onClick={(btn) => {
                
            }}>
                <input type="checkbox" checked={task.isCompleted} onChange={(e) => {
                    onChange(
                        {
                            ...task,
                            isCompleted: e.target.checked
                        }
                    )
                }} /> 
                <p>{task.description}</p>
            </label>
            <button onClick={() => {
                onDelet(task)
            }}>X</button>
        </div>
    )
}

export default TaskIntem;