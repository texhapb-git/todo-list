import { useContext, useState } from "react";
import Icons from "../Icons/Icons";
import TodoContext from "../../context/TodoContext";


function TodoItem({ todo }) {
	const { dispatch } = useContext(TodoContext);
	const [removing, setRemoving] = useState(false);

	function toggleRemovePanel() {
		setRemoving(prev => !prev);
	}

	const itemClasses = ['todo__element'];

	if (todo.completed) {
		itemClasses.push('todo__element--done');
	}

	const handleChange = (id, value) => {
		dispatch({ type: 'toggle', payload: { id, value } });
	}

	return (
		<li className={itemClasses.join(' ')}>

			<label className="todo__label">

				<input
					type='checkbox'
					checked={todo.completed}
					className='todo__checkbox'
					onChange={() => handleChange(todo.id, !todo.completed)}
				/>

				<span className="todo__fake-checkbox">
					<Icons name='check-empty' className='todo__check-empty' />
					<Icons name='check-checked' className='todo__check-checked' />
				</span>

				<span className='todo__title'>{todo.title}</span>

			</label>

			<button className='todo__bin' data-show={removing} onClick={toggleRemovePanel}>
				<Icons name='bin' className='todo__bin-icon' />
			</button>

			<div className="todo__remove-shadow" data-show={removing}></div>

			<div className="todo__remove" data-show={removing}>
				<button onClick={() => dispatch({ type: 'remove', payload: todo.id })}>
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