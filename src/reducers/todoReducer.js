import { v4 } from 'uuid'

export default function todoAppReducer(state, action) {
	switch (action.type) {
		case 'add':
			const newTodos = [
				...state.todos,
				{
					id: v4(),
					title: action.payload,
					completed: false
				}
			];

			return {
				...state,
				todos: newTodos

			};

		case 'toggle':
			const updatedTodos = state.todos.map(todo => {
				if (todo.id === action.payload.id) {
					todo.completed = action.payload.value
				}
				return todo
			});

			return {
				...state,
				todos: updatedTodos
			}

		case 'remove':
			const filteredTodos = state.todos.filter(todo => todo.id !== action.payload);

			return {
				...state,
				todos: filteredTodos
			}

		case 'changeFilter':
			return {
				...state,
				filterValue: action.payload
			}
		default:
			return state;
	}
}