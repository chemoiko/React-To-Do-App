import React, { useState } from "react"


function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

    }

    function deleteTask(index){
        
    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }
    return (
    <div className="to-do-list">

        <h1>To-Do-List</h1>

        <div>
            <input
                type="text"
                placeholder="Enter a task.."
                value={newTask}
                onChange={handleInputChange}/>
            <button 
                className="addButton"
                onClick={addTask}> Add
            </button>
        </div>

        <ol>
        {tasks.map((task, index) =>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button"
                onclick={() => deleteTask(index)}>
                Delete
                </button>
                <button className="move-button"
                onclick={() => moveTaskUp(index)}>
                👆
                </button>
                <button className="move-button"
                onclick={() => moveTaskDown(index)}>
                👇
                </button>
            </li>
            
        )}
        </ol>

    </div>
    );
        }
export default ToDoList