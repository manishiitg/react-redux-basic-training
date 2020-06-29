import React, { useEffect, createContext } from 'react'

import { connect } from 'react-redux'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { addTodoAction } from "./redux/actions/todo"

import { createSelector } from 'reselect'

import { callAPI } from "./redux/actions/api"


const getTodoList = createSelector(
    state => state.todo,
    todos => todos.reverse()
)

const getAPIData = state => state.api

function Todo(props) {
    const todoList = useSelector(getTodoList, shallowEqual)
    const dispatch = useDispatch()
    const apiData = useSelector(getAPIData)

    useEffect(() => {
        console.log("re-render")
    })

    return (
        <div>
            {apiData["loading"] ? "..." : apiData["data"]["value"]}
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

            <button onClick={() => {

                dispatch(callAPI())

            }}>Test Count API</button>

        </div>
    )
}

export default Todo