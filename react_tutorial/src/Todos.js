import React, { useEffect, useState } from 'react'
import {Link,Outlet} from 'react-router-dom';

const Todos = () => {

    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json =>{
            setData(json);
            setLoading(false);
        })
    },[])
  return (
    <div style={{display:'flex'}}>
        {loading && <h1>Loading...</h1>}
        <div style={{width:200,borderRight:'1px solid'}}>
        {data.map(curr=>{
            return (<div>
                <Link to={`${curr.id}`} style={{display:"block",textDecoration:'none'}}>
                    {curr.title}
                </Link>
            
            </div>)
        })}
        </div>
        <Outlet />
    </div>
  )
}

export default Todos