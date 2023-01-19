import { useContext } from "react";
import TodoContext from "../../context/TodoContext";

function TodoFilter({ status }) {
	const { dispatch } = useContext(TodoContext);

	const buttons = [
		{
			id: 0,
			title: 'All',
			status: 'all'
		},
		{
			id: 1,
			title: 'Active',
			status: false
		},
		{
			id: 2,
			title: 'Done',
			status: true
		}
	];

	return (
		<div className="todo-filter">
			{buttons.map(button => {
				const cls = button.status === status ? 'todo-filter__button--active' : '';
				return <button className={`todo-filter__button ${cls}`} key={button.id} onClick={() => dispatch({ type: 'changeFilter', payload: button.status })}>{button.title}</button>
			})}
		</div>
	);
}

export default TodoFilter;