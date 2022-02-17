import React from 'react';
import styles from './TaskText.module.css'

const TaskText = props => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.description}>{props.description}</div>
        </div>
    );
}

export default TaskText;