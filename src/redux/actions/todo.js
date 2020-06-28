//src/redux/actions/todo.js

const ADD_TODO = "add_todo"

export const TODO_ACTIONS = {
    ADD_TODO,
}

export function addTodoAction(text, completed, duedate) {
    return {
        type: ADD_TODO,
        payload: {
            text,
            completed,
            duedate
        }
    }
}