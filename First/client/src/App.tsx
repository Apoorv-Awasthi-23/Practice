
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
interface Task {
  name: string;
  completed: boolean;
}


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  function addTask() {

    if (newTask === "") {
      alert("Task name cannot be empty");
      return;
    }

    const x = [...tasks, { name: newTask, completed: false }];
    setTasks(x);
    setNewTask("");
  }

  function deleteTask(task: Task) {
    
    const x = tasks.filter((t) => t !== task);
    setTasks(x);
  }
  return (
    <div className="bg-red-100 h-[100vh] flex flex-col items-center justify-center">
      <div className="">
        <img
          src="https://w7.pngwing.com/pngs/972/511/png-transparent-todo-sketch-note-list-tasks-thumbnail.png"
          alt="App logo"
        />
      </div>
      <div className="">
        <h1 className="text-blue-950 text-3xl p-4">To Do List</h1>
      </div>
      <div>

        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border-2 border-blue-500 m-3 p-3 rounded-md text-lg"
        />
        <button onClick={addTask}  className="bg-green-400 m-3 p-3 rounded-md text-lg"> Add New Task</button>
      </div>

      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center">
              <input type="checkbox" />
              <span className="text-lg ml-3">{task.name}</span>
              <button  className="ml-4" onClick={()=>deleteTask(task)}>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
      </div>
  );
}

export default App
