import React, { useEffect, createContext } from 'react'

import { connect } from 'react-redux'

import { useDispatch, useSelector } from 'react-redux'

import { addTodoAction } from "./redux/actions/todo"

import { createSelector } from 'reselect'

const getTodoList = createSelector(
    state => state,
    todos => todos.reverse()
)

function Todo(props) {
    const todoList = useSelector(getTodoList)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("re-render")
    })

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {
                    todoList.map((ele, idx) => {
                        return <li key={idx}>{ele.text}</li>
                    })
                }
            </ul>

            <button onClick={() => {
                dispatch(addTodoAction("Todo " + todoList.length, false, new Date()))
            }}>Add Random Todo</button>
        </div>
    )
}

export default Todo