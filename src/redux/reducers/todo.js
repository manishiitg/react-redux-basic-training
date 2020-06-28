//src/redux/reducers/todo.js

import { TODO_ACTIONS } from "../actions/todo"

const reducer = (todoList = [], action) => {
    if (action.type === TODO_ACTIONS.ADD_TODO) {
        return [
            ...todoList,
            {
                "text": action.text,
                "completed": action.completed,
                "duedate": action.duedate
            }
        ]
    }
    return todoList
}

export default reducer