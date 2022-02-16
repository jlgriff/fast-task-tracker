import React from 'react';

import Task from '../task/Task';
import styles from './TaskList.module.css';

const TaskList = props => {
    return (
        <ul className={styles.list}>
            {props.items.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    onDelete={props.onDelete}
                    onComplete={props.onComplete}
                    text={task.text}>
                </Task>
            ))}
        </ul>
    );
};

export default TaskList;
