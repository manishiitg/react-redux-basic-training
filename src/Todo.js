import { connect } from 'react-redux'

import { addTodoAction } from "./redux/actions/todo"

const Todo = (props) => {
    return (
        "Todo List"
    )
}


const mapStateToProps = (state) => {
    return {
        todo: state.todos
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (payload) => {
            dispatch(addTodoAction(...payload))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)