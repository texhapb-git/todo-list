import { useState, useContext } from "react";
import TodoContext from "../../context/TodoContext";

function TodoForm() {
	const { addTodo } = useContext(TodoContext);
	const [value, setValue] = useState('');
	const [isNotValid, setIsNotValid] = useState(false);

	const placeholder = 'Type new task title';

	function ChangeValue(event) {
		setValue(event.target.value);
		setIsNotValid(false);
	}

	function submitTodoForm(event) {
		event.preventDefault();
		setIsNotValid(false);

		const title = value.trim();

		if (title.length) {
			addTodo(title);
			setValue('');
		} else {
			setIsNotValid(true);
		}

		event.target[0].focus();
	}

	function removePlaceholder(event) {
		event.target.placeholder = '';
	}

	function addPlaceholder(event) {
		event.target.placeholder = placeholder;
	}


	return (
		<div className='add-form'>
			<form className='add-form__form' onSubmit={submitTodoForm}>
				<div className="add-form__input-block">
					<input
						type='text'
						autoComplete="off"
						name='new-task-name'
						className='add-form__input'
						placeholder={placeholder}
						value={value}
						onChange={ChangeValue}
						onFocus={removePlaceholder}
						onBlur={addPlaceholder}
					/>
					<div className="add-form__input-error" data-show={isNotValid}>Type task name</div>
				</div>

				<button type='submit' className='add-form__submit'>Add</button>
			</form>
		</div>
	)
}

export default TodoForm;