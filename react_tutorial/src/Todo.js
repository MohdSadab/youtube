import React from 'react'
import {useParams} from 'react-router-dom';


const Todo = () => {
    const param = useParams();
    console.log(param);
  return (
    <div>Todo:{param.todo_id}</div>
  )
}

export default Todo