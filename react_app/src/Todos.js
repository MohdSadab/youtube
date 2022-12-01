import React from 'react'
import useFetch from './useFetch';
import {Link,Outlet} from 'react-router-dom';

const Todos = () => {

  const {loading,data} = useFetch('https://jsonplaceholder.typicode.com/todos');

  return (
    <div style={{display:'flex'}}>
    <div style={{width:200,borderRight:'1px solid'}}>
        {loading && <h2>Loading...</h2>}
        {data.map(curr=>{
            return(
                <div style={{marginTop:"5px"}} key={curr.id}>
                    <Link to={`${curr.id}`} style={{textDecoration:"none"}}>
                        {curr.title}
                    </Link>
                </div>

            )
        })}
    </div>
    <Outlet/>
    </div>
  )
}

export default Todos