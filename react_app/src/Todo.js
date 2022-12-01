import React from 'react'
import {useParams} from 'react-router-dom';
import useFetch from './useFetch';

const Todo = (props) => {
  const {todo_id} = useParams()
 
  const {loading,data=null} = useFetch(`https://jsonplaceholder.typicode.com/todos/${todo_id}`)
  //   const{ userId,id,title } = props.data;
  return (
    <>
    {loading && <h1>Loading...</h1>}
    { data &&
    <div>
        <p>userId:{data.userId}</p>
        <p>Id:{data.id}</p>
        <p>Title:{data.title}</p>
    </div>
  }
    </>
  )
  
}

export default Todo