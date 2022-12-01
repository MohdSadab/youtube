import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import useData from './useData';

const Todos = () => {

    const {loading,data} = useData('https://jsonplaceholder.typicode.com/todos/');
    

  return (
    <div style={{display:"flex"}}>
    <nav style={{width:'200px',borderRight:'1px solid'}}>
        <h1>Todos:</h1>
        {loading?<h3>Loading....</h3>:null}
        {data.map(curr=>{
            return(
                <div>
                <NavLink  style={({isActive})=>{
                    return {
                        color: isActive ? "red" : 'blue',
                        textDecoration:"none" 
                    }
                }}  
                to={`${curr.id}`}>
                    {curr.title}
                </NavLink>
                </div>
            )
        })}
    </nav>
    <Outlet />
    </div>
  )
}

export default Todos