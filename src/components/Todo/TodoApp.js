import { useEffect, useMemo, useReducer } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoContext from "../../context/TodoContext";
import TodoControlPanel from "./TodoControlPanel";
import todoAppReducer from "../../reducers/todoReducer";

import { useLocalStorage } from "../../hooks/useLocalStorage";

function TodoApp() {
	const [todos, setTodos] = useLocalStorage([], 'todos');
	const [state, dispatch] = useReducer(todoAppReducer, { todos: todos, filterValue: 'all' });

	useEffect(() => {
		setTodos(state.todos);
	}, [state.todos, setTodos]);


	const modifiedTodos = useMemo(() => {
		if (state.filterValue === 'all') {
			return state.todos;
		} else {
			return state.todos.filter(item => item.completed === state.filterValue);
		}
	}, [state.todos, state.filterValue]);


	return (
		<TodoContext.Provider value={{ dispatch }}>
			<div className='app'>
				<div className='app__container'>
					<h1>To-Do List</h1>

					<TodoForm />
					<TodoControlPanel status={state.filterValue} />
					<TodoList todos={modifiedTodos} />
				</div>
			</div>
		</TodoContext.Provider>
	)
}

export default TodoApp;