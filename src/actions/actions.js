var ids = 0
export function addTodo(todo) {
    return {
        type: "ADD_TODO",
        payload: {
            todo: {
                title: todo.title,
                id: ids++
            }
        }
    }
}

export function removeTodo(id) {
    return {
        type: "REMOVE_TODO",
        payload: { id: id }
    }
}



