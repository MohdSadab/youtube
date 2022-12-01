import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Todos from './Todos';
import Home from './Home';
import Todo from './Todo';

const root = ReactDOM.createRoot(document.getElementById('roots'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App />} >
          <Route path="todos/" element={ <Todos />} >
              <Route index element={<h1> please select a todo</h1>} />
              <Route path=":todo_id" element={<Todo />} >
          </Route>
          </Route>

          <Route path="home" element={ <Home />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
