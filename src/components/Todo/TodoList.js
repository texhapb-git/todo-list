import TodoItem from "./TodoItem";

function TodoList({todos}) {
	return (
		<div className='todo'>
		{
			todos.length ?
				<ul className='todo__list'>
					{ todos.map(todo => {
						return <TodoItem todo={todo} key={todo.id} />
					})}
				</ul>
				:
				<p className="todo__empty">There's nothing to do! You're a happy person!</p>
		}
		</div>
	)
}

export default TodoList;