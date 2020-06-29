import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import { useDispatch, useSelector } from 'react-redux'


import { addTodoAction } from "./redux/actions/todo"

function Todo(props) {
    const todoList = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect( () => {
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