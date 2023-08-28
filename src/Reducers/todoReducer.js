// 

const initstate = {
    todos: [{ id: 1, title: 'Build a new project', tasks: 'Create a To-do App with React and Redux' }]
}

const todoReducer = (state = initstate, action) => {
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: [...state.todos, action.todos] // Concatenate the new todo to the todos array
        }
    }

    if (action.type === 'DELETE_TODO') {
        return {
        ...state,
         todos:state.todos.filter(todo => todo.id !== action.id)
        }
        
    }

    if (action.type === 'EDIT_TODO') {
        const updatedTodos = state.todos.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, title: action.title, tasks: action.tasks };
          }
          return todo;
        });
    
        return {
          ...state,
          todos: updatedTodos
        };
      }
    return state;
}

export default todoReducer;



