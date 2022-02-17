import React from 'react';
import GreenCheckIcon from '../../ui/icon/green-check.ico'
import GrayCheckIcon from '../../ui/icon/gray-check.ico'
import RedTrashIcon from '../../ui/icon/red-trashcan.ico'

import styles from './Task.module.css';
import Card from "../../ui/card/Card";
import TaskText from "./TaskText";

const Task = props => {

    const completed = props.completed;

    return (
        <li>
            <Card>
                <div className={`${styles.task} ${completed ? styles.completed : ''}`}>
                    {completed
                        ? <img src={GrayCheckIcon}
                               alt="grayed-out checkmark icon"/>
                        : <img className={styles.activeIcon}
                               src={GreenCheckIcon}
                               alt="checkmark icon"
                               onClick={() => props.onComplete(props.id)}/>}
                    <TaskText title={props.title} description={props.description}/>
                    <div className={`${styles.push} ${styles.priority}`}>{props.priority}</div>
                    <img className={styles.activeIcon}
                         src={RedTrashIcon}
                         alt="trashcan icon"
                         onClick={() => props.onDelete(props.id)}/>
                </div>
            </Card>
        </li>
    );
}

export default Task;
