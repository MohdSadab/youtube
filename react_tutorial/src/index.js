import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  { App } from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './Home';
import Todos from './Todos';
import Todo from './Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MyApp /> */}
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
              <Route path="home" element={<Home />} />
              <Route path="todos/" element={<Todos />} >
                <Route path=":todo_id" element={<Todo />} />
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
