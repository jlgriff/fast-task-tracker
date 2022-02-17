import React, {useState, useEffect} from 'react';

import TaskList from './components/tasks/tasklist/TaskList';
import TaskInput from './components/tasks/input/TaskInput';
import './App.module.css';

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
        tasks.sort((a, b) => {
            if (a.completed !== b.completed) {
                return a.completed > b.completed ? 1 : -1
            }
            if (a.rank !== b.rank) {
                return a.rank < b.rank ? 1 : -1
            }
            return a.timestamp < b.timestamp ? 1 : -1
        });
    }

    const addTaskHandler = (title, description, priority, rank) => {
        const updatedTasks = [...tasks].concat(
            {
                title: title,
                description: description,
                priority: priority,
                rank: rank,
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
