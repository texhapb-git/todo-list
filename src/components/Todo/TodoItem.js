import { useContext, useState } from "react";
import Icons from "../Icons/Icons";
import TodoContext from "../../context/TodoContext";


function TodoItem({ todo }) {
	const { removeTodo, toggleTodo } = useContext(TodoContext);
	const [removing, setRemoving] = useState(false);

	function toggleRemovePanel() {
		setRemoving(prev => !prev);
	}


	const itemClasses = ['todo__element'];

	if (todo.completed) {
		itemClasses.push('todo__element--done');
	}

	return (
		<li className={itemClasses.join(' ')}>
			<div className='todo__content' onClick={toggleTodo.bind(null, todo.id)}>
				<label className="todo__label">

					<input
						type='checkbox'
						checked={todo.completed}
						className='todo__checkbox'
						onChange={toggleTodo.bind(null, todo.id)}
					/>
					<span className="todo__fake-checkbox">
						<Icons name='check-empty' className='todo__check-empty' />
						<Icons name='check-checked' className='todo__check-checked' />
					</span>

				</label>

				<span className='todo__title'>{todo.title}</span>
			</div>

			<button className='todo__bin' data-show={removing} onClick={toggleRemovePanel}>
				<Icons name='bin' className='todo__bin-icon' />
			</button>

			<div className="todo__remove-shadow" data-show={removing}></div>

			<div className="todo__remove" data-show={removing}>
				<button onClick={removeTodo.bind(null, todo.id)}>
					<Icons name='check' className='todo__remove-check' />
				</button>

				<button onClick={toggleRemovePanel}>
					<Icons name='cross' className='todo__remove-cross' />
				</button>

			</div>
		</li>
	)
}

export default TodoItem;