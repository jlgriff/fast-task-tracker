import React, {useState} from 'react';

import Button from '../../ui/button/Button';
import styles from './TaskInput.module.css';
import {PRIORITIES} from "../../../App";

const TaskInput = props => {
    const STARTING_PRIORITY = PRIORITIES['average'];
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredPriority, setEnteredPriority] = useState(STARTING_PRIORITY);

    const formSubmitHandler = event => {
        event.preventDefault();
        props.onAdd(enteredTitle, enteredDescription, enteredPriority);
        setEnteredTitle('');
        setEnteredDescription('');
        setEnteredPriority(STARTING_PRIORITY)
    };

    return (
        <form className={styles.container} onSubmit={formSubmitHandler}>
            <div className={styles.formControl}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={enteredTitle} id="title" placeholder="The task's title"
                           className={styles.input}
                           onChange={(event) => setEnteredTitle(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">Description (optional)</label>
                    <textarea value={enteredDescription} id="description" placeholder="An optional description"
                              className={styles.textarea}
                              onChange={(event) => setEnteredDescription(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="priority">Priority</label>
                    <select value={STARTING_PRIORITY} id="priority" className={styles.select}
                            onChange={(event) => setEnteredPriority(event.target.value)}>
                        {Object.entries(PRIORITIES).map(([key, priority]) =>
                            <option key={key}>{priority}</option>)}
                    </select>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Button className={styles.button} type="submit">Add Task</Button>
            </div>
        </form>
    );
};

export default TaskInput;
