import React, { useEffect, createContext, useState } from 'react'
import { useSelector } from 'react-redux'

function Todo(props) {
    const [name, setName] = useState("")
    const changeName = (evt) => {
        setName(evt.value)
    }

    return (
        <div>
            <h3>Let's Guess your age based on your name</h3>

            <div>
                <label>Your Name</label>
            </div>
            <div>
                <input type="text" onChange={changeName} />
            </div>

            <button onClick={}>Guess My Age</button>
        </div>
    )
}

export default Todo