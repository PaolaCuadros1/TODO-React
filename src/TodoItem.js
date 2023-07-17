function TodoItem(props) {
    let completed = props.completed ? 'V' : 'F'
    return (
        <li key={props}>
            <span> {completed} </span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };