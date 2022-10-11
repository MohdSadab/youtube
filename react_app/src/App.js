import './App.css';
// import Card from './Card';
import Counter from './Counter';

function App() {

  // const clickHandler=function(e){
  //   console.log("i get called")
  // }
  return (
    <div className="App">
     {/* <Card title="Card 1" clickHandler={clickHandler}/>
     <Card title="Card 2" clickHandler={clickHandler}/>
     <Card title="Card 3" clickHandler={clickHandler}/>
     <Card title="Card 4" clickHandler={clickHandler}/>
     <Card title="Card 5" clickHandler={clickHandler}/> */}
     <Counter />
    </div>
  );
}

export default App;
