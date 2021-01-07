import { combineReducers } from 'redux'
const initialState = {
    todoList: [],

}

function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return { todoList: [...state.todoList, action.payload.todo] }
        case 'REMOVE_TODO':
            return { todoList: [...state.todoList.filter((e) => e.id !== action.payload.id)] }
        case 'EDIT_TODO':
            return 

        default:
            return initialState;
    }
}

export default combineReducers({ todosReducer })