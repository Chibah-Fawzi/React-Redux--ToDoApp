import React, { useState, useEffect } from 'react';
import './App.css';
import { addTodo, removeTodo } from './actions/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


function App(props) {
  const { todos, removeTodo } = props
  const [isEdits, setIsEdits] = useState([]);
  const [changed, setChanged] = useState([]);

  useEffect(() => {
    setIsEdits(new Array(todos.length).fill(false))
  }, [todos]);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setChanged(changed.map((e) => e.target.value))
  // }

  const handleEdit = (index) => {
    setIsEdits(isEdits.map((e, i) => {
      if (i === index)
        return !e
      return e
    }))
  }
  return (
    <>
      <AddTodo addTodo={props.addTodo} />
      {todos.map((todo, index) =>
        <li> {isEdits[index] === true ? <input value={todo.title} /> : todo.title} <button onClick={() => removeTodo(todo.id)}>DELETE</button> <button onClick={() => handleEdit(index)}>EDIT</button> </li>)}
    </>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    todos: state.todosReducer.todoList,
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTodo: addTodo,
  removeTodo: removeTodo,

}, dispatch)


const AddTodo = (props) => {
  const { addTodo } = props
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value)
  }
  const handleAdd = () => {
    addTodo({ title: value })
    setValue('')
  }

  return (
    <>
      <h1>TODO Managers</h1>
      <input type="text" onChange={handleOnChange} value={value} placeholder="Add a task" />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
