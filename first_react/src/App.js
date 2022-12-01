import './App.css';
// import Card from "./Card";
// import Couter from './Counter';
// import Form from './Form';
import React from 'react';
// import TodoItem from './TodoItem';
// import useFetch from './useFetch';
import { Link, Outlet } from 'react-router-dom';

function App() {
  // function clickHandler(data){
  //   console.log(data)
  // }

  // const [toggle,setToggle] = React.useState(true);
  // const {loading,data:todos} = useFetch('https://jsonplaceholder.typicode.com/todos');

  return (
    <div className="App">
       {/* <Card title="Natural Image" src="my src"> </Card>
        <Card title="Natural Image"/>
        <Card title="Natural Image 1"/>
        <Card title="Natural Image 2"/>
        <Card title="Natural Image 3"/>
        <Card title="Natural Image 4"/>
        <Card title="Natural Image 5"/> */}
        {/* <Couter color="red"/> */}
       {/* {toggle && <Form onClick={clickHandler} /> }
       <button onClick={()=>setToggle((prevToggle)=>!prevToggle)}>Toggle</button> */}
       {/* {loading && <h1>Loading .....</h1>}
       {todos.map(data=>(
        <TodoItem data={data} key={data.id} />
       ))} */}
       <nav style={{padding:'1rem',border:'1px solid'}}>
          <h1>Navigation</h1>
          {/* <a href="/todos" >Todos</a> {" | "}
          <a href="/home">Home</a> */}

          <Link to="todos">Todos</Link> {" | "}
          <Link to="home">Home</Link>
       </nav>
       <Outlet />
    </div>
  );
}

let temp=10;
export {temp};
export default App;
