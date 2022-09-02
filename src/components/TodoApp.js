import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


function TodoApp() {

	const [todos, setTodos] = useState(
		[
			{id: 1, title: 'Read a book', completed: false},
			{id: 2, title: 'Buy computer', completed: true},
			{id: 3, title: 'Run 5k', completed: false},
			{id: 4, title: 'Wash up dishes', completed: false},
		]
	)

	return (
		<div className='app'>
			<div className='container'>

				<h1>To-Do List</h1>
				<TodoForm />
				<TodoList todos={todos} />

			</div>
		</div>
	)
}

export default TodoApp;