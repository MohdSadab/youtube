import './App.css';
// import Card from "./Card";
// import Couter from './Counter';
import Form from './Form';
import React from 'react';
import TodoItem from './TodoItem';
import useFetch from './useFetch';

function App() {
  function clickHandler(data){
    console.log(data)
  }

  const [toggle,setToggle] = React.useState(true);
  const {loading,data:todos} = useFetch('https://jsonplaceholder.typicode.com/todos');

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
       {loading && <h1>Loading .....</h1>}
       {todos.map(data=>(
        <TodoItem data={data} key={data.id} />
       ))}
    </div>
  );
}

let temp=10;
export {temp};
export default App;
