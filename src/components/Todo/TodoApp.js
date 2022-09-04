import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoContext from "../../context/TodoContext";
import { v4 } from 'uuid'
import Preloader from "../Preloader/Preloader";


function TodoApp() {
	const [loading, setLoading] = useState(false);
	const [updateTodos, setUpdateTodos] = useState(false);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setTodos(getTodosFromLocalStorage());
			setLoading(false);
		}, 1500);

	}, []);

	useEffect(() => {
		if (updateTodos) {
			addTodosToLocalStorage(todos);
			setUpdateTodos(false);
		}
	}, [todos, updateTodos]);

	function getTodosFromLocalStorage() {
		return JSON.parse(localStorage.getItem('todos'));
	}

	function addTodosToLocalStorage(todos) {
		//console.log('addStorageTodos', todos);
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	function addTodo(title) {
		const newTodo = {
			id: v4(),
			title: title,
			completed: false
		};
		setTodos([...todos, newTodo]);
		setUpdateTodos(true);
	}

	function removeTodo(id) {
		setTodos(todos.filter(todo => todo.id !== id));
		setUpdateTodos(true);
	}

	function toggleTodo(id) {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		}))

		setUpdateTodos(true);
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