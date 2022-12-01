import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TestApp, { temp as Temp} from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import Home from './Home';
import Todos from './Todos';
import Todo from './Todo';

console.log("temp is ",Temp)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route  path='/' element={<TestApp />}>
            <Route  path='home' element={<Home />}/>
            <Route  path='todos/' element={<Todos />}>
              <Route  path=':todoId' element={<Todo />}/>
            </Route>
        </Route>
    </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
