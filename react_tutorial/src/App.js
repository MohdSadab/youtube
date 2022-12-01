import './App.css';
import {Link,Outlet} from 'react-router-dom';

function App() {

  // let [count,setCount] = useState(0)
  

  // function clickHandler(){
  //   setCount(count+1);
  // }

  //componentDidMount
  // useEffect(()=>{
  //     console.log(count,"mount")
  // },[])

  // useEffect(()=>{
  //   console.log(count,"mount")
  // },[count])

  return (
    <div className="App">
       <nav  style={{
          padding:'1rem',
          borderBottom:'1px solid'
       }}>
          <Link to='/home'>Home</Link> {" | "}
          <Link to='/todos'>Todos</Link>
       </nav>
       <Outlet />
    </div>
  );
}

export {App}
export default App;
