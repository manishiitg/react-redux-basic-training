//src/redux/reducers/todo.js

import { TODO_ACTIONS } from "../actions/todo"

const reducer = (todoList = [], action) => {    
    if (action.type === TODO_ACTIONS.ADD_TODO) {
        return [
            ...todoList,
            {
                "text": action.payload.text,
                "completed": action.payload.completed,
                "duedate": action.payload.duedate
            }
        ]
    }
    return todoList
}

export default reducer