import React from 'react';

const TaskText = props => {
    return (
        <React.Fragment>
            <div>{props.title}</div>
            <div>{props.description}</div>
        </React.Fragment>
    );
}

export default TaskText;