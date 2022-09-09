import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoContext from "../../context/TodoContext";
import { v4 } from 'uuid'
import Preloader from "../Preloader/Preloader";


function TodoApp() {
	const [loading, setLoading] = useState(false);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		console.log('use1');
		// async function fetchData() {
		// 	console.log('1')
		// 	setLoading(true);

		// 	const promise = new Promise((resolve, reject) => {
		// 		setTimeout(resolve, 1500)
		// 	})

		// 	await promise.then(() => {
		// 		console.log('promise');
		// 		setTodos(getTodosFromLocalStorage());
		// 		setLoading(false);
		// 	});
		// }

		// fetchData();

		setLoading(true);
		setTodos(getTodosFromLocalStorage());
		setLoading(false);
	}, []);

	useEffect(() => {
		console.log('use2')
		addTodosToLocalStorage(todos);
	}, [todos]);

	function getTodosFromLocalStorage() {
		return JSON.parse(localStorage.getItem('todos')) || [];
	}

	function addTodosToLocalStorage(data) {
		localStorage.setItem('todos', JSON.stringify(data));
	}

	function addTodo(title) {
		const newTodo = {
			id: v4(),
			title: title,
			completed: false
		};
		setTodos([...todos, newTodo]);
	}

	function removeTodo(id) {
		setTodos(todos.filter(todo => todo.id !== id));
	}

	function toggleTodo(id) {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		}))

	}

	return (
		<TodoContext.Provider value={{ addTodo, removeTodo, toggleTodo }}>
			<div className='app'>
				<div className='app__container'>

					<h1>To-Do List</h1>
					{
						loading ?
							<Preloader /> :
							<>
								<TodoForm />
								<TodoList todos={todos} />
							</>

					}

				</div>
			</div>
		</TodoContext.Provider>
	)
}

export default TodoApp;