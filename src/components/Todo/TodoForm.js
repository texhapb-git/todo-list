import { useState, useContext, useRef } from "react";
import TodoContext from "../../context/TodoContext";

function TodoForm() {
	const { dispatch } = useContext(TodoContext);

	const inputRef = useRef(null);

	const [value, setValue] = useState('');
	const [isNotValid, setIsNotValid] = useState(false);

	const placeholder = 'Type new task title';

	function ChangeValue(event) {
		setValue(inputRef.current.value);
		setIsNotValid(false);
	}

	function submitTodoForm(event) {
		event.preventDefault();
		setIsNotValid(false);

		const title = value.trim();

		if (title.length) {
			dispatch({
				type: 'add',
				payload: title
			});
			setValue('');
		} else {
			setIsNotValid(true);
		}

		inputRef.current.focus();
	}

	function removePlaceholder() {
		inputRef.current.placeholder = '';
	}

	function addPlaceholder() {
		inputRef.current.placeholder = placeholder;
		setIsNotValid(false);
	}


	return (
		<div className='add-form'>
			<form className='add-form__form' onSubmit={submitTodoForm}>
				<div className="add-form__input-block">
					<input
						ref={inputRef}
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