import React, {useState, useEffect} from 'react';

import TaskList from './components/tasks/tasklist/TaskList';
import TaskInput from './components/tasks/input/TaskInput';
import './App.module.css';

export const PRIORITIES = {veryLow: "Very Low", low: "Low", average: "Average", high: "High", veryHigh: "Very High"}
export const STORAGE_TASKS_KEY = "tasks";

const App = () => {

    const getValueFromStorage = (key) => {
        const value = window.sessionStorage.getItem(key);
        if (value === null) {
            return [];
        } else {
            return JSON.parse(value);
        }
    }

    const saveValueInStorage = (key, value) => {
        window.sessionStorage.setItem(key, value);
    }

    const [tasks, setTasks] = useState(getValueFromStorage(STORAGE_TASKS_KEY))

    useEffect(() => {
        saveValueInStorage(STORAGE_TASKS_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const addTaskHandler = (title, description, priority) => {
        const updatedTasks = [...tasks].concat(
            {
                title: title,
                description: description,
                priority: priority,
                id: Math.random().toString()
            }
        );
        setTasks(updatedTasks);
    };

    const deleteTaskHandler = taskId => {
        setTasks(tasks => tasks.filter(task => task.id !== taskId))
    };

    const completeTaskHandler = taskId => {
        setTasks(tasks => tasks.filter(task => task.id !== taskId))
    };

    return (
        <div>
            <section id="input">
                <TaskInput onAdd={addTaskHandler}/>
            </section>
            <section id="tasks">
                <TaskList tasks={tasks} onDelete={deleteTaskHandler} onComplete={completeTaskHandler}/>
            </section>
        </div>
    );
};

export default App;
