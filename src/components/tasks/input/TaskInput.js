import React, {useState} from 'react';

import Button from '../../ui/button/Button';
import styles from './TaskInput.module.css';

const PRIORITIES = {
    veryHigh: {text: "Very High", rank: 5},
    high: {text: "High", rank: 4},
    average: {text: "Average", rank: 3},
    low: {text: "Low", rank: 2},
    veryLow: {text: "Very Low", rank: 1}
}
const STARTING_PRIORITY = PRIORITIES['average']['text'];

const TaskInput = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredPriority, setEnteredPriority] = useState(STARTING_PRIORITY);

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredTitle.trim().length !== 0) {
            props.onAdd(enteredTitle, enteredDescription, enteredPriority, getRankFromPriority(enteredPriority));
            setEnteredTitle('');
            setEnteredDescription('');
            setEnteredPriority(STARTING_PRIORITY)
        }
    };

    const getRankFromPriority = priorityText => {
        const priority = Object.values(PRIORITIES)
            .find((entry) => entry['text'] === priorityText)
        return priority['rank'];
    }

    const getPriorityDropdownOptions = () => {
        return Object.values(PRIORITIES).map((entry) =>
            <option key={entry['rank']}>{entry['text']}</option>)
    }

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
                    <select value={enteredPriority} id="priority" className={styles.select}
                            onChange={(event) => setEnteredPriority(event.target.value)}>
                        {getPriorityDropdownOptions()}
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
