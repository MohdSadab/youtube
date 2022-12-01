import './App.css';
// import Card from './Card';
// import Counter from './Counter';
// import Form from './Form';
// import {useState,useEffect} from 'react';
// import Todo from './Todo';
// import useFetch from './useFetch';
import {Link,Outlet} from 'react-router-dom';

function App() {

  // const [toggle,setToggle] = useState(true);

  // const clickHandler=function(data){
  //   console.log(data);
  // }

  // const [loading,setLoading] =useState(false);
  // const [data,setData] =useState([]);

  // useEffect(()=>{
  //   setLoading(true);
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(json => {
  //     setData(json);
  //     setLoading(false);
  //   })
  // },[])

  // const [page,setPage]=useState(1)
  // // const {loading:newLoading,data:item} = useFetch(`https://jsonplaceholder.typicode.com/todos/${page}`)

  // // console.log(newLoading,item);

  //  const {loading,data} = useFetch('https://jsonplaceholder.typicode.com/todos');

  


  return (
    <div className="App">
     {/* <Card title="Card 1" clickHandler={clickHandler}/>
     <Card title="Card 2" clickHandler={clickHandler}/>
     <Card title="Card 3" clickHandler={clickHandler}/>
     <Card title="Card 4" clickHandler={clickHandler}/>
     <Card title="Card 5" clickHandler={clickHandler}/> */}
     {/* <Counter /> */}
     {/* {toggle && <Form onClick={clickHandler} />}
     <button onClick={()=>setToggle(prevState=>!prevState)}>Toggle</button> */}
      {/* {loading && <h1>Loading....</h1>}
      {data.map(curr=>{
        return(
          <Todo data={curr} key={curr.id} />
        )
      })} */}

      {/* {newLoading && <h1>Loading....</h1>}
      {JSON.stringify(item)}

      <button onClick={()=>setPage(page-1)}>prev</button>
      <button onClick={()=>setPage(page+1)}>Next</button> */}


      <nav style={{padding:'1rem',borderBottom:"1px solid"}}>
            <h1> Navigation </h1>
          {/* <a href="/todos">Todos</a> {" | "}
          <a href="/home">Home</a> */}

          <Link to="/todos">Todos</Link> {" | "}
          <Link to="/home">Home</Link>
      </nav>
      <Outlet />


    </div>
  );
}

export default App;
