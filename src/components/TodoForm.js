import { useState } from "react";

function TodoForm() {

	const [value, setValue] = useState('')

	function ChangeValue(event) {
		setValue(event.target.value)
	}

	function submitTodoForm(event) {
		event.preventDefault();

		if (value.trim()) {
			createTodo(value);
			setValue('');
		}
	}

	function createTodo(text) {

	}


	return (
		<div className='add-form-block'>
			<form className='add-form' onSubmit={submitTodoForm}>
				<input
					type='text'
					name='new-task-name'
					className='add-form__input'
					placeholder="Add new task"
					value={value}
					onChange={ChangeValue}
				/>
				<button type='submit' className='add-form__submit'>Add</button>
			</form>
		</div>
	)
}

export default TodoForm;