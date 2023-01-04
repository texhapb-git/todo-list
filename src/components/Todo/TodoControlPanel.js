import TodoFilter from "./TodoFilter";

function TodoControlPanel({ status }) {
	return (
		<div className="todo__controls">
			<TodoFilter status={status} />
		</div>
	);
}

export default TodoControlPanel;