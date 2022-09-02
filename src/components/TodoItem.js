import Icons from "../Icons";

function TodoItem({todo}) {
	const itemClasses = ['todo__element'];

	if (todo.completed) {
		itemClasses.push('done');
	}

	return (
		<li className={itemClasses.join(' ')}>
			<div className='todo__content'>
				<input type='checkbox'
					checked={todo.completed}
					className='todo__checkbox'
				/>
				<span className='todo__title'>{todo.title}</span>
			</div>

			<button className='todo__remove'>
				<Icons name='bin' className='todo__remove-icon' />
			</button>
		</li>
	)
}

export default TodoItem;