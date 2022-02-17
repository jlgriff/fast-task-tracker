import React, {useState, useEffect} from 'react';

import TaskList from './components/tasks/tasklist/TaskList';
import TaskInput from './components/tasks/input/TaskInput';
import './App.module.css';

export const PRIORITIES = {veryHigh: "Very High", high: "High", average: "Average", low: "Low", veryLow: "Very Low"}
export const STORAGE_TASKS_KEY = "tasks";

const App = () => {

    const getValueFromStorage = (key) => {
        const value = window.sessionStorage.getItem(key);
        return value === null ? [] : JSON.parse(value);
    }

    const saveValueInStorage = (key, value) => window.sessionStorage.setItem(key, value);

    const [tasks, setTasks] = useState(getValueFromStorage(STORAGE_TASKS_KEY))

    useEffect(() => {
        saveValueInStorage(STORAGE_TASKS_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const sortTasks = tasks => {
        tasks.sort((a, b) => a.completed === b.completed
            ? b.timestamp - a.timestamp
            : a.completed > b.completed ? 1 : -1
        );
    }

    const addTaskHandler = (title, description, priority) => {
        const updatedTasks = [...tasks].concat(
            {
                title: title,
                description: description,
                priority: priority,
                completed: false,
                timestamp: Date.now(),
                id: Math.random().toString()
            }
        );
        sortTasks(updatedTasks);
        setTasks(updatedTasks);
    };

    const deleteTaskHandler = taskId => {
        setTasks(tasks => tasks.filter(task => task.id !== taskId))
    };

    const completeTaskHandler = taskId => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {...task, completed: true};
            }
            return task;
        });
        sortTasks(updatedTasks)
        setTasks(updatedTasks)
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
}

export default App;
