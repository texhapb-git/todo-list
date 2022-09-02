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
				<p className="todo__empty">There is nothing to do!</p>
		}
		</div>
	)
}

export default TodoList;