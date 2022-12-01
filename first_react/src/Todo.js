import React from 'react'
import { useParams } from 'react-router-dom'
import useData from './useData';

const Todo = (props) => {
//    const {id,title} =props.data;
  const params = useParams()

  const {loading,data=null} = useData(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);
  
  return (
    <div>
        {/* <h3>{id}-{title}</h3> */}
        Todo Item : {params.todoId}
        {loading && <h3>Loading ...</h3>}
        {data && (<>
                <div>{data.title}</div>
        </>)}
    </div>
  )
}

export default Todo