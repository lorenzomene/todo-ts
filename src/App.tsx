import { useState } from 'react';

export default function App() {
  return (<Board></Board>);
}

function Board ({}) {

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<{ name: string }[]>([]);

  function handleAdd(e: any) {
    e.preventDefault();
  
    setTasks((currentTasks) => [
      ...currentTasks,
      { name: newTask },
    ]);
  
  }

  return (
    <>
      <form onSubmit={handleAdd}>
        <label htmlFor="taskName">Task Name</label>
        <input value={newTask} onChange={e => setNewTask(e.target.value)} type="text" id="task"/>
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
                  <input type="checkbox" />
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