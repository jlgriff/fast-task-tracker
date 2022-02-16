import React, {useState} from 'react';

import Button from '../../ui/button/Button';
import styles from './TaskInput.module.css';
import {PRIORITIES} from "../../../App";

const TaskInput = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredPriority, setEnteredPriority] = useState(null);

    const formSubmitHandler = event => {
        event.preventDefault();
        props.onAdd(enteredTitle, enteredDescription, enteredPriority);
    };

    return (
        <form className={styles.container} onSubmit={formSubmitHandler}>
            <div className={styles.formControl}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="The task's title" onChange={setEnteredTitle}/>
                </div>
                <div>
                    <label htmlFor="description">Description (optional)</label>
                    <textarea id="description" placeholder="An optional description"
                              onChange={setEnteredDescription}/>
                </div>
                <div>
                    <label htmlFor="priority">Priority</label>
                    <select id="priority" defaultValue={PRIORITIES['average']} onChange={setEnteredPriority}>
                        {Object.entries(PRIORITIES).map(([key, priority]) =>
                            <option key={key}>{priority}</option>)}
                    </select>
                </div>
            </div>
            <Button type="submit">Add</Button>
        </form>
    );
};

export default TaskInput;
