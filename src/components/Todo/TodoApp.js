import { useEffect, useMemo, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoContext from "../../context/TodoContext";
import { v4 } from 'uuid'
import Preloader from "../Preloader/Preloader";
import TodoControlPanel from "./TodoControlPanel";



function TodoApp() {
	const [loading, setLoading] = useState(false);
	const [todos, setTodos] = useState(getTodosFromLocalStorage());
	const [filterStatus, setFilterStatus] = useState('all');

	useEffect(() => {
		// async function fetchData() {
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

	}, []);

	useEffect(() => {
		addTodosToLocalStorage(todos);
	}, [todos]);

	const modifiedTodos = useMemo(() => {
		if (filterStatus === 'all') {
			return todos;
		} else {
			return todos.filter(item => item.completed === filterStatus);
		}
	}, [todos, filterStatus])

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

	function changeStatus(status) {
		setFilterStatus(status);
	}

	return (
		<TodoContext.Provider value={{ addTodo, removeTodo, toggleTodo, changeStatus }}>
			<div className='app'>
				<div className='app__container'>

					<h1>To-Do List</h1>
					{
						loading ?
							<Preloader /> :
							<>
								<TodoForm />
								<TodoControlPanel status={filterStatus} />
								<TodoList todos={modifiedTodos} />
							</>
					}

				</div>
			</div>
		</TodoContext.Provider>
	)
}

export default TodoApp;