import React from 'react';
import CheckmarkIcon from '../../ui/icon/checkmark.ico'
import TrashcanIcon from '../../ui/icon/trashcan.ico'

import styles from './Task.module.css';
import Card from "../../ui/card/Card";
import TaskText from "./TaskText";

const Task = props => {
    return (
        <li>
            <Card>
                <div className={styles.task}>
                    <img className={styles.icon} src={CheckmarkIcon} alt="checkmark icon"
                         onClick={() => props.onComplete(props.id)}/>
                    <TaskText title={props.title} description={props.description}/>
                    <div className={styles.push}/>
                    <img className={styles.icon} src={TrashcanIcon} alt="trashcan icon"
                         onClick={() => props.onDelete(props.id)}/>
                </div>
            </Card>
        </li>
    );
};

export default Task;
