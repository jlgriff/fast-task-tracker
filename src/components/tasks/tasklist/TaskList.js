import React from 'react';

import Task from '../task/Task';
import styles from './TaskList.module.css';

const TaskList = props => {
    return (
        <ul className={styles.list}>
            {props.tasks.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    onDelete={props.onDelete}
                    onComplete={props.onComplete}
                    title={task.title}
                    description={task.description}
                    priority={task.priority}
                    completed={task.completed}
                    timestamp={task.timestamp}>
                </Task>
            ))}
        </ul>
    );
};

export default TaskList;
