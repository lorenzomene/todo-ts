import { useState } from 'react';

export default function App() {
  return (<Board></Board>);
}

function Board ({}) {

  const [newTaskName, setNewTaskName] = useState("");
  const [tasks, setTasks] = useState<{ name: string, completed: boolean }[]>([]);

  function handleAdd(e: any) {
    e.preventDefault();
  
    setTasks((currentTasks) => [
      ...currentTasks,
      { 
        name: newTaskName,
        completed: false
      },
    ]);

    setNewTaskName("");
  
  }

  function toggleStatus(name: string, status: boolean) {
    console.log("Handle Completed Change");
    setTasks((currentTasks) => {
      const newTasks = [...currentTasks];
      const taskIndex = newTasks.findIndex(task => task.name === name);
      newTasks[taskIndex].completed = status;
      return newTasks;
    });
  }

  return (
    <>
      <form onSubmit={handleAdd}>
        <label htmlFor="taskName">Task Name</label>
        <input value={newTaskName} onChange={e => setNewTaskName(e.target.value)} type="text" id="task"/>
        <button type="submit">Add</button>
      </form>
      <h1>ToDo Board</h1>
      <div className="board">
        <ul>
          <li>
            ToDo
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  <input type="checkbox" checked={task.completed} onChange={e => toggleStatus(task.name, e.target.checked)}/>
                  {task.name}
                  <button type="button">Delete</button>
                </li>
              ))}
            </ul>
          </li>
          <li>In Progress</li>
          <li>Done</li>
        </ul>
      </div>
    </>
  );
}